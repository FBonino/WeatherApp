import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import {Route} from 'react-router-dom';
import About from '../components/About';
import City from '../components/City';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setTimeout(() => setCities(oldCities => oldCities.filter(c => c.id !== id)), 500);  
  }

  function onSearch(city) {
    fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then(data => {
        if(data.count){
          data = data.list[0];
          const city = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
            country: data.sys.country,
            feelsLike: data.main.feels_like
          };
          cities.filter(oldCity => oldCity.id === city.id).length ? alert("City already added") : setCities(oldCities => [...oldCities, city]);
        } else {
          alert("City not found");
        }
      });
  }

  function onFilter(cityId) {
    let city = cities.filter(c => c.id === parseInt(cityId));
    return city.length ? city[0] : null;
  }

  return (
    <div className="App">
      <Nav onSearch = {onSearch}/>
      <Route path='/about' component={About}/>
      <Route exact path='/'>
        <Cards cities = {cities} onClose = {onClose} />
      </Route>
      <Route path = '/city/:id' render = {({match}) => <City city = {onFilter(match.params.id)}/> }/>
    </div>
  );
}

export default App;
