import React from "react";
import { StaticQuery, graphql } from "gatsby";

const NavTop = () => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiNavigation {
          nodes {
            Title
            item {
              id
              menuItem
              navigation {
                Title
                id
              }
              page {
                friendlyUrl
                id
              }
            }
            strapiId
          }
        }
        strapiSite {
          navigation {
            id
          }
        }
      }    
    `}
    render={(data) => {
      const menu = data.allStrapiNavigation.nodes.filter(nav => {
        return nav.strapiId === data.strapiSite.navigation.id
      })[0]
      return (
        <nav id="mainnav" className="main-navigation col-md-8 col-sm-6 col-xs-12" role="navigation">
          <div className="menu-mainmenu-container">
              <ul id="primary-menu" className="menu">
                  { menu.item.map((item, i) => {
                    if (item.page) return (
                    <li id={"menu-item-" + i} key={"menu-item-" + i}
                      className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-" + i}>
                      <a href={"/" + item.page?.friendlyUrl}>{item.menuItem}</a></li>
                  ); else if (item.navigation) {
                    return (
                      <li id={"menu-item-" + i} key={"menu-item-" + i}
                          className={"menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-" + i}>
                        Resources
                          <ul className="sub-menu">
                            { data.allStrapiNavigation.nodes.filter(nav => {
                                return nav.strapiId === item.navigation.id
                              })[0].item.map((subitem, j) => (
                              <li id={"menu-item-" + i + "-" + j} key={"menu-item-" + i + "-" + j}
                                className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-" + i + "-" + j}>
                                  <a href={"/" + subitem.page?.friendlyUrl}>{subitem.menuItem}</a>
                              </li>
                            ))}
                          </ul>
                      </li>
                    );
                  }
                  return null;
                  })}
              </ul>
          </div>
        </nav>
      )}
    }
  />
);

export default NavTop;
