import React, { Component } from "react";
import styles from "./VirusData.module.css";
import GetDate from "../../components/GetDate/GetDate";

class VirusData extends Component {
	state = {
		newCases: 0,
		dateToPut: null,
		error: false,
		loading: false,
		showAlert: false,
	};

	submitHandler = () => {};
	render() {
		return (
			<div className={styles.VirusData}>
				<div className={styles.Alert}>Please enter a valid number.</div>
				<div className={styles.VirusDataWrapper}>
					<div>
						<input type="text" placeholder="Number of Cases" />
						<GetDate />
					</div>
					<button className={styles.SubmitBtn} onClick={this.submitHandler}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

export default VirusData;
