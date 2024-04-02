import React from 'react';

const MoviesTitle = ({title,overview}) => {

  return (
    <div className='pt-[18%] pl-14 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl'>{title}</h1>
        <p className='pt-2 text-sm w-4/12'>{overview}</p>
        <button className='shadow-lg  font-bold bg-white text-black px-10 py-3 mt-2 rounded-md'>
            ▷ Play
        </button>
        <button className='shadow-lg mx-2  font-bold bg-gray-500 opacity-50 text-white px-8 py-3 mt-2 rounded-md' >
            More Info
        </button>
    </div>
  )
}
export default MoviesTitle;
