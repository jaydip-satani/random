"use client";

import { useState } from "react";

interface PasswordOptions {
  length: number;
  numbers: boolean;
  symbols: boolean;
  uppercase: boolean;
  lowercase: boolean;
}

export default function Home() {
  const [options, setOptions] = useState<PasswordOptions>({
    length: 12,
    numbers: true,
    symbols: false,
    uppercase: true,
    lowercase: true,
  });

  const [password, setPassword] = useState<string>("");

  const handleChange = (
    key: keyof PasswordOptions,
    value: boolean | number
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  const generatePassword = async () => {
    const params = new URLSearchParams(
      Object.entries(options).map(([key, value]) => [key, String(value)])
    );

    const res = await fetch(`/api/generate?${params.toString()}`);
    const data = await res.json();

    if (data.password) setPassword(data.password);
    else setPassword("Error: Invalid input.");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🔐 Random Password Generator
      </h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
        {/* Length Slider */}
        <div className="mb-4">
          <label className="block mb-1">
            Length: <span className="font-mono">{options.length}</span>
          </label>
          <input
            type="range"
            min={4}
            max={32}
            value={options.length}
            onChange={(e) => handleChange("length", parseInt(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-2 mb-4">
          {[
            ["numbers", "Include Numbers"],
            ["symbols", "Include Symbols"],
            ["uppercase", "Include Uppercase"],
            ["lowercase", "Include Lowercase"],
          ].map(([key, label]) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={options[key as keyof PasswordOptions] as boolean}
                onChange={(e) =>
                  handleChange(key as keyof PasswordOptions, e.target.checked)
                }
                className="accent-blue-500"
              />
              {label}
            </label>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={generatePassword}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
        >
          Generate Password
        </button>

        {/* Result */}
        {password && (
          <div className="mt-4 bg-gray-700 rounded-lg p-3 text-center font-mono select-all">
            {passwo