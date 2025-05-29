import React from "react";

export default function Builder() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-4">Creador de Landing Page</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <input type="text" placeholder="Título de tu página" className="w-full p-3 border border-gray-300 rounded mb-4" />
          <textarea placeholder="Descripción..." className="w-full p-3 border border-gray-300 rounded h-32"></textarea>
        </div>
        <div className="border p-6 bg-white shadow rounded">
          <h2 className="text-xl font-bold mb-2">Vista previa:</h2>
          <div className="p-4 border border-dashed rounded bg-gray-100">
            <p className="text-gray-600">Aquí verás una previsualización de tu página.</p>
          </div>
        </div>
      </div>
    </div>
  );
}