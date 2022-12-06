import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCountriesAction } from './redux/countriesReducer';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Countries from './pages/Countries/Countries';
import Home from './pages/Home/Home';

function App() {
  const continentsFilter = ['Africa', 'South America', 'Asia', 'Oceania', 'Europe', 'North America']
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countriesPage.countries)
  console.log(countries)
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => dispatch(setCountriesAction(response.data)))
  }, [])

  return (
    <div className="app">
      <Header />

      <div className='main'>
        <Routes>
          <Route path='/' element={<Home countries={countries}/>} />
          <Route path='/countries/:name' element={<Countries />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
