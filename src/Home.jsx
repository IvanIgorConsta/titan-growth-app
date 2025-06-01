// src/Home.jsx
import React from "react";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-900 via-black to-purple-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up">
          Potencia tu negocio con IA 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in">
          Automatiza la creación de landing pages, atrae clientes y crece tu negocio en minutos con inteligencia artificial.
        </p>
        <a
          href="/signup"
          className="inline-block bg-purple-600 hover:bg-purple-800 transition-all text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg animate-bounce"
        >
          ¡Empieza Gratis Ahora!
        </a>
      </div>

      <div className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto animate-fade-in-up">
        <div className="text-left max-w-lg">
          <h2 className="text-3xl font-bold mb-4">¿Qué es Titan Growth AI?</h2>
          <p className="text-gray-300 mb-6">
            Es una plataforma que utiliza inteligencia artificial para crear páginas de aterrizaje optimizadas, personalizar campañas de marketing y ayudarte a escalar tu negocio sin complicaciones.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>✅ Creador de páginas con IA</li>
            <li>✅ Métricas en tiempo real</li>
            <li>✅ Conexión de dominios</li>
            <li>✅ Publicación en 1 clic</li>
            <li>✅ Pagos con tarjeta y criptomonedas</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="/titan-dashboard-preview.png"
            alt="Vista previa del dashboard de Titan"
            className="rounded-xl shadow-2xl border border-purple-700"
          />
        </div>
      </div>
    </section>
  );
}
