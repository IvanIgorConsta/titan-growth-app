// src/Dashboard.jsx
import React from "react";

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-indigo-950 via-black to-purple-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center">🚀 Panel de Control</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-purple-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Landing Pages</h3>
            <p className="text-3xl font-extrabold">3 Activas</p>
          </div>

          <div className="bg-indigo-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Visitantes Mensuales</h3>
            <p className="text-3xl font-extrabold">8,420</p>
          </div>

          <div className="bg-pink-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Conversión</h3>
            <p className="text-3xl font-extrabold">6.4%</p>
          </div>
        </div>

        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Tus Páginas Activas</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-semibold">/promocion-verano</p>
                <p className="text-sm text-gray-500">Última modificación: hace 2 días</p>
              </div>
              <a
                href="https://titan-growth-ai.com/promocion-verano"
                target="_blank"
                className="text-purple-600 hover:underline"
              >
                Ver página →
              </a>
            </li>
            <li className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-semibold">/curso-gratis</p>
                <p className="text-sm text-gray-500">Última modificación: hace 5 días</p>
              </div>
              <a
                href="https://titan-growth-ai.com/curso-gratis"
                target="_blank"
                className="text-purple-600 hover:underline"
              >
                Ver página →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
