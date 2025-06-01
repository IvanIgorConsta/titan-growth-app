// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-700">Titan Growth AI</Link>
        <nav className="space-x-6">
          <Link to="/dashboard" className="text-gray-700 hover:text-purple-600">Dashboard</Link>
          <Link to="/builder" className="text-gray-700 hover:text-purple-600">Constructor</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-purple-600">Precios</Link>
          <Link to="/login" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Login</Link>
        </nav>
      </div>
    </header>
  );
}
