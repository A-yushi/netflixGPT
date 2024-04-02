import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { OPTION } from '../utils/constants';
import { useEffect } from 'react';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const fetchTopRatedMovies= async() =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",OPTION);
  
      const json = await data.json();
     
  
      dispatch(addTopRatedMovies(json.results));
    }
  
    useEffect(()=>{
      fetchTopRatedMovies();
    },[])
  
}

export default useTopRatedMovies;