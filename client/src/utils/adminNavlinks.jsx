import { AiFillProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
export const adminNavLinks = [
  {
    id: 1,
    name: "Dashboard",
    path: "/admin/dashboard",
    urlword: "dashboard",
    icon: <MdDashboardCustomize />,
  },
  {
    id: 2,
    name: "Products",
    path: "/admin/products",
    urlword: "products",
    icon: <AiFillProduct />,
  },
  {
    id: 3,
    name: "Category",
    path: "/admin/category",
    urlword: "category",
    icon: <MdCategory />,
  },
];
