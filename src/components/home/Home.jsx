import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			products: [{
				imageUrl: "/logo192.png",
				name: "product 1"
			},{
				imageUrl: "/logo192.png",
				name: "product 2"
			},{
				imageUrl: "/logo192.png",
				name: "product 3"
			},{
				imageUrl: "/logo192.png",
				name: "product 4"
			},{
				imageUrl: "/logo192.png",
				name: "product 5"
			},{
				imageUrl: "/logo192.png",
				name: "product 6"
			},{
				imageUrl: "/logo192.png",
				name: "product 7"
			},{
				imageUrl: "/logo192.png",
				name: "product 8"
			},{
				imageUrl: "/logo192.png",
				name: "product 9"
			}]
		}
	}

	componentDidMount() {
		window.scroll(0, 0);
	}
	
	render() {
		return (
			<div ref="productList" className="product-list container">
				<div class="row row-cols-3">
					{this.renderProductItemList(this.state.products)}
				</div>
			</div>
		)
	}

	renderProductItemList(products) {
		
		return products.map((product, index) => {

			const imageUrl = product.imageUrl
			const name = product.name
			
			return (
				<Link key={index} to={"/products/".concat(index)}>
					<div className="product-item">
						<img src={imageUrl} alt={name} />
						<p>{name}</p>
					</div>
				</Link>
			)
		})
	}
}
