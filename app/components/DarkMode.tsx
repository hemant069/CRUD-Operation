"use client";
import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <>
      <p
        className="border border-blue-500  shadow-lg p-2 w-10 rounded-full cursor-pointer"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "🌚" : "🌞"}
      </p>
    </>
  );
};

export default DarkMode;
