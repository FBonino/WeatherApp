import React from "react";
import styles from './About.module.css'

export default function About() {
	return (
		<div className={styles.container}>
			<h5>Weather app created by FBonino as an exercise to practice React.</h5>
			<div className={styles.links}>
				<a className = {styles.link} href="https://github.com/FBonino">Github</a>
				<a className = {styles.link} href="https://www.linkedin.com/in/fbonino/">LinkedIn</a>
			</div>
		</div>
	)
}