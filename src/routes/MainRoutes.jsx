import React from "react";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import NotFoundPage from "../pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/products", element: <ProductsPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/auth", element: <AuthPage />, id: 3 },
    { link: "/admin", element: <AdminPage />, id: 4 },
    { link: "/about", element: <AboutUsPage />, id: 5 },
    { link: "*", element: <NotFoundPage />, id: 6 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
