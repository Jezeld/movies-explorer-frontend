// import "./App.css";
import "./../../index.css";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Register from "../Auth/Register";
import SavedMovies  from "../SavedMovies/SavedMovies";


function App() {
  return (
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }
        />
         <Route
            path="/saved-movies"
            element={
              <>
                <Header />
                <SavedMovies />
                <Footer />
              </>
            }
          />
        {/* <Route
            path="/signin"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          /> */}
          <Route
            path="/signup"
            element={
              <>
                <Header />
                <Register />
              </>
            }
          />

      </Routes>
  );
}

export default App;
