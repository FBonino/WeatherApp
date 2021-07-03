import React, { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="City..."
          value={city}
          onChange={e => setCity(e.target.value)}
          className={styles.input}
          />
        <input type="submit" value="📌" className={styles.button}/>
      </div>
    </form>
  );
}
