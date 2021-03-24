import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "./layout";
import Card from "./card";

const PageIntro = ({ article }) => {
    return (
        <>
            <div id="wp-custom-header" className="wp-custom-header"><img
                src="/wp-content/uploads/2020/12/defaultImage.jpg" width="2100" height="756" alt="Kuesa 3D"
                srcSet="/wp-content/uploads/2020/12/defaultImage.jpg 2100w, /wp-content/uploads/2020/12/defaultImage-300x108.jpg 300w, /wp-content/uploads/2020/12/defaultImage-1024x369.jpg 1024w, wp-content/uploads/2020/12/defaultImage-768x276.jpg 768w, wp-content/uploads/2020/12/defaultImage-1536x553.jpg 1536w, wp-content/uploads/2020/12/defaultImage-2048x737.jpg 2048w, wp-content/uploads/2020/12/defaultImage-700x252.jpg 700w, wp-content/uploads/2020/12/defaultImage-520x187.jpg 520w, wp-content/uploads/2020/12/defaultImage-360x130.jpg 360w, wp-content/uploads/2020/12/defaultImage-250x90.jpg 250w, wp-content/uploads/2020/12/defaultImage-100x36.jpg 100w"
                sizes="(max-width: 2100px) 100vw, 2100px"/></div>
            <div className="header-info">
                <div className="container">
                    <h3 className="entry-title">{article.title}</h3>
                    <h4 className="subtitle">{article.description}</h4></div>
            </div>
            <div className="videoMask">
                <img src="/wp-content/themes/astrid-child/images/videoMask.png" alt="videoMask"/>
            </div>
        </>
    );
};

export default PageIntro;


