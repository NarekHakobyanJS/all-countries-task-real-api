import { combineReducers, createStore } from "redux";
import countriesReducer from "./countriesReducer";
import countryReducer from "./countryReducer";

const reducer = combineReducers({
    countriesPage : countriesReducer,
    country : countryReducer
})
const store = createStore(reducer)

window.store = store 
export default store