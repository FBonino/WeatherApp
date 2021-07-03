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

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/find?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.count){
          recurso = recurso.list[0];
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country,
            feelsLike: recurso.main.feels_like
          };
          cities.filter(oldCity => oldCity.id === city.id).length ? alert("Ciudad ya agregada") : setCities(oldCities => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <Route path = '/'>
        <Nav onSearch = {onSearch}/>
      </Route>
      <Route path='/about' component={About}/>
      <Route exact path='/'>
        <Cards cities = {cities} onClose = {onClose} />
      </Route>
      <Route path = '/ciudad/:id' render = {({match}) => <City city = {onFilter(match.params.id)}/> }/>
    </div>
  );
}

export default App;
