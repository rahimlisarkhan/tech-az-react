import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { homePageReducer } from './reducers/homePageReducer'


//ALL REDUCERS
const reducers = combineReducers({
    homePage:homePageReducer,
})

//STORE
export const store = createStore(reducers,{},applyMiddleware(thunk))