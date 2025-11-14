import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import RequestQuotationPage from "./pages/RequestQuotationPage";
import SupportPage from "./pages/SupportPage";
import SolutionsPage from "./pages/SolutionsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/quote" element={<RequestQuotationPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/solution" element={<SolutionsPage />} />
      </Routes>
    </Router>
  );
}
