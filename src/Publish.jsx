import React from "react";

export default function Publish() {
  return (
    <div className="min-h-screen p-6 bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-6">Todo listo para publicar 🚀</h1>
      <p className="mb-4 text-gray-700">Haz clic en el botón para lanzar tu landing page.</p>
      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded text-lg">Publicar Página</button>
    </div>
  );
}