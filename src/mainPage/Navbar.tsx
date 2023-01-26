import styled from "styled-components";
import { menuItems } from "../menu/menuItems";
const Navbar = () => {
  return (
    <nav>
      <StyledMenuItem className="menus">
        {menuItems.map((menu: any, index: number) => {
          return (
            <li className="menu-items" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </StyledMenuItem>
    </nav>
  );
};

export default Navbar;

const StyledMenuItem = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  gap: 2rem;
  font-size: 1.2rem;
  font-weight: lighter;
  a {
    color: ${({ theme }) => theme.textColorAlt};
  }
`;
