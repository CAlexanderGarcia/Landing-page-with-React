import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a
							className="nav-link active text-light bg-dark"
							aria-current="page"
							href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light bg-dark" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light bg-dark" href="#">
							Service
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light bg-dark" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
