import React, { Component } from "react";
import Chart from "react-apexcharts";

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
					name: "series-1",
					data: [],
				},
			],
			dateAndDataArray: {
				"2015-02": 3333,
				"2010-04": 333,
				"1984-01": 220,
				"1888-09": 100,
			},
		};
	}
	componentDidMount() {
		this.renderGraph();
	}
	renderGraph() {
		const ordered = Object.keys(this.state.dateAndDataArray)
			.sort()
			.reduce((obj, key) => {
				obj[key] = this.state.dateAndDataArray[key];
				return obj;
			}, {});
		const keys = Object.keys(this.state.dateAndDataArray);
		const values = Object.keys(ordered).map((index) => {
			return ordered[index];
		});
		console.log(values);
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
		});
	}

	render() {
		return (
			<div>
				<div className="row" style={{ paddingTop: "30px" }}>
					<div className="mixed-chart">
						<Chart
							options={this.state.options}
							series={this.state.series}
							type="bar"
							width="500"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Graph;
