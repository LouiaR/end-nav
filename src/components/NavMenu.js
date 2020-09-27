import React from "react";
import styled from "styled-components";

import navDataFormated from "../data/formatData";

const Menu = styled.ul`
  display: flex;
  list-style: none;
  position: relative;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
`;

const SubNav = styled.div`
  position: absolute;
  left: 0;
  top: 10000000%;
  width: 100%;
  text-align: left;
  display: none;
  filter: alpha(opacity=0);
  opacity: 0;
  visibility: hidden;
  transition: all 0.1s ease-in-out;
`;

const SubMenu = styled(Menu)`
  flex-direction: column;
  justify-content: inherit;
  h2 {
    margin: 0;
  }
`;

const Item = styled.li`
  padding: 1rem;
  width: 100%;
  :hover {
    > ${SubNav} {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: 0.4rem;
      top: 100%;
      filter: alpha(opacity=100);
      opacity: 1;
      visibility: visible;
    }
  }
`;

const SubItem = styled.li`
  padding: 0.5rem 0;
`;

const NavHeading = styled.a`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-decoration: none;
  color: #000;
  font-weight: 600;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;

  div {
    width: 100%;
  }

  img {
    object-fit: contain;
    width: 100%;
  }
`;

const NavMenu = () => {
  return (
    <Menu>
      {navDataFormated.map((item) => {
        const key = item.category_path;
        const column1 = item.column_1;
        const column2 = item.column_2;
        const column3 = item.column_3;
        const {
          dropdown_image_title1,
          dropdown_image_title2,
          dropdown_image_title3,
          dropdown_image_title4,
          dropdown_image_url1,
          dropdown_image_url2,
          dropdown_image_url3,
          dropdown_image_url4,
        } = item;

        return (
          <Item key={key}>
            <NavHeading href={`/gb/${item.url_path}`}>
              {item.category_path}
            </NavHeading>
            {item.hasChildren && (
              <SubNav>
                {column1 && (
                  <SubMenu>
                    <h3>
                      {" "}
                      <a href={item.url_path}>{column1.title}</a>
                    </h3>
                    {column1.subtitle &&
                      column1.subtitle.map((subItem) => (
                        <SubItem key={subItem}>{subItem}</SubItem>
                      ))}
                  </SubMenu>
                )}
                {column2 && (
                  <SubMenu>
                    <h3>{column2.title ? column2.title : column3.title}</h3>
                    {column2.subtitle &&
                      column2.subtitle.map((subItem) => (
                        <SubItem key={subItem}>{subItem}</SubItem>
                      ))}
                  </SubMenu>
                )}
                {column3 && (
                  <SubMenu>
                    <h3>{column3.subtitle && column3.title}</h3>
                    {column3.subtitle &&
                      column3.subtitle.map((subItem) => (
                        <SubItem key={subItem}>{subItem}</SubItem>
                      ))}
                  </SubMenu>
                )}
                <ImageGrid>
                  <div>
                    <img
                      src={dropdown_image_url1}
                      alt={dropdown_image_title1}
                    />
                    <h4>{dropdown_image_title1}</h4>
                  </div>
                  <div>
                    <img
                      src={dropdown_image_url2}
                      alt={dropdown_image_title2}
                    />
                    <h4>{dropdown_image_title2}</h4>
                  </div>
                  <div>
                    <img
                      src={dropdown_image_url3}
                      alt={dropdown_image_title3}
                    />
                    <h4>{dropdown_image_title3}</h4>
                  </div>
                  <div>
                    <img
                      src={dropdown_image_url4}
                      alt={dropdown_image_title4}
                    />
                    <h4>{dropdown_image_title4}</h4>
                  </div>
                </ImageGrid>
              </SubNav>
            )}
          </Item>
        );
      })}
    </Menu>
  );
};

export default NavMenu;
