import { Link } from "react-router-dom";
import { menus } from "./menu-items";
import { FC } from "react";

type Props = {};

const Sidebar: FC = (props: Props) => {
  return (
    <nav className="flex flex-col gap-2 items-start px-4 text-sm font-medium border-r pt-5">
      {menus.map((menu) => (
        <Link
          to={menu.url}
          className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-neutral-800 hover:text-neutral-100 w-full animation"
        >
          {menu.icon}
          {menu.name}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
