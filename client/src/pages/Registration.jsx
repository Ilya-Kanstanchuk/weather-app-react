import React from "react";

function Registration() {
  return (
    <div className="min-h-screen bg-backgroundtheme flex justify-center items-center">
      <div className="bg-white rounded-2xl py-6 px-10">
        <h2 className="block text-center text-4xl font-bold mb-2">Welcome!</h2>
        <p className="block text-center text-xl mb-6">Create an account</p>
        <form>
          <div className="mb-2">
            <label className="ml-3" htmlFor="username">
              Username
            </label>
            <input
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
              className="w-full px-5 py-2 bg-inputtheme rounded-4xl"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button className="mt-6 mb-6 py-3 px-20 text-white font-bold text-[15px] bg-gbutton rounded-xl">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
