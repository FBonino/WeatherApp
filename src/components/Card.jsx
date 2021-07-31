import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

export default function Card({ name, img, onClose, id, country, temp }) {
  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={onClose}> 🔴 </button>
      <Link to={`/city/${id}`} className={styles.link}>
        <div>
          <div className={styles.city}>
            <h3 style={{ overflow: 'clip' }}> {name}, {country}</h3>
            <img className={styles.flag} src={`https://openweathermap.org/images/flags/${country.toLowerCase()}.png`} alt="" />
          </div>
        </div>
        <div className={styles.props}>
          <div>
            <h2> {temp} ºC</h2>
          </div>
          <div>
            <img className={styles.image} src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
};