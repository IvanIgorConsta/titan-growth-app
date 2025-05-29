import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">Tu Panel de Control</h1>
      <p className="text-gray-700 mb-6">Desde aquí puedes gestionar tus landing pages y servicios.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded shadow-sm">🔧 Editor de Páginas</div>
        <div className="p-4 border rounded shadow-sm">🌐 Conectar Dominio</div>
        <div className="p-4 border rounded shadow-sm">📈 Ver Métricas</div>
      </div>
    </div>
  );
}