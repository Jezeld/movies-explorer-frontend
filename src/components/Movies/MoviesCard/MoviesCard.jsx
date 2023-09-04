import React from 'react'
import './MoviesCard.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function MoviesCard ({ movie }) {
  const [savedFilms, setSavedFilms] = useState(false)
  const location = useLocation()
  const trashFilms = location.pathname === '/saved-movies'
  const [isShown, setIsShown] = useState(false)
  return (
    <li
      className='moviesCard'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <article>
        <img className='moviesCard__image' src={movie.image} alt={movie.nameRU} />
        <div className='moviesCard__name'>
          <div className='moviesCard__text-content'>
            <h2 className='moviesCard__title'>{movie.nameRU}</h2>
            <span className='moviesCard__time'>{movie.duration}</span>
          </div>
          {!trashFilms && (
            <button
              className={`moviesCard__like ${
                savedFilms ? 'moviesCard__like_active' : ''
              } `}
              onClick={() => setSavedFilms(!savedFilms)}
              type='button'
              aria-label='нравиться'
            ></button>
          )}
          {isShown && trashFilms && (
            <button
              className='moviesCard__delete'
              type='button'
              aria-label='удалить'
            ></button>
          )}
        </div>
      </article>
    </li>
  )
}

export default MoviesCard
