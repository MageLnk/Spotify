import React from "react";

export default class Lista extends React.Component {
	constructor() {
		super();
		this.listamusica = [
			{
				id: 1,
				category: "Game",
				name: "Game Over",
				url: "URL"
			},
			{
				id: 2,
				category: "Game",
				name: "Jump Super",
				url: "URL"
			},
			{
				id: 3,
				category: "Game",
				name: "Jump Super",
				url: "URL"
			},
			{
				id: 4,
				category: "Game",
				name: "Jump Super",
				url: "URL"
			},
			{
				id: 5,
				category: "Game",
				name: "Jump Super",
				url: "URL"
			},
			{
				id: 6,
				category: "Game",
				name: "Jump Super",
				url: "URL"
			}
		];
	}
	render() {
		return (
			<div>
				<p>{this.listamusica[0].name}</p>
			</div>
		);
	}
}
