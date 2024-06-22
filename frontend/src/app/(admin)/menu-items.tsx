import { HomeIcon, Image, LayoutDashboardIcon, Rss, UsersIcon } from "lucide-react";

export const menus = [
   { url: "/admin/dashboard", name: "Home", icon: <HomeIcon className="size-4 my-auto" /> },
   { url: "/admin/publications", name: "Publications", icon: <LayoutDashboardIcon className="size-4 my-auto" /> },
   { url: "/admin/members", name: "Members", icon: <UsersIcon className="size-4 my-auto" /> },
   { url: "/admin/gallery", name: "Gallery", icon: <Image className="size-4 my-auto" /> },
   { url: "/admin/news", name: "News", icon: <Rss className="size-4 my-auto" /> },
 ];
