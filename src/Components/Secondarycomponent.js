import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export const Secondarycomponent = () => { 
  const movies = useSelector(store=>store.movies);

  console.log(movies.moviesList)

  return (
   movies.moviesList && ( <div className='bg-black text-white'>
      <div className='-mt-60 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.moviesList}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      

      </div>
      

    </div>)
  )
}


