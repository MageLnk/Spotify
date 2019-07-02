import React from "react";
import Lista from "./Lista.js";
//create your first component
export class Home extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="container olakase">
				<div className="col-sm4 offset-6">
					<div className="row">
						<p>Lista de canciones</p>
					</div>
					<div className="row">
						<Lista />
					</div>
					<div className="row" />
				</div>
			</div>
		);
	}
}
