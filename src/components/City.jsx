import React from "react";
import styles from './City.module.css'

export default function City({city}) {
  return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h2>{city.name}, {city.country} <img className={styles.flag} src={`https://openweathermap.org/images/flags/${city.country.toLowerCase()}.png`} alt=""/></h2>                    
				<div className={styles.info}>
					<div className={styles.props}>
						<div>Temperature: {city.temp} ºC</div>
						<div>Feels like: {city.feelsLike} ºC</div>
						<div>Min: {city.min} ºC  / Max: {city.max} ºC</div>
						<div>Weather: {city.weather}</div>
						<div>Wind: {city.wind} km/h</div>
						<div>Clouds: {city.clouds}</div>
						<div>Latitude: {city.latitud}º</div>
						<div>Longitude: {city.longitud}º</div>
					</div>
					<img className={styles.image} src={`https://openweathermap.org/img/wn/${city.img}@2x.png`} alt=""/>
				</div>
			</div>
		</div>
  )
}