import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductDetail extends Component {
	render() {
		return (
			<div className="product-detail">
				<p> Product Id is {this.props.productId} </p>
				<Link to="/">
					<button>Back</button>
				</Link>
			</div>
		)
	}
}
