import React from "react";
import Article from "./article";

const Articles = ({ articles }) => {
  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {articles.map((article, i) => {
            return (
              <Article
                article={article}
                key={`article__${article.strapiId}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
