"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold">Frontend App</h1>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}
