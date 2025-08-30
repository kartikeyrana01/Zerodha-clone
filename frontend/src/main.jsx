import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
// import Signin from "./landing_page/signup/Signin";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

import Home from "./landing_page/Dashboard/Home";
import Orders from "./landing_page/Dashboard/Orders";
import Holdings from "./landing_page/Dashboard/Holdings";
import Positions from "./landing_page/Dashboard/Positions";
import Funds from "./landing_page/Dashboard/Funds";

import NotFound from "./landing_page/NotFound";

import Footer from "./landing_page/Footer";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   
    <Routes>
      {/* Landing Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/signin" element={<Signin />} /> */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />

      {/* Dashboard + Nested Routes */}
      <Route path="/dashboard/*" element={<Home />}>
        <Route path="orders" element={<Orders />} />
        <Route path="holdings" element={<Holdings />} />
        <Route path="positions" element={<Positions />} />
        <Route path="funds" element={<Funds />} />
        {/* <Route path="apps" element={<Apps />} /> */}
      </Route>

    
      
    </Routes>
    <Footer />
  </BrowserRouter>
);
