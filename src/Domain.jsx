import React from "react";

export default function Domain() {
  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">Conectar o Comprar Dominio</h1>
      <input type="text" placeholder="tudominio.com" className="w-full p-3 border border-gray-300 rounded mb-4" />
      <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-800">Verificar dominio</button>
    </div>
  );
}