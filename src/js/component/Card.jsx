import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col-3">
			<div className="card">
				<img src={props.img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a href="#" className="btn btn-primary">
						{props.label}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	label: PropTypes.string,
	img: PropTypes.string
};
export default Card;
