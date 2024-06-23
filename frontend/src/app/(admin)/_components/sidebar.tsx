import { Link } from "react-router-dom";
import { menus } from "./menu-items";
import { FC } from "react";

type Props = {};

const Sidebar: FC = (props: Props) => {
  return (
    <div className="w-[200px] flex flex-col gap-2 items-start px-4 text-sm font-medium border-r pt-5 fixed left-0 h-full">
      {menus.map((menu) => (
        <Link
          key={menu.name}
          to={menu.url}
          className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-neutral-900 hover:text-neutral-100 w-full animation no-underline"
        >
          {menu.icon}
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
