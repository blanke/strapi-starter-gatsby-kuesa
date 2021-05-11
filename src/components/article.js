import React from "react";
import { Link } from "gatsby";

const Article = ({ article }) => {
  return (
    <article id="post-469" className="noBorder post-469 post type-post status-publish format-standard has-post-thumbnail hentry category-blogs category-designers category-development clearfix">
      <header className="entry-header entry-header-blog">
        <h2 className="entry-title">
          <Link to={`/article/${article.strapiId}`} rel="Bookmark">
            {article.title}
          </Link>
        </h2>					
        <div className="subtitle">
          <div className="entry-meta noBorder">
            <span className="posted-on"><i className="fa fa-calendar"></i>
              <a href="https://www.kuesa.com/kuesa-3d-studio-1-3-is-released/" rel="bookmark">
                <time className="entry-date published" dateTime={article.published_at}>{article.published_at}</time>
                <time className="updated" dateTime="2021-05-04T18:18:12+00:00">May 4, 2021</time>
              </a>
            </span>
            <span className="byline"> <i className="fa fa-user"></i>
              <span className="author vcard">
                <a className="url fn n" href="https://www.kuesa.com/author/timobuske/">{article.author.name}</a>
              </span>
            </span>
            <span className="cat-links">0 comments</span>						
            </div>
          </div>
      </header>
        <div className="entry-content entry-content-blog">
                <div className="entry-thumb">
            { article.image?.publicURL &&       
              <Link to={`/article/${article.strapiId}`}>
                <img style={{maxWidth:"520px", maxHeight:"187px"}} src={article.image.publicURL} 
                  className="attachment-astrid-medium-thumb size-astrid-medium-thumb wp-post-image" alt="" loading="lazy" />
              </Link>
            }              
          </div>
              <div className="entry-summary">
          <p style={{display:"-webkit-box", WebkitLineClamp:"4", WebkitBoxOrient:"vertical", overflow:"hidden"}}>{article.content[0].content}</p>
        </div>
        <div className="read-more clearfix">
          <Link to={`/article/${article.strapiId}`} className="button post-button readMoreButton">Read more</Link>
        </div>
      </div> 
    </article>
  );
};

export default Article;
