import React, { Component } from "react";
import styles from "./VirusData.module.css";
import DatePicker from "react-datepicker";
import Graph from "../../components/Graph/Graph";
import "react-datepicker/dist/react-datepicker.css";

class VirusData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newCases: 0,
			dateToPut: new Date(),
			error: false,
			loadingMsg: "Loading...",
			errMsg: "",
			errorStyle: "styles.AlertHidden",
		};
		this.submitHandler = this.submitHandler.bind(this);
		this.newCaseChangeHandler = this.newCaseChangeHandler.bind(this);
		this.setStartDate = this.setStartDate.bind(this);
	}
	submitHandler = (event) => {
		let num = +event.target.value;
		if (!Number.isInteger(num)) {
			this.setState({
				error: true,
				errMsg: "",
				errorStyle: "styles.AlertVisible",
				newCases: num,
			});
			return;
		}
		if (this.state.dateToPut === null) {
			this.setState({
				error: true,
				errorStyle: "styles.AlertVisible",
				errMsg: "Please select a valid date.",
			});
			return;
		}
	};
	newCaseChangeHandler = (event) => {
		let num = +event.target.value;
		if (Number.isInteger(num)) {
			this.setState({
				error: false,
				errMsg: "",
				errorStyle: "styles.AlertHidden",
				newCases: num,
			});
		} else {
			this.setState({
				error: true,
				errMsg: "Please put a valid number.",
				errorStyle: "styles.AlertVisible",
			});
		}
	};
	setStartDate = (date) => {
		this.setState({ dateToPut: date });
	};
	render() {
		return (
			<div className={styles.VirusData}>
				<div
					className={this.state.errorStyle}
					style={{ width: "100%", height: "30px", color: "red" }}
				>
					{this.state.errMsg}
				</div>
				<div className={styles.VirusDataWrapper}>
					<div>
						<input
							type="text"
							name="newCase"
							placeholder="Number of Cases"
							onChange={this.newCaseChangeHandler}
						/>
						<DatePicker
							selected={this.state.dateToPut}
							onChange={(date) => this.setStartDate(date)}
						/>
					</div>
				</div>
				<button onClick={this.submitHandler} className={styles.Submit}>
					Submit
				</button>
				<Graph />
			</div>
		);
	}
}

export default VirusData;
