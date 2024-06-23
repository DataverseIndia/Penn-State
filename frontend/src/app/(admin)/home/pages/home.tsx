import { FC } from "react";
import Sidebar from "../../_components/sidebar";

type Props = {};

const Home: FC = (props: Props) => {
  return (
    <div className="flex min-h-[90vh] w-full overflow-hidden pt-20">
      <Sidebar />
      <div className="ml-[200px] w-full">
        <header className="flex lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6 font-relative-medium text-3xl justify-between">
            Home
        </header>
      </div>
    </div>
  );
};

export default Home;
