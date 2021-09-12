import React, { Component } from "react";

import "./css/product.css";

class Product extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stock: this.props.stock,
			sub: "Beli",
			status: "Tersedia",
			disabled: false,
		};
	}

	ButtonBuy = () => {
		this.setState({
			stock: this.state.stock - 1,
		});

		if (this.state.stock === 1) {
			this.setState({
				status: "Habis",
				disabled: true,
			});
		}
	};

	render() {
		return (
			<div className="box-stock">
				<h2>{this.props.name}</h2>
				<img src={this.props.img} alt="" />
				<p>
					<b>Rp.{this.props.price}</b>
				</p>
				<p>{this.state.stock}</p>
				<button
					className="btn-click"
					onClick={this.ButtonBuy}
					disabled={this.state.disabled}
				>
					Beli
				</button>
				<p>{this.state.status}</p>
			</div>
		);
	}
}

export default Product;
