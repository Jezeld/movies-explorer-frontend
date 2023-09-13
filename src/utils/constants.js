const SCREEN_320 = 740;
const SCREEN_768 = 818;
const CARDS_SCREEN_1280 = 12;
const CARDS_SCREEN_768 = 8;
const CARDS_SCREEN_320 = 5;
const MORE_1280 = 4;
const MORE_768 = 2;
const movieTime = 40;

export function findMoviesName (movies, name) {
  return movies.filter((data) => {
    return data.nameRU.toLowerCase().includes(name.toLowerCase())
  })
}

export function findMoviesTime (movies) {
  return movies.filter((data) => {
    return data.duration <= movieTime
  })
}

export {
  SCREEN_320,
  SCREEN_768 ,
  CARDS_SCREEN_1280,
  CARDS_SCREEN_768,
  CARDS_SCREEN_320,
  MORE_1280,
  MORE_768,
}





// import image1 from "../images/movies/design.jpg";
// import image2 from "../images/movies/moviealmanac.jpg";
// import image3 from "../images/movies/banksy.jpg";
// import image4 from "../images/movies/basquiat.jpg";
// import image5 from "../images/movies/run.jpg";
// import image6 from "../images/movies/booksellers.jpg";
// import image7 from "../images/movies/thinkaboutgermany.jpg";
// import image8 from "../images/movies/gimmedanger.jpg";
// import image9 from "../images/movies/Janice.jpg";
// import image10 from "../images/movies/jump.jpg";
// import image11 from "../images/movies/dogcalledmoney.jpg";
// import image12 from "../images/movies/onthewave.jpg";

// const moviesList = [
//   {
//     duration: "1ч 47м",
//     image: image1,
//     id: 1,
//     nameRU: "33 слова о дизайне",
//   },
//   {
//     duration: "1ч 3м",
//     image: image2,
//     id: 2,
//     nameRU: "Киноальманах «100 лет дизайна»",
//   },
//   {
//     duration: "1ч 42м",
//     image: image3,
//     id: 3,
//     nameRU: "В погоне за Бенкси",
//   },
//   {
//     duration: "1ч 21м",
//     image: image4,
//     id: 4,
//     nameRU: "Баския: Взрыв реальности",
//   },
//   {
//     duration: "1ч 44м",
//     image: image5,
//     id: 5,
//     nameRU: "Бег это свобода",
//   },
//   {
//     duration: "1ч 37м",
//     image: image6,
//     id: 6,
//     nameRU: "Книготорговцы",
//   },
//   {
//     duration: "1ч 56м",
//     image: image7,
//     id: 7,
//     nameRU: "Когда я думаю о Германии ночью",
//   },
//   {
//     duration: "1ч 58м",
//     image: image8,
//     id: 8,
//     nameRU: "Gimme Danger: История Игги и The Stooge...",
//   },
//   {
//     duration: "1ч 42м",
//     image: image9,
//     id: 9,
//     nameRU: "Дженис: Маленькая девочка грустит",
//   },
//   {
//     duration: "1ч 10м",
//     image: image10,
//     id: 10,
//     nameRU: "Соберись перед прыжком",
//   },
//   {
//     duration: "1ч 4м",
//     image: image11,
//     id: 11,
//     nameRU: "Пи Джей Харви: A dog called money",
//   },
//   {
//     duration: "1ч 7м",
//     image: image12,
//     id: 12,
//     nameRU: "По волнам: Искусство звука в кино",
//   },
// ];

// const moviesListSaved = [
//   {
//     duration: "1ч 47м",
//     image: image1,
//     id: 1,
//     nameRU: "33 слова о дизайне",
//   },
//   {
//     duration: "1ч 3м",
//     image: image2,
//     id: 2,
//     nameRU: "Киноальманах «100 лет дизайна»",
//   },
//   {
//     duration: "1ч 42м",
//     image: image3,
//     id: 3,
//     nameRU: "В погоне за Бенкси",
//   }
// ]

// export {moviesList, moviesListSaved};
