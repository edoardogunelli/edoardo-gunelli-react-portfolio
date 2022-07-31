import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PortfolioItems extends Component {
    constructor (props) {
        super(props);

        this.state = {
            portfolioItemClass: "" 
    };

    handleMouseEnter () //parentesi graffa
        this.setState({ portfolioItemClass: "image-blur" });
//}
    handleMouseLeave () //parentesi graffa
        this.setState({ portfolioItemClass: "" });
//}
}
    render() {
        const { id, description, thumb_image_url, logo_url } = this.props.item;


    return (
        <div className="portfolio-items-wrapper"
        onMouseEnter={() => this.handMouseEnter()}
        onMouseLeave={() => this.handMouseLeave()}
        >
        <h1>{this.state.portfolioItemClass}</h1>
            <div 
            className= {"portfolio-img-background " + this.state.portfolioItemClass}
            style= {{
                backgoundImage: "url(" + thumb_image_url + ")"
                 }}
            />

            <div className= "img-text-wrapper">
                <div className="logo-wrapper">
                    <img src={logo_url} />        
                </div>  
            <div className="subtitles"> {description}</div>
            </div>
        </div>
        );
    }   
}
    
