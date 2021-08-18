import {combineReducers, createStore} from 'redux'
import {sinhVienReducer} from './Reducer/sinhVienReducer'

const rootReducer = combineReducers({

    sinhVienReducer: sinhVienReducer


});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);