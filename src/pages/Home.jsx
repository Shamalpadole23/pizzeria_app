import React from "react"
import { Link } from "react-router-dom";
import HeroImage from './pizz.jpg';
import '../styles/Home.css'

function Home(){
    return(
      <div>
        <div className="sidebar">
    <div className="left"> <br /><br />

    <Link to="dashboard">Dashboard</Link><br /> <br /> <br />
            <Link to="/">Home</Link><br /><br /><br />
            <Link to="menu">Menu</Link><br /> <br /><br />
            <Link to="about">About</Link><br /><br /><br />
            <Link to="contact">Contact</Link><br /><br /><br />
            <Link to="add">Add</Link><br /><br /><br />
            <Link to="customer">Customer Support</Link><br /><br /><br />
    </div>
    </div>
      <div className="home" style={{ backgroundImage:`url(${HeroImage})`}}>
        <div className="headerContainer"> 
            <h1>The Pizza Dine</h1>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to ="menu">
            <button>ORDER NOW</button>
            </Link>
        </div>
      </div>
      </div>
    );
}
export default Home; 