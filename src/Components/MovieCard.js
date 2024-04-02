import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {

    console.log(movie)
    console.log("hello")
   
  return (
    <div>
        <div className='w-36 p-3'>
            <img src={IMG_CDN_URL+movie.poster_path}/>

            
        </div>
    </div>
  )
}

export default MovieCard