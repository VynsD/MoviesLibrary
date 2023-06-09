import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import DetailPage from "./pages/detail/detail";

const routes = [
  {
    name: "home",
    path: "/search",
    element: <Home />,
    exact: true
  },
  {
    name: "detail",
    path: "/detail/:id",
    element: <DetailPage />,
    exact: false
  },
  {
    path: "/",
    element: <Navigate to="/search" replace={true}/>,
    exact: false
  }
]
export { routes };
