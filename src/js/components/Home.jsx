import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./cards";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="container"> 

		<Navbar />
		
		<Jumbotron />
		<div className="container">
			<div className="card-group">
				<div class="card">
					<Card />
				</div>
				<div class="card">
					<Card />
				</div>
				<div class="card">
					<Card />
				</div>
				<div class="card">
					<Card />
				</div>
			</div>

		</div>
		
		<Footer/>

		</div>
	)
};

export default Home;