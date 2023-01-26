import styled from "styled-components";
import { menuItems } from "../menu/menuItems";

const Navbar = () => {
  return (
    <nav>
      <StyledMenuItem>
        {menuItems.map((menu: any) => {
          return (
            <li className="menu-items" key={menu.url}>
              <a className="item-link" href={menu.url}>
                <i className={menu.icon} />
                {menu.title}
              </a>
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
  gap: 2rem;
  font-size: 1.3rem;
  font-weight: lighter;
  white-space: nowrap;
  .item-link {
    color: ${({ theme }) => theme.textColorAlt};
  }
  .item-link:hover {
    color: ${({ theme }) => theme.textColor};
  }
`;
