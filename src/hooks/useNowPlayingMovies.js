import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { OPTION } from '../utils/constants';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const fetchNowPlayingMovies= async() =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",OPTION);
  
      const json = await data.json();
     
  
      dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect(()=>{
      fetchNowPlayingMovies();
    },[])
  
}

export default useNowPlayingMovies