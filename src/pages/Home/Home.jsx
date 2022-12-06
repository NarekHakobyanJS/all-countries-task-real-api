import React, { useState } from 'react'
import AllCountries from '../../components/AllCountries/AllCountries'
import "./Home.scss"

function Home({ countries }) {
  const [text, setText] = useState('');

  let countriesData = countries
    .filter(el => el.name.official.toLowerCase().includes(text))
    .map((c) => <AllCountries country={c} />)
  return (
    <>
      <div className='all'>

        <h1>ALL Countries ...</h1>
        <input
          value={text}
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='all-country'>
        {countriesData}
      </div>
    </>

  )
}

export default Home