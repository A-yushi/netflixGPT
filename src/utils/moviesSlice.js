import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        moviesList:null,
        movieTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
           state.moviesList = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
         },
         addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
         },
         addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
         }

    }
})

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;