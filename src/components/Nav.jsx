import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        <NavLink to='/' className={styles.header}>
          <img src={Logo} alt="" className={styles.logo}/>
          <h5> Henry - Weather App </h5>
        </NavLink>
      </div>
      <div>
        <SearchBar onSearch={onSearch}/>
      </div>
      <div>
        <NavLink to='/about' className={styles.about}>
          <h6 className={styles.about}> About </h6>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;