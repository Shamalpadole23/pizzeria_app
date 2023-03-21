import React from "react";
import {Link} from "react-router-dom"
import HeroImage from './multiplepizza.jpeg';
import '../styles/About.css';

function About(){
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
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage:`url(${HeroImage})`}}>

            </div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum, fuga eligendi qui perferendis repudiandae animi magnam quidem odio neque maiores voluptas nostrum vel fugit odit, temporibus, veniam ipsa! Fuga!</p>
            </div>
        </div>
        </div>
    );
} 

export default About;