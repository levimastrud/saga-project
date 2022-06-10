import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* watcherSaga() {
    yield takeEvery(`FETCH_FAVS`, fetchFavsSaga);

    yield takeEvery(`ADD_FAVS`, addFavsSagas);

    yield takeEvery(`SEARCH`, searchSaga)

}

function* searchSaga(action) {
    try {
        console.log("in the search saga:", action.payload)
        //const response = yield axios.get('/api/favorite')
        const response = yield axios.post("/api/search", {search: action.payload})
        yield put({ type: 'SET_SEARCH', payload: response.data })

    } catch {
        console.error(`error searching images`);
    }
}

function* fetchFavsSaga(action) {
    try {
        console.log("in the fetch favs saga")
        const response = yield axios.get('/api/favorite')
        console.log(response.data)
        
        yield put({ type: 'SET_FAVS', payload: response.data })
        
    } catch {
        console.error(`error FETCHing favs`);
    }
}


function* addFavsSagas(action) {
    try {
        console.log("in the ADD favs saga", action.payload);
        yield axios.post("/api/favorite",  action.payload)
        yield put({ type: 'FETCH_FAVS' })

    } catch {
        console.error(err => `error ADDing favs`, err);
    }
}

const favsReducer = (state = [], action) => {
    console.log("in favs reducer")
    switch (action.type) {
        case 'SET_FAVS':
            return action.payload;
        default:
            return state;
    }
}

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return action.payload.data;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        favsReducer,
        search: searchReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
)


sagaMiddleware.run(watcherSaga)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
