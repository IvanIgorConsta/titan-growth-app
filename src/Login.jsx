import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Iniciar sesión</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Correo electrónico" className="w-full p-3 border border-gray-300 rounded" />
          <input type="password" placeholder="Contraseña" className="w-full p-3 border border-gray-300 rounded" />
          <button className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-800 transition">Entrar</button>
        </form>
      </div>
    </div>
  );
}