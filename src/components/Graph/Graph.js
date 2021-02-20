import React from "react";
import Chart from "react-apexcharts";
import styles from "./Graph.module.css";

const graph = (props) => {
	console.log(props);
	return (
		<div>
			<div className="row" style={{ paddingTop: "30px" }}>
				<div className="mixed-chart">
					<Chart
						options={props.options}
						series={props.series}
						type="bar"
						width="700"
						height="350"
					/>
				</div>
			</div>
		</div>
	);
};

export default graph;
