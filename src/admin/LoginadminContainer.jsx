import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContextProvider";
import { FaUserLock } from "react-icons/fa"; // import icon

function LoginadminContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setIsAdmin } = useProduct();
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (username === "admin" && password === "1234") ||
      (username === "admin2" && password === "5678")
    ) {
      // Handle successful login here
      localStorage.setItem("isChecked", "true");
      setIsAdmin(true);

      navigate("/dashboard");
    } else {
      // Handle failed login here
      console.log("Login failed");
      setErrorMessage("Wrong username or password");
    }
  };
  const goBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <FaUserLock size={50} className="mx-auto text-white" />{" "}
          <h2 className="mt-6 text-center text-3xl  text-white">Admin Login</h2>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="off"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition duration-500 ease-in-out hover:scale-105"
            >
              Sign in
            </button>
          </div>
        </form>
        <button
          onClick={goBackToHome}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition duration-500 ease-in-out hover:scale-105"
          style={{ marginTop: "10px" }}
        >
          Go back to home
        </button>
      </div>
    </div>
  );
}

export default LoginadminContainer;
