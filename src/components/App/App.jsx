import "./../../index.css";
import { useState, useEffect, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import "./App.css";
import auth from "../../utils/Auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ProtectedRouteAuth from "../ProtectedRoute/ProtectedRouteAuth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [saveMovies, setSaveMovies] = useState([]);
  const [isMessageApi, setIsMessageApi] = useState("");
  const navigate = useNavigate();
  const [saveMessage, setSaveMessage] = useState({
    textMessage: "",
  });
  const [stateIsLogin, setStateIsLogin] = useState(
    JSON.parse(localStorage.getItem("stateIsLogin")) || { isLoggedIn: false }
  );

  const handleError = (err) => {
    if (err === "Ошибка: 409 Conflict")
      return setIsMessageApi("Пользователь с таким email уже существует");
    if (err === "Ошибка: 401 Unauthorized")
      return setIsMessageApi("Вы ввели неправильный логин или пароль");
    if (err) return setIsMessageApi(`Что то пошло не так...`);
  };

  useEffect(() => {
    localStorage.setItem("stateIsLogin", JSON.stringify(stateIsLogin));
  }, [stateIsLogin]);

  const checkToken = useCallback(() => {
    if (localStorage.getItem("jwt")) {
      let jwt = localStorage.getItem("jwt");

      auth
        .checkToken(jwt)
        .then((res) => {
          const { _id, name, email } = res;
          setStateIsLogin({
            isLoggedIn: true,
          });
          setCurrentUser({ _id, name, email });
        })
        .catch((error) => console.log(`Ошибка: ${error}`));
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  const handleRegister = (name, email, password) => {
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
        navigate("/signin");
      })
      .catch((err) => {
        handleError(err);
        console.error(err);
      });
  };

  const handleLogin = (email, password) => {
    auth
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          checkToken();
        }
        setStateIsLogin({
          isLoggedIn: true,
        });
        navigate("/movies");
      })
      .catch((err) => {
        handleError(err);
        console.error(err);
      });
  };

  function handleLikeMovie(movie) {
    const movieIsLiked = saveMovies.some((item) => item.movieId === movie.id);
    if (!movieIsLiked) {
      mainApi
        .postNewMovie({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: "https://api.nomoreparties.co" + movie.image.url,
          trailerLink: movie.trailerLink,
          thumbnail:
            "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        })
        .then((addedMovie) => {
          setSaveMovies([addedMovie, ...saveMovies]);
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        });
    } else {
      const likedMovie = saveMovies.find(
        (item) => item.movieId === movie.id
      )._id;
      mainApi
        .deleteMovie(likedMovie)
        .then(() => {
          setSaveMovies((state) =>
            state.filter((item) => item.movieId !== movie.id)
          );
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        });
    }
  }

  function handleCardDelete(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSaveMovies((movies) =>
          movies.filter((item) => item.movieId !== movie.movieId)
        );
      })
      .catch(() => console.log("ошибка"));
  }

  function handleUpdateProfile({ name, email }) {
    mainApi
      .changeUserInfo(name, email)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email,
        });
        setSaveMessage({
          textMessage: "Данные успешно изменены!",
        });
      })
      .catch((err) => {
        handleError(err);
        console.error(err);
      });
  }

  function signOut() {
    localStorage.clear();
    setSaveMovies([]);
    setStateIsLogin({
      isLoggedIn: false,
    });
    setCurrentUser({
      name: "",
      email: "",
    });
    navigate("/");
  }

  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header isLoggedIn={stateIsLogin.isLoggedIn} />
        <main className="content">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute isLoggedIn={stateIsLogin.isLoggedIn}>
                  <Movies
                    handleLikeMovie={handleLikeMovie}
                    saveMovies={saveMovies}
                    setSaveMovies={setSaveMovies}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLoggedIn={stateIsLogin.isLoggedIn}>
                  <SavedMovies
                    saveMovies={saveMovies}
                    handleCardDelete={handleCardDelete}
                    setSaveMovies={setSaveMovies}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <ProtectedRouteAuth isLoggedIn={stateIsLogin.isLoggedIn}>
                  <Login
                    isLoggedIn={stateIsLogin.isLoggedIn}
                    onLogin={handleLogin}
                    isMessageApi={isMessageApi}
                    setIsMessageApi={setIsMessageApi}
                  />
                </ProtectedRouteAuth>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRouteAuth isLoggedIn={stateIsLogin.isLoggedIn}>
                  <Register
                    isLoggedIn={stateIsLogin.isLoggedIn}
                    onRegister={handleRegister}
                    isMessageApi={isMessageApi}
                    setIsMessageApi={setIsMessageApi}
                  />
                </ProtectedRouteAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={stateIsLogin.isLoggedIn}>
                  <Profile
                    handleUpdateProfile={handleUpdateProfile}
                    textMessage={saveMessage.textMessage}
                    signOut={signOut}
                    isMessageApi={isMessageApi}
                    setIsMessageApi={setIsMessageApi}
                    setSaveMessage={setSaveMessage}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
