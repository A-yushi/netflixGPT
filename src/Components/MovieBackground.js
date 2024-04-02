import React, { useEffect } from 'react'
import { OPTION } from '../utils/constants'
import { useMovieTrailer } from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const MovieBackground = ({movieId}) => {

  useMovieTrailer(movieId);

  const trailer = useSelector((movie)=>movie.movies?.movieTrailer);

  if(!trailer) return;


  

  return (
    <div className='w-screen -mt-20'>
      <iframe className='w-screen aspect-video '
      
      src={"https://www.youtube.com/embed/"
      +trailer.key+
      "?autoplay=1&mute=1"} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen
      frameBorder="0"
      
      ></iframe>



    </div>
  )
}
export default MovieBackground;
