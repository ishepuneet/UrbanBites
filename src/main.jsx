import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./common/Header.jsx";
import Footer from "./common/Footer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  </React.StrictMode>
);