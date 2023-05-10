import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";
import ProductSmallCard from "../components/Product/ProductSmallCard";
import ProductSmallCardPages from "../pages/ProductSmallCardPages";
import ProductBigCard from "../components/Product/ProductBigCard";
import CollectionPage from "../pages/CollectionPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import NewsPages from "../components/news_page/NewsPages";
import CartPage from "../pages/CartPage";
import { useAuth } from "../contexts/AuthContextProvider";
import { ADMIN } from "../helpers/consts";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    { link: "/products", element: <ProductsPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/auth", element: <AuthPage />, id: 3 },
    { link: "/about", element: <AboutUsPage />, id: 5 },
    { link: "*", element: <NotFoundPage />, id: 6 },
    { link: "/collection", element: <CollectionPage />, id: 8 },
    { link: "/news", element: <NewsPages />, id: 9 },
    { link: "/cart", element: <CartPage />, id: 10 },
  ];

  const PRIVATE_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 4 },
    { link: "/edit/:id", element: <EditProductPage />, id: 7 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                key={item.id}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
