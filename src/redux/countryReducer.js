const SET_CONUTRY = "SET_CONUTRY";

const initialState = {
    country : {}
}

const countryReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CONUTRY : 
        return {
            ...state,
            country : action.payload
        }
        default : 
        return state
    }
}

export const setCountryAction = (country) => ({type : SET_CONUTRY, payload : country})
export default countryReducer