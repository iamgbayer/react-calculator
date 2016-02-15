import React from 'react';

class CalculatorDisplay extends React.Component {
	render() {
		return (
			<div className='calculator-display'>
				<h1 className='value'>2500</h1>
				<div className='expressions'>1000 + 1000 + 500</div>
			</div>
		);
	}
};

export default CalculatorDisplay;