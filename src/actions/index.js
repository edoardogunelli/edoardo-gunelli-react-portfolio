import React from "react";
import axios from "axios";


const PortfolioSidebarList =(props) => {
    const Portfoliolist= porps.data.map(portfolioItems => {
        return(
            <div className= "portfolio-item-thumbs">
                <div className="portfolio-thumb-img">
                    <img src={portfolioItems.thumb_image_url}/>
                </div>
                <h1 className="title">{portfolioItem.name}</h1>
                <h2>{portfolioItems.id}</h2>
            </div>
        );
    });


    return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;