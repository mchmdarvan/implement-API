import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stock: 15,
		};
	}

	ButtonBuy = value => {
		this.setState({
			stock: this.state.stock - value,
		});
	};

	render() {
		return (
			<div>
				<Child1 stock={this.state.stock} function={this.ButtonBuy.bind(this)} />
				<Child2 stock={this.state.stock} function={this.ButtonBuy.bind(this)} />
			</div>
		);
	}
}

export default Parent;
