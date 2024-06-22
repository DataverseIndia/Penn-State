import { FC } from "react";
import { Link } from "react-router-dom";
import { menus } from "./menu-items";
import Sidebar from "./sidebar";

type Props = {};

const Dashboard: FC = (props: Props) => {
  return (
    <div className="grid min-h-[80vh] w-full overflow-hidden lg:grid-cols-[280px_1fr] pt-20">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
            Home
        </header>
      </div>
    </div>
  );
};

export default Dashboard;
