import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincomponent from './Maincomponent';
import { Secondarycomponent } from './Secondarycomponent';
import usePopularMovies from '../hooks/usePopularMovie';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='flex justify-between'>
      
      <div>
        <Header/>
        <Maincomponent/>
        <Secondarycomponent/>
      </div>
      
    </div>
  )
}

export default Browse;