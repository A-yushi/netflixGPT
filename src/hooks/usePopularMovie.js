import { useDispatch } from 'react-redux';
import { OPTION } from '../utils/constants';
import { useEffect } from 'react';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const fetchPopularMovies= async() =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",OPTION);
  
      const json = await data.json();
     
  
      dispatch(addPopularMovies(json.results));
    }
  
    useEffect(()=>{
      fetchPopularMovies();
    },[])
  
}

export default usePopularMovies