import React from "react";
import "./Home.css";
import { Link } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search';

function Home(){
    return(
        <div className="homes">
<div className="home_header">
<div className="home_headerLeft">
<Link to="/about">About</Link>
<Link to="/store">Store</Link>
</div>
<div className="home_headerRight">
<Link to="/gmail">Gmail</Link>
<Link to="/images">Images</Link>
<AppsIcon />
<AccountCircleIcon />
</div>
</div>
<div className="home_body">
<center><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" /></center>
<div className="home_inputContainer">
<Search />
</div>
</div>
</div>
    );
}
export default Home