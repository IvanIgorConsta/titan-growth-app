// src/Publish.jsx
import React from "react";

export default function Publish() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black px-6 text-white">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-4">🎉 ¡Todo Listo para Publicar!</h1>
        <p className="text-lg text-gray-300 mb-6">
          Tu landing page está lista para el mundo. Solo presiona el botón y tu proyecto será visible en línea.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition-all">
          🚀 Publicar Página
        </button>
        <p className="mt-4 text-sm text-gray-500">Puedes volver a editarla en cualquier momento desde el panel de control.</p>
      </div>

      <div className="mt-10 w-full max-w-xl border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        * La publicación instantánea está integrada con nuestro sistema de hosting y dominios.
      </div>
    </section>
  );
}
