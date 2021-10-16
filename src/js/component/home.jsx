import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />

			<Jumbotron />
			<div className="container">
				<div className="row">
					<Card
						title="Card Title"
						text="lorem...."
						label="Find Out More!!!"
						img="https://picsum.photos/500/325"
					/>
					<Card
						title="Card Title"
						text="lorem...."
						label="Find Out More!!!"
						img="https://picsum.photos/500/325"
					/>
					<Card
						title="Card Title"
						text="lorem...."
						label="Find Out More!!!"
						img="https://picsum.photos/500/325"
					/>
					<Card
						title="Card Title"
						text="lorem...."
						label="Find Out More!!!"
						img="https://picsum.photos/500/325"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
