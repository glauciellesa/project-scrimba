import { menuItems } from "./menuItems";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu: any, index: number) => {
          return (
            <li className="menu-items" key={index}>
              <NavLink to={menu.url}>{menu.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
