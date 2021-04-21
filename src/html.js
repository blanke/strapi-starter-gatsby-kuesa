import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel='stylesheet' id='astrid-style-css'  href='/wp-content/themes/astrid-child/style.css@ver=5.7.css' type='text/css' media='all' />
        <link rel='stylesheet' id='astrid-style-inline-css'  href='/css/astridStyleInline.css' type='text/css' media='all' />
        <style id="astrid-style-inline-css" type="text/css">
          {`
            .site-header {position: fixed;}
            .site-title a,.site-title a:hover { color:#ffffff}
            .site-description { color:#BDBDBD}
            .site-header,.site-header.header-scrolled { background-color:rgba(32,37,41,0.9)}
            @media only screen and (max-width: 1024px) { .site-header.has-header,.site-header.has-video,.site-header.has-single,.site-header.has-shortcode { background-color:rgba(32,37,41,0.9)} }
            body, .widget-area .widget, .widget-area .widget a { color:#656D6D}
            .footer-widgets, .site-footer, .footer-info { background-color:#202529}
            body {font-family: 'Open Sans', sans-serif;}
            h1, h2, h3, h4, h5, h6, .fact .fact-number, .fact .fact-name, .site-title {font-family: 'Open Sans', sans-serif;}
            .site-title { font-size:36px; }
            .site-description { font-size:14px; }
            h1 { font-size:36px; }
            h2 { font-size:30px; }
            h3 { font-size:24px; }
            h4 { font-size:16px; }
            h5 { font-size:14px; }
            h6 { font-size:12px; }
            body { font-size:14px; }
         `}
        </style>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div className="preloader">
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

        <div id="page" class="site">
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
        </div>
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
