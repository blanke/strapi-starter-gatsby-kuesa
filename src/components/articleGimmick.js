import React from "react"
import BlogOverview from "./blogOverview"

const ArticleGimmick = ({ type, i }) => {
    if ("BlogOverview" === type)
        return <BlogOverview />
    return (
        <div key={`gimmick`+ i} className="sectionBlock" style={{backgroudColor: "#fff"}}>
            <div className="sectionContent">
                <div class="sectionIntro">
                    {type}
                </div>
            </div>
        </div>
    )
};    

export default ArticleGimmick;

   