import React from "react";

const PageIntro = ({ title, subtitle, image }) => {
    return (
        <>
            <div id="wp-custom-header" className="wp-custom-header"><img
                src={image ? image.publicURL : "/wp-content/uploads/2020/12/defaultImage.jpg"} width="2100" height="756" alt="Kuesa 3D"
                /></div>
            <div className="header-info">
                <div className="container">
                    <h3 className="entry-title">{title}</h3>
                    <h4 className="subtitle">{subtitle}</h4></div>
            </div>
            <div className="videoMask">
                <img src="/wp-content/themes/astrid-child/images/videoMask.png" alt="videoMask"/>
            </div>
        </>
    );
};

export default PageIntro;


