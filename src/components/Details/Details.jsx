import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';


function Details() {

    const movie = useSelector(store => store.movie)
    const genres = useSelector(store => store.genres)
    const history = useHistory();

    const goBack = () => {
        history.push('/')
    }

    return (
        <div className="details-page">
            <h1>Movie Details</h1>

            {movie && movie.map((movie) => {
                return (
                    <div key={movie.id}>
                        <img src={movie.poster} key={movie.id} />
                        <p>{movie.description}</p>
                        <Button variant="contained" onClick={goBack}>Back to movie list</Button>
                    </div>

                )




            })}

            <h2>Genres:</h2>

            {genres && genres.map((genre) => {
                return (
                    <h4>{genre.name}</h4>
                )
            })}
        </div>

    )



}

export default Details