import React from "react";
import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
	return (
		<div className={styles.Cockpit}>
			<h1>Coronavirus Case Count in Texas</h1>
			<h5>Updated {Date().toLocaleString()}</h5>
			<p>
				The data shown here is dummy. <br /> <br />
				This app is just for a test to enter data to firebase server and show it
				with a graph.
			</p>

			<h4>Please enter a date and a number of new cases.</h4>
		</div>
	);
};

export default Cockpit;
