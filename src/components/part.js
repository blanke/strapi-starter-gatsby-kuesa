import React from "react"
import Reactmarkdown from "react-markdown"

const Part = ({ part }) => {
    return (
        <div className="sectionBlock" style={{backgroudColor: "#fff"}}>
            <div className="sectionContent">
                <div className="sectionIntro">
                    <Reactmarkdown 
                        source={part} 
                        transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
                    />
                </div>
            </div>
        </div>
    )
};    

export default Part;

   