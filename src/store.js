import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {Redit} from './reducer'
const all = combineReducers({
    Redit
})
const store = createStore(all,applyMiddleware(thunk))
export default store