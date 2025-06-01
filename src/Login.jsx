// src/Login.jsx
import React from "react";

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-10 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-2">Correo Electrónico</label>
            <input
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-all"
          >
            Entrar
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            ¿No tienes cuenta?{" "}
            <a href="/signup" className="text-purple-600 font-medium hover:underline">
              Crea una gratis
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
