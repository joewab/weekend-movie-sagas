import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';
import Grid from '@mui/material/Grid';
import { Container } from '@material-ui/core';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <Container>
        <Grid container spacing={2}>
            {movies && movies.map((movie) => {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                    <MovieItem key={movie.id} movie={movie} />
                    </Grid>
                )
            }
            )}
        </Grid>
        </Container>
    );
}

export default MovieList;