import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Builder from "./Builder.jsx";
import Domain from "./Domain.jsx";
import Publish from "./Publish.jsx";
import Pricing from "./Pricing.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
