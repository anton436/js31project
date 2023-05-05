import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NavbarB from "./components/Navbar/NavbarB";
import NavTop from "./components/Navbar/NavTop";
import MainRoutes from "./routes/MainRoutes";
import ContactUs from "./components/contacus/ContactUs";

const App = () => {
  return (
    <div>
      <NavbarB />
      <Navbar />
      <NavTop />
      <ContactUs />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
