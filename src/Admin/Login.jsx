import React from "react";
import { Stack, Button, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import './login.css';
function Login(){
    return(
<div>
    <div className="img">
   <div className="card">
<h1>User Login</h1>
<form action="" method="post">

    <label htmlFor="uname">User Name</label>
    <input type="text" name="uname" id="uname" placeholder="Username"/>
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Password" />
    
    <button type="submit">Login</button> <br /> <br />
    <div className="icons">
    <InstagramIcon></InstagramIcon> <TwitterIcon></TwitterIcon> <FacebookIcon></FacebookIcon> 
    </div>
</form>

   </div>
    </div>
</div>
    )
}

export default Login;
