"use client";
import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        My App Navbar
      </h1>
      <ThemeToggle />
    </nav>
  );
}
