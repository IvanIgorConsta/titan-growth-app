// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Titan Growth AI. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
