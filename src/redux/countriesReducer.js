const SET_COUNTRIES = "SET_COUNTRIES"

const initialState = {
    countries : []
}

const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COUNTRIES : 
        return {
            ...state,
            countries : action.payload
        }
        default: 
        return state
    }
}

export const setCountriesAction = (countriesData) => ({type : SET_COUNTRIES, payload : countriesData })

export default countriesReducer