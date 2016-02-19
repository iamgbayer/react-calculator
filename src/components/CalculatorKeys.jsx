import React from 'react';

class CalculatorKeys extends React.Component {
	render() {
		return (
			<div className="calculator-keys">
				<div className="calculator-row">
					<button keyCode="67" className="button-default button-normal">C</button>
					<button keyCode="8" className="button-default button-normal">←</button>
					<button keyCode="" className="button-default button-normal">%</button>
					<button keyCode="191" className="button-default button-overlay">÷</button>
				</div>

				<div className="calculator-row">
					<button keyCode="55" className="button-default button-normal">7</button>
					<button keyCode="56" className="button-default button-normal">8</button>
					<button keyCode="57" className="button-default button-normal">9</button>
					<button keyCode="shift+56" className="button-default button-overlay">X</button>
				</div>

				<div className="calculator-row">
					<button keyCode="52" className="button-default button-normal">4</button>
					<button keyCode="53" className="button-default button-normal">5</button>
					<button keyCode="54" className="button-default button-normal">6</button>
					<button keyCode="189" className="button-default button-overlay">-</button>
				</div>

				<div className="calculator-row">
					<button keyCode="49" className="button-default button-normal">1</button>
					<button keyCode="50" className="button-default button-normal">2</button>
					<button keyCode="51" className="button-default button-normal">3</button>
					<button keyCode="187" className="button-default button-overlay">+</button>
				</div>

				<div className="calculator-row">
					<button keyCode="48" className="button-default button-large">0</button>
					<button keyCode="190" className="button-default button-normal-two">.</button>
					<button keyCode="13" className="button-default button-white">=</button>
				</div>
			</div>
		);
	}
};

export default CalculatorKeys;