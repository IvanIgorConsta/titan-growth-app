import React from "react";

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
          Domina el marketing con IA
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 animate-fade-in">
          Crea landing pages impresionantes, personaliza campañas y automatiza ventas. Todo con el poder de la inteligencia artificial.
        </p>
        <a
          href="/login"
          className="bg-purple-600 hover:bg-purple-800 transition-all text-white px-6 py-3 rounded-full font-semibold shadow-lg animate-bounce"
        >
          Comienza gratis
        </a>
      </div>
      <div className="mt-16 w-full max-w-4xl animate-fade-in-up">
        <img
          src="/titan-dashboard-preview.png"
          alt="Vista previa del dashboard"
          className="rounded-xl shadow-2xl border border-purple-800"
        />
      </div>
    </section>
  );
}