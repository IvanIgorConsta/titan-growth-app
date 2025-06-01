// src/Domains.jsx
import React from "react";

export default function Domains() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">🌐 Conecta o Compra tu Dominio</h1>
        <p className="text-lg text-gray-300 mb-8">
          Elige entre conectar un dominio propio o comprar uno nuevo directamente desde nuestra plataforma.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">🔌 Conectar un Dominio Propio</h2>
            <p className="text-gray-400 mb-4">Si ya tienes un dominio, puedes conectarlo fácilmente en unos pocos pasos.</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Configura los registros DNS</li>
              <li>Verifica tu propiedad</li>
              <li>Conéctalo a tu página</li>
            </ul>
            <button className="mt-5 bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded text-white font-medium">
              Conectar Dominio
            </button>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">🛒 Comprar un Nuevo Dominio</h2>
            <p className="text-gray-400 mb-4">Busca y compra tu dominio ideal directamente desde la plataforma.</p>
            <input
              type="text"
              placeholder="tudominio.com"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400"
            />
            <button className="mt-4 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded text-white font-medium">
              Buscar Dominio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
