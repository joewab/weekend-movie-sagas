import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


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
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={fetchMovie} />
        </div>
    )
}

export default MovieItem