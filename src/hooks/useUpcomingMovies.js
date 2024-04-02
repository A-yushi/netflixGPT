import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { OPTION } from '../utils/constants';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const fetchUpcomingMovies= async() =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",OPTION);
  
      const json = await data.json();
     
  
      dispatch(addUpcomingMovies(json.results));
    }
  
    useEffect(()=>{
      fetchUpcomingMovies();
    },[])
  
}

export default useUpcomingMovies;