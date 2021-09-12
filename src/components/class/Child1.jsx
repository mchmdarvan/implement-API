import React, { Component } from "react";

class Child1 extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	minBuy = 2;
	render() {
		return (
			<div>
				<h3>Child Component</h3>
				<p>Stock Product: {this.props.stock}</p>
				<button onClick={() => this.props.function(this.minBuy)}>
					Buy Product
				</button>
			</div>
		);
	}
}

export default Child1;
