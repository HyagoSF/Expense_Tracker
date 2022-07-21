import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
	let barFillHeight = '0%'; //as a text because will use as CSS

	if (props.maxValue > 0) {
		barFillHeight = `${Math.round((props.value * 100) / props.maxValue)}%`; //function to get the integer value of how much to Fill
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={{ height: barFillHeight }} //to use style I have to pass this into a new Object, and if I want to add a property which need a dash inside of it: background-color, I should put this inside quotes, OR use backgroundColor
				></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
};

export default ChartBar;
