import React from 'react'
import MoviesTitle from './MoviesTitle'
import { useSelector } from 'react-redux';
import MovieBackground from './MovieBackground';

const Maincomponent = () => {

    const nowPlaying = useSelector((store)=>store.movies.moviesList);

    if(!nowPlaying) return;

    const movie = nowPlaying[0];

 return (
    <div>
        <MoviesTitle title={movie.title} overview = {movie.overview}/>
        <MovieBackground movieId={movie.id}/>
    </div>
  )
}

export default Maincomponent