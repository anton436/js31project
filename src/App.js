import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NavbarB from "./components/Navbar/NavbarB";
import MainRoutes from "./routes/MainRoutes";
import NewsPages from "./components/news_page/NewsPages";

const App = () => {
  return (
    <div>
      <NavbarB />
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
