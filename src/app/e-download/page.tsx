import Utilities from "./Utils";
import { Metadata } from "next";

export const metadata: Metadata = {
title: "One-click downloads",
description : "A simple yet elegant app to download important items on one click."
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center tracking-tight">
        Download <span className="text-blue-400">Important Stuff</span>
      </h1>

      {/* Utilities Section */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-lg p-6 md:p-10">
        <Utilities />
      </div>
    </div>
  );
}

