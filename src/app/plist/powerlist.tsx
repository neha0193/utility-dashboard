"use client";

import { useState, useEffect, FormEvent } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { TbFilePower } from "react-icons/tb";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function PowerList() {
  const [tasks, setTask] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? (JSON.parse(saved) as Task[]) : [];
  });

  const [input, setInput] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const addtask: Task = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTask([...tasks, addtask]);
      setInput("");
    } else {
      alert("⚠️ Please add a task before submitting.");
    }
  };

  const deleteTasks = (id: number): void => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id: number): void => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEditing = (task: Task): void => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id: number): void => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editText } : task
      )
    );
    setEditId(null);
    setEditText("");
  };

  const cancelEdit = (): void => {
    setEditId(null);
    setEditText("");
  };

  const date = new Date();
  const days = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
  ];
  const month = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  return (
    <div className="min-h-screen bg-stone-900 grid py-4 px-2 bg-[url(https://i.pinimg.com/736x/83/4d/14/834d144309673d5786fd6e0f8850ea30.jpg)] bg-cover bg-no-repeat bg-center">
      <div className="bg-white place-self-center min-h-[500px] rounded-xl shadow-lg p-5 w-full sm:w-11/12 sm:max-w-md lg:max-w-xl">
        
        <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mb-4">
          <TbFilePower className="text-purple-600 text-4xl sm:text-5xl" />
          Power List
        </h1>

        <div className="flex flex-wrap gap-1 text-gray-600 mb-6 text-sm sm:text-base">
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{month[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>

        <form onSubmit={handlesubmit} className="mb-6">
          <div className="flex items-stretch sm:items-center gap-2">
            <AiOutlinePlus className="hidden sm:block text-xl w-1/20 text-blue-500" />
            <input
              value={input}
              type="text"
              placeholder="Enter a task"
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 w-8/10 border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-500 w-3/20 text-white rounded px-3 py-2 text-sm sm:text-base hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
        </form>

        <div className="space-y-2 max-h-75 sm:max-h-100 overflow-y-auto pr-1">
          {tasks.map((task) => (
            <div
              key={task.id}
              onDoubleClick={() => {
                if (editId !== task.id) toggleCompleted(task.id);
              }}
              className={`flex justify-between items-center p-3 border rounded text-sm sm:text-base
              ${task.completed ? "bg-blue-200 text-gray-500 line-through" : "bg-gray-100"}`}
            >
              {editId === task.id ? (
                <div className="flex flex-col sm:flex-row w-full gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-300"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => saveEdit(task.id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded text-sm sm:text-base"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="px-3 py-1 bg-gray-400 text-white rounded text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="flex-1">{task.text}</p>
                  <div className="flex items-center gap-2 sm:gap-3">
                    {!task.completed && (
                      <FaEdit
                        onClick={() => startEditing(task)}
                        className="text-blue-500 cursor-pointer text-lg sm:text-xl"
                      />
                    )}
                    <RiDeleteBin4Fill
                      onClick={() => deleteTasks(task.id)}
                      className="text-red-500 cursor-pointer text-xl sm:text-2xl"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-4 text-sm sm:text-base">
          {tasks.length < 1 ? "You have no tasks" : `Tasks: ${tasks.length}`}
        </p>
      </div>
    </div>
  );
}

