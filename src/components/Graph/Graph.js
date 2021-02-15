import React, { Component } from "react";
import Chart from "react-apexcharts";
import styles from "./Graph.module.css";
import axios from "../../axios-db";

class Graph extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				chart: {
					id: "basic-bar",
				},
				xaxis: {
					categories: [],
				},
			},
			series: [
				{
					name: "Corona New Cases in Texas",
					data: [],
				},
			],
			dateAndDataArray: {},
			isFetching: true,
		};
	}
	componentDidMount() {
		axios.get("/data.json").then((response) => {
			this.setState({ dateAndDataArray: response.data });
		});

		setTimeout(() => {
			this.renderGraph();
		}, 100);
	}
	renderGraph() {
		let temp = [];
		for (const [key, value] of Object.entries(this.state.dateAndDataArray)) {
			temp[Object.keys(value)] = Object.values(value);
		}
		const ordered = Object.keys(temp)
			.sort()
			.reduce((obj, key) => {
				obj[key] = temp[key];
				return obj;
			}, {});
		let keys = [];
		let values = [];
		for (const [key, value] of Object.entries(ordered)) {
			keys.push(key);
			values.push(parseInt(value));
		}
		this.setState({
			options: {
				xaxis: {
					categories: keys,
				},
			},
			series: [
				{
					data: values,
				},
			],
			isFetching: false,
		});
		this.forceUpdate();
	}

	render() {
		return (
			<div>
				<div className="row" style={{ paddingTop: "30px" }}>
					<p className={styles.blink_me}>
						{this.state.isFetching ? "Fetching data..." : ""}
					</p>
					<div className="mixed-chart">
						<Chart
							options={this.state.options}
							series={this.state.series}
							type="bar"
							width="700"
							height="350"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Graph;
