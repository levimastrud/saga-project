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

function* watcherSaga(){
yield takeEvery(`FETCH_FAVS`,fetchFavsSaga);

yield takeEvery(`ADD_FAVS`,addFavsSagas);

}

function* fetchFavsSaga(action){
try{
console.log("in the fetch favs saga")
const response = yield axios.get('/api/favorite')

yield put({type: 'SET_FAVS', payload: response.data})

} catch {
    console.error(`error FETCHing favs`,error);
}
}


function* addFavsSagas(action){
    try{
    console.log("in the ADD favs saga")
    
    yield put({type: 'FETCH_FAVS'})
    
    } catch {
        console.error(`error ADDing fav's`,error);
    }
    }

const favsReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_FAVS':
            return action.payload;
        default: 
            return state;
    }
}


const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        favsReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
)


sagaMiddleware.run(watcherSaga)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
