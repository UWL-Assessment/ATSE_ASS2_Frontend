// sidebarConstants.tsx
import {
  MdMenuBook,
  MdDashboard,
  MdCategory,
  MdLogout,
  MdOutlinePersonOutline,
} from "react-icons/md";
import React from "react";

export type CustomMenuItem = {
  key: string;
  icon?: React.ReactNode;
  label: React.ReactNode;
  path?: string;
};

export const siderbarConstant: CustomMenuItem[] = [
  {
    key: "1",
    icon: <MdDashboard size={18} />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    key: "2",
    icon: <MdOutlinePersonOutline size={18} />,
    label: "User",
    path: "/user",
  },
  {
    key: "3",
    icon: <MdMenuBook size={18} />,
    label: "Books",
    path: "/books",
  },
  {
    key: "4",
    icon: <MdCategory size={18} />,
    label: "Categories",
    path: "/categories",
  },
  {
    key: "5",
    label: "Log Out",
    icon: <MdLogout size={18} />,
    path: "/",
  },
];

// import { MenuProps } from "antd";
// import { MdMenuBook } from "react-icons/md";
// import { MdDashboard } from "react-icons/md";
// import { MdCategory } from "react-icons/md";
// import { MdLogout } from "react-icons/md";
// import { MdOutlinePersonOutline } from "react-icons/md";

// type MenuItem = Required<MenuProps>["items"][number];

// export const siderbarConstant: MenuItem[] = [
//   {
//     key: "1",
//     icon: <MdDashboard size={18} />,
//     label: "Dashboard",
//     path: "/dashboard",
//   },
//   {
//     key: "2",
//     icon: <MdOutlinePersonOutline size={18} />,
//     label: "User",
//     path: "/user",
//   },
//   {
//     key: "3",
//     icon: <MdMenuBook size={18} />,
//     label: "Books",
//     path: "/books",
//   },
//   {
//     key: "4",
//     icon: <MdCategory size={18} />,
//     label: "Categories",
//     path: "/categories",
//   },
//   {
//     key: "5",
//     label: "Log Out",
//     icon: <MdLogout size={18} />,
//   },
// ];
