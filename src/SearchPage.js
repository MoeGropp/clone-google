import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./pages/Search";
import SearchIcon from '@mui/icons-material/Search';
import  LocalOfferIcon  from "@mui/icons-material/LocalOffer";
import  DescriptionIcon  from "@mui/icons-material/Description";
import ImageIcon from '@mui/icons-material/Image';
import  RoomIcon  from "@mui/icons-material/Room";
import  MoreVertIcon  from "@mui/icons-material/MoreVert";

function SearchPage(){
    const [{term}] = useStateValue();
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
        <DescriptionIcon />
        <Link to="/news">News</Link>
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
</div>
</div>
</div>
{term && (
    <div className="searchPage_results">
        <p className="searchPage_resultCount">
          About {data?.searchInformation.formattedTotalResults} result ({data?.searchInformation.formattedSearchTime} seconds) for {term}
        </p>
        {data?.items.map(item => (
            <div className="searchPage_result">
                <a href={item.link}>
                    {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&(<img className="searchPage_resultImage" scr={item.pagemap?.cse_image[0]?.src} alt=""/>)}
                    {item.displayLink}
                </a> 
                <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
                </a>
                <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
            ))}
    </div>
    )}
        </div>
    )
}

export default SearchPage;