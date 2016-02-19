import React from 'react';
import ReactDOM from 'react-dom';
import css from './styl/style.styl';

/* Import Components */
import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorKeys from './components/CalculatorKeys';

export default class Calculator extends React.Component {
	render() {
		return (
			<div>
				<CalculatorDisplay/>
				<CalculatorKeys/>
			</div>
		);
	}
}

ReactDOM.render(<Calculator/>, document.querySelector('#calculator'));