import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";
import ProductSmallCard from "../components/Product/ProductSmallCard";
import ProductSmallCardPages from "../pages/ProductSmallCardPages";
import ProductBigCard from "../components/Product/ProductBigCard";

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
