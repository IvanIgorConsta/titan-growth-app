// src/Pricing.jsx
import React from "react";

const planes = [
  {
    nombre: "Plan Gratis",
    precio: "$0",
    caracteristicas: [
      "1 Landing Page con IA",
      "Dominio .titan.ai gratuito",
      "Hasta 100 visitas mensuales",
      "Soporte por email"
    ],
    destacado: false
  },
  {
    nombre: "Plan Pro",
    precio: "$19/mes",
    caracteristicas: [
      "Landing Pages ilimitadas",
      "Conecta tu propio dominio",
      "SEO avanzado y analíticas",
      "Soporte prioritario 24/7"
    ],
    destacado: true
  },
  {
    nombre: "Plan Empresarial",
    precio: "$49/mes",
    caracteristicas: [
      "Todo en Plan Pro",
      "Integración con CRM",
      "Equipo multiusuario",
      "Gestor de cuenta dedicado"
    ],
    destacado: false
  }
];

export default function Pricing() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Planes y Precios</h2>
        <p className="text-gray-400 text-lg">
          Elige el plan ideal para ti y haz crecer tu negocio sin límites.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {planes.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-lg p-8 border transition-transform duration-300 hover:scale-105 ${
              plan.destacado ? "border-purple-600 bg-purple-900" : "border-gray-800 bg-gray-900"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
            <p className="text-3xl font-extrabold mb-6">{plan.precio}</p>
            <ul className="text-left space-y-2 mb-6">
              {plan.caracteristicas.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅<span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/signup"
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition"
            >
              Seleccionar Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
