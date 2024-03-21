"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png"; // Asegúrate de que este path sea correcto.
import { FaUserAlt, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías la lógica de inicio de sesión
    console.log(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-grey">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Logo" width={250} height={100} />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center border-b-2 py-2">
            <FaUserAlt className="text-accent mr-2" />
            <input
              type="text"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center border-b-2 py-2">
            <FaLock className="text-accent mr-2" />
            <input
              type="password"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-lg btn-accent w-full" type="submit">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
