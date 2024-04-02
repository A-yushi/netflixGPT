import React, { useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { addMovieTrailer } from '../utils/moviesSlice';
import { OPTION } from '../utils/constants';

export const useMovieTrailer = (movieId) => {
    console.log(movieId)


    const dispatch = useDispatch();

    const fetchMovieData = async() =>{
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",OPTION
          )
        const jsonData = await data.json();
    
        const trailer = jsonData.results.filter((movie)=>movie.type=="Trailer");
    
        console.log(trailer[0]);

        dispatch(addMovieTrailer(trailer[0]));




    
        //console.log(jsonData);
      }
    
      useEffect(()=>{
        fetchMovieData();
    
      },[])
    
    




  return (
    <div>useMovieTrailer</div>
  )
}
