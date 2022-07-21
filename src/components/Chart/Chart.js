import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
	// Max way of showing the expenses
	// const dataPointValues = props.dataPoints.map(
	// 	(dataPoint) => dataPoint.value
	// );
	// const totalMaximum = Math.max(...dataPointValues);

	// My way to show the expenses ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
	// let Sum = 0;
	// props.dataPoints.map((dataPoint) => {
	// 	Sum += dataPoint.value;
	// });
	const Sum = (items, prop) => {
		return items.reduce((a, b) => {
			return a + b[prop];
		}, 0);
	};
	const totalYear = Sum(props.dataPoints, 'value');

	return (
		<div className="chart">
			{/* Expected this dataPoints to hold a value which is an array, then I can map them, and make each single dataPoint into a ChartBar */}
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label} //or .id
					// value={dataPoint.title}
					value={dataPoint.value}
					// maxValue={totalMaximum} // max way of showing
					maxValue={totalYear} //my way of showing
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
