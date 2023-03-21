import React, {useState} from "react"
import '../styles/dashboard.css'
import {Link} from "react-router-dom";


function Dashboard(){
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
    <div className="main-section">
        <div className="cards">
            <div className="card1">
                Total Order
            </div> 
            <div className="card2">
                Today's Order
            </div>
        </div>
        <div className="table">
            <table>
                <tr>
                    <td>customer ID</td>
                    <td>Customer Name</td>
                    <td>Customer Email</td>
                    <td>Customer Order</td>
                    
                </tr>
                <tr>
                    <td>11</td>
                    <td>22</td>
                    <td>33</td>
                    <td>44</td>
                    
                </tr>
            </table>
        </div>
    </div>
</div>
    )
}
export default Dashboard;