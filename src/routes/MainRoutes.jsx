import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";
import NewsPages from "../components/news_page/NewsPages";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/products", element: <ProductsPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/auth", element: <AuthPage />, id: 3 },
    { link: "/admin", element: <AdminPage />, id: 4 },
    { link: "*", element: <NotFoundPage />, id: 6 },
    { link: "/edit/:id", element: <EditProductPage />, id: 7 },
    { link: "/news", element: <NewsPages />, id: 8 },
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
