import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css'

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={styles.container}>
        {cities.map(city => <Card
            key={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            id={city.id}
            country={city.country}
            temp={city.temp}
            /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
