import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


function Details() {
    
    const movie = useSelector(store => store.movie)
    const history = useHistory();

    const goBack = () => {
        history.push('/')
    }

    return(
        <>
        <h1>Movie Details</h1>
        
        {movie && movie.map((movie) => {
            return(
                <div key={movie.id}>
                <img src={movie.poster} key={movie.id}/>
                <p>{movie.description}</p>
                <button onClick={goBack}>Back to movie list</button>
                </div>
            )

        })}
        </>

    )



}

export default Details