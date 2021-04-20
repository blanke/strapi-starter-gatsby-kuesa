import React from "react";

const PageIntro = ({ title, subtitle, image }) => {
    return (
        <>
            <div className="header-image" style={{backgroundColor: "#ffffff"}}>
                <img src={image ? image.publicURL : "/wp-content/uploads/2020/12/defaultImage.jpg"} 
                    className={"attachment-custom-header size-custom-header wp-post-image"}
                    loading="lazy"
                    width="2100" height="756" alt="Kuesa 3D"/>
            </div>
            <header className="entry-header">
                <div className="titleSection">
                    <h1 className="entry-title">{title}</h1>
                    <div className="subtitle">{subtitle}</div>
                </div>
            </header>
        </>
    );
};

export default PageIntro;