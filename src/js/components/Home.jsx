import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container"> 

		<Navbar />
		
		<Jumbotron />
			<div className="card-group">
				<div className="card">
					<Card  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFz5fYgrepcP696Zm4ZtlldGLC6hEr83HUhDcUWJoyK2l-Rqp2YrkMskunDA_R5Hy-722xpQrOgG2-ZhAuOhuQ1aBRtwaf4jp3tfRNlNQKmg&s=10"}
					title={"Gato"}
					description={"El dulce gatito parece una bola de piel"}
					/>
				</div>
				<div className="card">
					<Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_hrqnqzg6eUthXW17yE-tCDHBSVUSFZK279Q6gTC-Sfv1ohJb8Kw4BpSQBpsGQsKPo7Me9LaXksDlcwiu0RY7k8kPChTh0AGse0SgLw9kQ&s=10"}
					title={"Perro"}
					description={"El bonito gatito"}
					/>
				</div>
				<div className="card">
					<Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb35miLERH8EG64Tv433pYuVD-7MKkwQldFTP6OXwpy7ENIMKNALwaHd6pgqCAqGQ_W7aIYkicrUq2ZGboawWRyLw0Zj3l_gYicHlZbuQt&s=10"}
					title={"Pez"}
					description={"Duerme gatito"}
					/>
				</div>
				<div className="card">
					<Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_hrqnqzg6eUthXW17yE-tCDHBSVUSFZK279Q6gTC-Sfv1ohJb8Kw4BpSQBpsGQsKPo7Me9LaXksDlcwiu0RY7k8kPChTh0AGse0SgLw9kQ&s=10"}
					title={"Perro2"}
					description={"Bien bien bien"}
					/>
				</div>
			</div>

		
		<Footer/>

		</div>
	)
};

export default Home;