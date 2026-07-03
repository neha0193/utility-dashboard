"use client";

import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-linear-to-br from-pink-100 to-pink-200 dark:from-[#0f172a] dark:to-[#020617] transition-colors duration-500">
        
        {/* Theme Toggle */}
        <div className="flex justify-end p-6">
          <button
            type="button"
            onClick={() => setIsDark(prev => !prev)}
            className="rounded-full p-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-110 transition duration-300"
          >
            <FaLightbulb className="text-3xl text-black dark:text-yellow-400" />
          </button>
        </div>

        {/* Main Card */}
        <div className="flex items-center justify-center px-6">
          <div className="w-full max-w-md rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl p-10 text-center">
            
            {/* Heading */}
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Counter App
            </h1>

            {/* Counter */}
            <div className="mb-10">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                Current Value
              </p>

              <div className="text-7xl font-bold text-indigo-600 dark:text-indigo-400 drop-shadow-lg">
                {count}
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <button
                type="button"
                onClick={() => setCount((prev) => prev + 1)}
                className="rounded-xl bg-green-500 px-3 py-3 text-lg font-semibold text-white shadow-lg hover:scale-105 hover:bg-green-600 active:scale-95 transition duration-200"
              >
                + Increment
              </button>

              <button
                type="button"
                onClick={() => setCount((prev) => prev - 1)}
                className="rounded-xl bg-red-500 px-3 py-3 text-lg font-semibold text-white shadow-lg hover:scale-105 hover:bg-red-600 active:scale-95 transition duration-200"
              >
                - Decrement
              </button>

              <button
                type="button"
                onClick={() => setCount(0)}
                className="rounded-xl bg-indigo-500 px-5 py-3 text-lg font-semibold text-white shadow-lg hover:scale-105 hover:bg-indigo-600 active:scale-95 transition duration-200"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}