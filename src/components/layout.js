import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import NavTop from "./navTop";
import NavBottom from "./navBottom";
import Seo from "./seo";
import { Helmet } from "react-helmet";

const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiSite {
          baseUrl
          homepage {
            id
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
            <link rel='stylesheet' id='bootstrap-css'  href='/wp-content/themes/astrid/css/bootstrap/bootstrap.min.css@ver=1.css' type='text/css' media='all' />
            <link rel='stylesheet' id='astrid-style-css'  href='/wp-content/themes/astrid-child/style.css@ver=5.7.css' type='text/css' media='all' />
            <link rel='stylesheet' id='astrid-style-inline-css'  href='/css/astridStyleInline.css' type='text/css' media='all' />
            <link rel='stylesheet' id='astrid-body-fonts-css'  href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C300italic%2C600%2C600italic&amp;ver=5.7' type='text/css' media='all' />
            <link rel='stylesheet' id='astrid-headings-fonts-css'  href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C300italic&amp;ver=5.7' type='text/css' media='all' />
            <link rel='stylesheet' id='font-awesome-css'  href='/wp-content/themes/astrid/fonts/font-awesome.min.css@ver=5.7.css' type='text/css' media='all' />
            <link rel='stylesheet' id='astrid-css' href='/wp-content/themes/astrid/style.css@ver=5.7.css' type='text/css' media='all' />
            <link rel='stylesheet' id='astrid-style-custom-css'  href='/wp-content/themes/astrid-child/style.css@ver=1615963932.css' type='text/css' media='all' />
            <script type='text/javascript' src='/wp-includes/js/jquery/jquery.min.js' id='jquery-core-js'></script>
            <script type='text/javascript' src='/wp-content/themes/astrid-child/js/rellax/rellax.min.js' id='astrid-child-parallaxscripts-js'></script>
            <script type="text/javascript">
                {`
                    function appendAsync(src) {
                        const script = document.createElement("script");
                        script.src = src;
                        script.async = true;
                        document.body.appendChild(script);
                    }
                    appendAsync("/wp-content/themes/astrid/js/main.js");
                    appendAsync("/wp-content/themes/astrid/js/scripts.min.js");
                `}
            </script>
        </Helmet>
        <Seo seo={seo} />
        <main>

            <div className="preloader" style={{display:"none"}}>
                <div className="preloader-inner">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>


            <div id="page" className="site">
                <a className="skip-link screen-reader-text" href="index.html#content">Skip to content</a>

                <header id="masthead" className="site-header has-video header-scrolled" role="banner">
                    <div className="container">
                        <div className="site-branding col-md-4 col-sm-6 col-xs-12">
                            <a href="index.html" className="custom-logo-link" rel="home" aria-current="page"><img
                                width="200" height="66" src="/wp-content/uploads/2020/11/cropped-kuesaLogo.png"
                                className="custom-logo" alt="Kuesa 3D"
                                srcSet="/wp-content/uploads/2020/11/cropped-kuesaLogo.png 200w, /wp-content/uploads/2020/11/cropped-kuesaLogo-100x33.png 100w"
                                sizes="(max-width: 200px) 100vw, 200px"/></a></div>
                        <div className="btn-menu col-md-8 col-sm-6 col-xs-12"><i className="fa fa-navicon"></i></div>
                        <NavTop/>
                    </div>
                </header>


                <div id="content" className="site-content">
                    <div className="container">

                        <div id="primary" className="content-area">
                            <main id="main" className="site-main" role="main">


                                <article id="post-37" className="post-37 page type-page status-publish hentry clearfix">
                                    <header className="entry-header">
                                    </header>


                                    <div className="entry-content">
                                    {children}
                                    </div>
                                </article>
        </main>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-wrapper">


                <footer id="colophon" className="site-footer" role="contentinfo">
                    <div className="site-info container">
                        <nav id="footernav" className="footer-navigation" role="navigation">

                            <div className="footer-branding"><a href="index.html" title="Kuesa 3D"><img
                                className="footer-logo" src="/wp-content/uploads/2020/12/kuesa-logo_registered_white.png"
                                alt="Kuesa 3D"/></a></div>
                            <NavBottom/>
                        </nav>
                        {/* site-navigation */}

                    </div>
                    {/* .site-info */}

                    <div className="createdBy ">
                        <div className="innerCreatedBy sidePaddingHalf">
                            <a className="soc-twitter" href="https://twitter.com/Kuesa3D" target="_blank" rel="noreferrer">&nbsp;</a>
                        </div>
                        <div className="innerCreatedBy sidePaddingHalf">
                            <a className="soc-linkedin" href="https://www.linkedin.com/showcase/kuesa-3d/"
                               target="_blank" rel="noreferrer">&nbsp;</a>
                        </div>
                        <div className="innerCreatedBy sidePaddingHalf">
                            Follow Us:
                        </div>
                        <div className="innerCreatedBy lineSplit">
                            &nbsp;
                        </div>
                        <div className="innerCreatedBy sidePaddingHalf">
                            Made By <a href="https://www.kdab.com/">KDAB</a>
                        </div>
                    </div>
                </footer>
                {/* #colophon */}
            </div>
        </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
