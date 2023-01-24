import { menuItems } from "../menu/menuItems";
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu: any, index: number) => {
          return (
            <li className="menu-items" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
