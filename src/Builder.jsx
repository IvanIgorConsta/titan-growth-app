// src/Builder.jsx
import React, { useState } from "react";

export default function Builder() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🛠️ Constructor de Landing Pages
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Zona de edición */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <label className="block text-gray-700 font-semibold mb-2">Título de la página</label>
          <input
            type="text"
            placeholder="Ej: Potencia tu negocio con IA"
            className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="block text-gray-700 font-semibold mb-2">Descripción</label>
          <textarea
            placeholder="Describe tu servicio o producto..."
            className="w-full p-3 mb-4 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded text-lg font-semibold transition">
            Guardar Bloque
          </button>
        </div>

        {/* Zona de vista previa */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-purple-300">
          <h2 className="text-xl font-bold mb-4 text-purple-700">Vista previa en vivo</h2>
          <div className="bg-gray-100 p-6 rounded-xl border border-dashed">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title || "Tu título aparecerá aquí"}</h3>
            <p className="text-gray-600">{description || "Escribe una descripción para ver cómo se mostrará."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
