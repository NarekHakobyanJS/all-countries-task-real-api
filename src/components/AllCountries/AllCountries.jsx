import React from 'react'
import "./AllCountries.scss"
import { setCountryAction } from '../../redux/countryReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MdLocationOn } from "react-icons/md"

function AllCountries({ country }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goToCountriesPage = (country) => {
        const name = country.name.common
        navigate(`/countries/${name}`)
        dispatch(setCountryAction(country))
    }
    return (
        <div
            className='AllCountriesCard'
            onClick={() => goToCountriesPage(country)}
        >
            <img src={country.flags.png} />
            <div className="cardDescription">
                <h2>{country.name.official}</h2>
                <p>capital : <b>{country.capital}</b></p>
                <p>continents : <b>{country.continents}</b></p>
                <p>population : <b>{country.population}</b></p>
            </div>
        </div>
    )
}

export default AllCountries