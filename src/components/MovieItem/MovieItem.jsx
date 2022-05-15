import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent } from '@material-ui/core';


function MovieItem({ movie }) {

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
        <Card elevation={20}>
            <CardHeader
                action={
                    <IconButton>
                        <InfoIcon onClick={fetchMovie} />
                    </IconButton>
                }
                title={movie.title}
            />
            <CardContent>
                <img src={movie.poster} />
            </CardContent>
        </Card>
    )
}

export default MovieItem