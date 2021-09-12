import React, { Component } from "react";
import GrandChild from "./GrandChild";

class Child2 extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	minBuy = 1;

	render() {
		return (
			<div>
				<h3>Dari Child 2</h3>
				<GrandChild data={this.props.stock} />
			</div>
		);
	}
}

export default Child2;
