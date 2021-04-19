import React from "react";
import { StaticQuery, graphql } from "gatsby";

const NavBottom = () => (
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
        <div className="menu-footermenu-container">
            <ul id="footer-menu" className="menu">
                { menu.item.map((item, i) => {
                  if (item.page) return (
                    <li id={"bottom-menu-item-" + i} key={"bottom-menu-item-" + i}
                      className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-" + i}>
                      <a href={"/" + item.page?.friendlyUrl}>{item.menuItem}</a></li>
                  ); 
                  return null;
                })}
            </ul>
        </div>
      )}
    }
  />
);

export default NavBottom;
