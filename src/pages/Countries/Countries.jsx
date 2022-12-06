import React from 'react'
import Iframe from 'react-iframe'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './Countries.scss'

function Countries() {
  const params = useParams()
  const country = useSelector(state => state.country.country)
  console.log(country)
  return (
    <div className='countryPage'>
      <h1>{country.name.official}</h1>
      <h3> Common name : {country.name.common}</h3>
      <div className='countryDecription'>
        <div className='countryImg'>
          <h2>National Flag</h2>
          <img src={country.flags.png} />
          <h2>National CoatOfArms</h2>
          <img src={country.coatOfArms.png} className="coatOfArms" />
        </div>
        <div className='countryDesc'>
          <p> Area : <b>{country.area}  km² </b></p>
          <p> Capital : <b>{country.capital} </b></p>
          <p> Continents : <b>{country.continents} </b></p>
          <p> Population : <b>{country.population} person</b></p>
          <p> Languages : <b>{Object.values(country.languages).join(", ")}</b></p>
          <p> Status : <b>{country.status}</b></p>
          <p> Borders : <b>{country.borders.map(bor => <span>{bor}</span>)}</b></p>
        </div>
      </div>
    </div>
  )
}

export default Countries