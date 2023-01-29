import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "@mui/material";
import Search from "./pages/Search";
import SearchIcon from "@material-ui/icons/Search";
import  LocalOfferIcon  from "@mui/icons-material/LocalOffer";
import  DescriptionIcon  from "@mui/icons-material/Description";
import ImageIcon from "@mui/material/icons/Image";
import  RoomIcon  from "@mui/icons-material/Room";
import  MoreVertIcon  from "@mui/icons-material/MoreVert";

function SearchPage(){
    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);
    return(
        <div className="searchPage">
<div className="searchPage_header">
<Link to="/">
<img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
</Link>
<div className="searchPage_headerBody">
    <Search hideButtons />
    <div className="searchPage_options">
    <div className="searchPage_optionsLeft">
    <div className="searchPage_option">
        <SearchIcon />
        <Link to="/all">All</Link>
    </div>
    <div className="searchPage_option">
        <ImageIcon />
        <Link to="/images">Images</Link>
    </div>
    <div className="searchPage_option">
        <LocalOfferIcon />
        <Link to="/shopping">Shopping</Link>
    </div>
    <div className="searchPage_option">
        <RoomIcon />
        <Link to="/maps">Maps</Link>
    </div>
    <div className="searchPage_option">
        <MoreVertIcon />
        <Link to="/more">More</Link>
    </div>
    </div>
    <div className="searchPage_optionsRight">
    <div className="searchPage_option">
        <Link to="/settings">Settings</Link>
    </div>
    <div className="searchPage_option">
        <Link to="/tools">Tools</Link>
    </div>
    </div>
    <div className="searchPage_results"></div>
</div>
</div>

<div className="searchPage_results">
</div>
</div>
        </div>
    )
}

export default SearchPage;