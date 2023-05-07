import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NavbarB from "./components/Navbar/NavbarB";
import MainRoutes from "./routes/MainRoutes";


const App = () => {
  return (
    <div>
      <NavbarB />
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
