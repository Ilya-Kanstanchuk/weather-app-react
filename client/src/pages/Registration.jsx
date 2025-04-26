import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

function Registration() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const responce = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
      });
      console.log(responce.data.message);
      if (responce.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen bg-backgroundtheme flex justify-center items-center">
      <div className="bg-white rounded-2xl py-6 px-10">
        <h2 className="block text-center text-4xl font-bold mb-2">Welcome!</h2>
        <p className="block text-center text-xl mb-6">Create an account</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="ml-3" htmlFor="username">
              Username
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-2 bg-inputtheme rounded-4xl"
              type="text"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-2">
            <label className="ml-3" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-2 bg-inputtheme rounded-4xl"
              type="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-2">
            <label className="ml-3" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-2 bg-inputtheme rounded-4xl"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="mt-6 mb-6 py-3 px-20 text-white font-bold text-[15px] bg-gbutton rounded-xl cursor-pointer"
            >
              Continue
            </button>
          </div>
          <div className="flex justify-center items-center">
            <p>
              Already have an account?
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
