import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';``


function MovieItem({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const fetchMovie = () => {
        console.log('in fetchMovie!');
        dispatch({
            type: 'FETCH_MOVIE',
            payload: movie.id
        })
        dispatch({
            type: 'FETCH_GENRE',
            payload: movie.id
        })
        history.push('/details')
    }
    return (
        <ImageListItem key={movie.id}  >
              <img id="movie-poster"
                src={`${movie.poster}?w=248&fit=crop&auto=format`}
                srcSet={`${movie.poster}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={movie.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={movie.title}
                // subtitle={movie.title}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${movie.title}`}
                    onClick={fetchMovie}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
        // <div>
        //     <h3>{movie.title}</h3>
        //     <img src={movie.poster} alt={movie.title} onClick={fetchMovie} />
        // </div>
    )
}

export default MovieItem