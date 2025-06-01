// src/Constructor.jsx
import React, { useState } from "react";

export default function Constructor() {
  const [title, setTitle] = useState("¡Bienvenido a mi landing!");
  const [description, setDescription] = useState("Este es un texto editable generado por inteligencia artificial.");
  const [bgColor, setBgColor] = useState("#4f46e5");

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">🎨 Constructor de Landing Page</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Editor */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Editor</h2>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Título</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Descripción</label>
              <textarea
                className="w-full p-2 rounded bg-gray-700 text-white"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Color de fondo</label>
              <input
                type="color"
                className="w-full h-10"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </div>
          </div>

          {/* Vista previa */}
          <div
            className="p-10 rounded-2xl shadow-2xl text-center"
            style={{ backgroundColor: bgColor }}
          >
            <h2 className="text-3xl font-extrabold mb-4">{title}</h2>
            <p className="text-lg">{description}</p>
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-opacity-80">
              ¡Me interesa!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
