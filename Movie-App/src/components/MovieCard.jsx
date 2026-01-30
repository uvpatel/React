import React from 'react'

export default function MovieCard(
    {movie: {title, vote_average, poster_path , release_data,original_language}}) {
  return (
    <p key={movie.id} className='text-white'>{title}</p>
  )
}
