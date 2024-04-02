import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
 
  return (
    movies&&
    (<div className='w-screen'>
        <div className='text-2xl p-4 pb-0'>{title}</div>
        <div className='flex overflow-x-scroll'>               
        <div className='flex p-2'>
        {movies.map(movie=><MovieCard movie={movie}/>)}
        </div>
        </div>
        

    </div>)
  )
}

export default MovieList