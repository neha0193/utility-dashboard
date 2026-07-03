"use client"

import { useState, useEffect } from "react";

function App() {
  const [ctime, setCtime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toDateString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCtime(new Date().toLocaleTimeString());
      setDate(new Date().toDateString());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-4xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800">{date}</h1>
        <h1 className="text-4xl font-bold text-blue-600 mt-2">{ctime}</h1>
      </div>
    </div>
  );
}

export default App;