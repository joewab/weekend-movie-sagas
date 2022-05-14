import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function---------------------

function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE', fetchMovie);
    yield takeEvery('FETCH_GENRE', fetchGenre);

}

//sagas-----------------------------------------------------

function* fetchGenre(action){
    try {
        const genre = yield axios.get(`/api/genre/${action.payload}`);
        console.log('get the genres:', action.payload);
        yield put({ type: 'SET_GENRES', payload: genre.data });

    } catch {
        console.log('get genre error');
    }
}

function* fetchMovie(action) {
    try{
        const movie = yield axios.get(`api/movie/${action.payload}`);
        console.log('get one movie:', action.payload);
        yield put({
            type: 'SET_MOVIE',
            payload: movie.data
        })
    } catch{
        console.log('fetchMovie error');
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//reducers----------------------------------------------------

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const movie = (state = [], action) => {
    if(action.type==='SET_MOVIE'){
        return action.payload;
    }
    return state;
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}


//store---------------------------------------------------------

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
