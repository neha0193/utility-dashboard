"use client";

import { VscDebugStart } from "react-icons/vsc";
import { MdMotionPhotosPaused } from "react-icons/md";
import { IoStopCircleOutline } from "react-icons/io5";
import { BiReset, BiStopwatch } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

export default function Time() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      if (timer.current) {
        clearInterval(timer.current);
      }
    }

    // cleanup (important in TS + React)
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [isRunning]);

  const formatTime = (time: number): string => {
    const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const centiseconds = String(Math.floor((time % 1000) / 10)).padStart(
      2,
      "0",
    );
    return `${minutes}:${seconds}:${centiseconds}`;
  };

  const addLap = (): void => {
    if (time > 0) {
      setLaps((prev) => [...prev, time]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center pt-28 text-white ">
      {/* ---header--- */}
      <div className="flex items-center gap-4 mb-10">
        <BiStopwatch className="text-pink-500 text-7xl" />
        <h1 className="text-5xl font-bold text-pink-400">Stopwatch</h1>
      </div>

      {/*--- time display ---*/}
      <div className="bg-gray-800 shadow-lg px-10 py-6 rounded-2xl text-5xl font-mono tracking-wide mb-12">
        {formatTime(time)}
      </div>

      {/* ---controls--- */}
      <div className="flex gap-6 mb-12 flex-wrap justify-center">
        {!isRunning ? (
          <button
            onClick={() => setIsRunning(true)}
            className="bg-green-600 hover:bg-green-700 p-4 rounded-full shadow-lg transition"
          >
            <VscDebugStart className="text-white text-4xl" />
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsRunning(false)}
              className="bg-red-600 hover:bg-red-700 p-4 rounded-full shadow-lg transition"
            >
              <IoStopCircleOutline className="text-white text-4xl" />
            </button>

            <button
              onClick={addLap}
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-lg transition"
            >
              <MdMotionPhotosPaused className="text-white text-4xl" />
            </button>
          </>
        )}

        {/* ----reset button --- */}
        <button
          onClick={() => {
            setIsRunning(false);
            setTime(0);
            setLaps([]);
          }}
          className="bg-yellow-500 hover:bg-yellow-600 p-4 rounded-full shadow-lg transition"
        >
          <BiReset className="text-white text-4xl" />
        </button>
      </div>

      {/* ---lap times ---*/}
      {laps.length > 0 && (
        <div className="w-full max-w-md bg-gray-800 rounded-xl py-6 px-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-pink-300 mb-4 text-center">
            Laps
          </h2>
          <ul className="space-y-2 max-h-60 overflow-y-auto my-scrollbar ">
            {laps.map((lap, index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-700 px-4 py-2 rounded-lg text-lg"
              >
                <span className="font-bold">Lap {index + 1}</span>
                <span>{formatTime(lap)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
