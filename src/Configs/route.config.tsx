import DashbaordContainer from "./../Pages/Dashboard/index.container";
import DashboradLayout from "./../Layout/Layout";
import User from "../Pages/User/index.container";
import Books from "../Pages/Books/index.container";
import Categories from "../Pages/Categories/index.container";
import Category from "../Layout/Home/Category/index.container";
import HomeLayout from "../Layout/HomeLayout";
import List from "../Pages/List/index.container";
import BookList from "../Pages/BookList/index.container";
import CategoriesList from "../Pages/CategoriesList/index.container";
import Detail from "../Layout/Home/Detail";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface routeInterface {
  name: string;
  path: string;
  element: any;
  permissions?: any;
  layout: any;
}

const routes: Array<routeInterface> = [
  {
    name: "Dashboard",
    path: "/dashboard",
    element: DashbaordContainer,
    layout: DashboradLayout,
  },
  {
    name: "Dashboard",
    path: "/user",
    element: User,
    layout: DashboradLayout,
  },
  {
    name: "Books",
    path: "/books",
    element: BookList,
    layout: DashboradLayout,
  },
  {
    name: "Books",
    path: "/books/create",
    element: Books,
    layout: DashboradLayout,
  },
  {
    name: "Books",
    path: "/books/edit",
    element: Books,
    layout: DashboradLayout,
  },
  {
    name: "Categories",
    path: "/categories",
    element: CategoriesList,
    layout: DashboradLayout,
  },
  {
    name: "Categories",
    path: "/categories/edit",
    element: Categories,
    layout: DashboradLayout,
  },
  {
    name: "Categories",
    path: "/categories/create",
    element: Categories,
    layout: DashboradLayout,
  },
  {
    name: "Categories",
    path: "/home",
    element: Category,
    layout: HomeLayout,
  },
  {
    name: "Categories",
    path: "/:id/:slug",
    element: Detail,
    layout: HomeLayout,
  },
  {
    name: "Categories",
    path: "/:slug",
    element: List,
    layout: HomeLayout,
  },
];

export default routes;
