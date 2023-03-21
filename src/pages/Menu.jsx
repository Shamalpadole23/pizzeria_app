import React from "react"
import { Link } from "react-router-dom";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../component/MenuItem";
import "../styles/Menu.css";

function Menu(){
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
        <div className="menu">
            <h1 className="menuTitle">
                Our Menu
            </h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) =>{
                    return <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} > </MenuItem>
                } )}
            </div>
        </div>
        </div>
    );
}
export default Menu; 