import React, { Component } from "react";
import styles from "./VirusData.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

class VirusData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newCases: 0,
			dateToPut: new Date(),
			error: false,
			loading: false,
			loadingMsg: "Loading...",
			errMsg: "",
		};
		this.submitHandler = this.submitHandler.bind(this);
		this.newCaseChangeHandler = this.newCaseChangeHandler.bind(this);
		this.setStartDate = this.setStartDate.bind(this);
	}

	submitHandler = (event) => {
		if (!Number.isInteger(this.state.newCases)) {
			this.setState({ error: true, errMsg: "Please put a valid number." });
		}
		if (this.state.dateToPut === null) {
			this.setState({ error: true, errMsg: "Please select a valid date." });
		}
		event.preventDefault();
	};
	newCaseChangeHandler = (event) => {
		event.preventDefault();
		this.setState({ newCases: event.target.value });
	};
	setStartDate = (date) => {
		this.setState({ dateToPut: date });
	};
	render() {
		return (
			<div className={styles.VirusData}>
				<div className={styles.Alert}>Please enter a valid number.</div>
				<div className={styles.VirusDataWrapper}>
					<form onSubmit={this.submitHandler}>
						<div>
							<input
								type="text"
								placeholder="Number of Cases"
								onChange={this.newCaseChangeHandler}
							/>
							<DatePicker
								selected={this.state.dateToPut}
								onChange={(date) => this.setStartDate(date)}
							/>
						</div>
						<input type="submit" value="Submit" className={styles.Submit} />
					</form>
				</div>
			</div>
		);
	}
}

export default VirusData;
