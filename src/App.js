import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NavbarB from "./components/Navbar/NavbarB";
import MainRoutes from "./routes/MainRoutes";
import NavTop from "./components/Navbar/NavTop";


const App = () => {
  return (
    <div>
      <NavbarB />
      <Navbar />
      <NavTop/>
      <MainRoutes />
      <Footer/>
    </div>
  );
};

export default App;
