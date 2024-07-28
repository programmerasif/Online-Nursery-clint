import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Products from "@/pages/Products/Products";
import ProductDetilsPage from "@/pages/ProductDetilsPage/ProductDetilsPage";
import Checkout from "@/pages/Checkout/Checkout";
import UserInfo from "@/pages/UserInfo/UserInfo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/Product-details/:id",
        element: <ProductDetilsPage/>,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/user-info",
        element: <UserInfo />,
      },
    ],
  },
]);

export default routes;
