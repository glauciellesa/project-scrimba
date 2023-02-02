import styled from "styled-components";
import { menuItems } from "../menu/menuItems";
import { NavLink } from "react-router-dom";

const Navbar = (props: { isOpen: any }) => {
  return (
    <nav>
      <StyledMenuItem>
        {menuItems.map((menu: any) => {
          return (
            <li
              id="menu-items"
              className={props.isOpen ? "open" : undefined}
              key={menu.url}
            >
              <NavLink className="item-link" to={menu.url}>
                <i className={menu.icon} />
                {menu.title}
              </NavLink>
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
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  font-weight: lighter;
  white-space: nowrap;
  .item-link {
    color: ${({ theme }) => theme.textColorAlt};
  }
  .item-link:hover {
    color: ${({ theme }) => theme.textColor};
  }
  i {
    display: none;
    padding: 0.3rem;
  }

  #menu-items.open {
    display: flex;
  }
  @media (max-width: 500px) {
    #menu-items {
      display: none;
    }
    i {
      display: flex;
      padding: 0.3rem;
    }
  }
`;
