import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';
import {HashRouter as Router, Route} from 'react-router-dom';
// import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <ImageList sx={{ width: 400, height: 400 }}>
          <ImageListItem key="Subheader" cols={3}>
            <ListSubheader component="div">Movies!</ListSubheader>
          </ImageListItem>
          {movies.map((movie) => {
              return(
                <MovieItem key={movie.id} movie={movie}/>
              )
          }
            
          )}
        </ImageList>
      );

    // return (
    //     <main>
    //         <h1>MovieList</h1>
    //         <section className="movies">
    //             {movies.map((movie) => {
    //                 return (
    //                     <MovieItem key={movie.id} movie={movie}/>
    //                 );
    //             })}
    //         </section>
    //     </main>

    // );
}

export default MovieList;