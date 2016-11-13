import React,{ PropTypes } from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
        this.incrementAync = this.incrementAync.bind(this)
    }
    
    incrementIfOdd() {
    	if (this.props.value % 2 !== 0) {
    		this.props.onIncrement()
    	}
    }

    incrementAync() {
    	setTimeout(this.props.onIncrement, 1000)
    }

    render() {
    	const { value, onIncrement, onDecrement } = this.props
        return (
        	<div>
        	    <p>{value}</p>
	        	<button onClick={onIncrement}>+</button>
	        	<button onClick={onDecrement}>-</button>	
	        	<button onClick={this.incrementIfOdd}>Increment if odd</button>
	        	<button onClick={this.incrementAync}>incrementAync</button>		

        	</div>
        	);
    }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter