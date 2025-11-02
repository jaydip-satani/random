"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import clsx from "clsx";

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

  const router = useRouter();

  const handleChange = (
    key: keyof PasswordOptions,
    value: boolean | number
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  const handleGeneratePassword = () => {
    const params = new URLSearchParams(
      Object.entries(options).map(([k, v]) => [k, String(v)])
    ).toString();
    router.push(`/api/generate?${params}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.08),transparent_60%)] blur-[120px]" />

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-semibold mb-10 bg-linear-to-r from-green-300 to-blue-400 bg-clip-text text-transparent"
      >
        🔐 Password Generator
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 18, stiffness: 180 }}
        className="relative z-10 w-80 rounded-[30px] bg-white/10 backdrop-blur-3xl border border-white/20 p-8 shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)]"
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-300">
            Length:{" "}
            <span className="font-semibold text-white">{options.length}</span>
          </label>
          <Ios26Slider
            value={options.length}
            min={4}
            max={32}
            onChange={(v) => handleChange("length", v)}
          />
        </div>

        <div className="space-y-5 mb-8">
          {[
            ["numbers", "Include Numbers"],
            ["symbols", "Include Symbols"],
            ["uppercase", "Include Uppercase"],
            ["lowercase", "Include Lowercase"],
          ].map(([key, label]) => (
            <div
              key={key}
              className="flex items-center justify-between text-sm text-gray-300"
            >
              <span>{label}</span>
              <Ios26Toggle
                enabled={options[key as keyof PasswordOptions] as boolean}
                onChange={(v) => handleChange(key as keyof PasswordOptions, v)}
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleGeneratePassword}
          className="w-full py-3 rounded-2xl bg-linear-to-r from-green-400 to-emerald-500 text-white font-medium shadow-[0_0_25px_-8px_rgba(16,185,129,0.6)] hover:shadow-[0_0_35px_-6px_rgba(16,185,129,0.8)] transition-all"
        >
          Generate Password
        </motion.button>
      </motion.div>
    </main>
  );
}

function Ios26Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.94 }}
      onClick={() => onChange(!enabled)}
      className={clsx(
        "relative w-12 h-7 flex items-center rounded-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
        enabled
          ? "bg-linear-to-r from-emerald-400/30 to-green-500/30"
          : "bg-white/10"
      )}
      style={{
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        border: enabled
          ? "1px solid rgba(255,255,255,0.35)"
          : "1px solid rgba(255,255,255,0.15)",
        boxShadow: enabled
          ? "0 0 25px rgba(16,185,129,0.35), inset 0 0 20px rgba(255,255,255,0.05)"
          : "inset 0 0 10px rgba(255,255,255,0.05)",
      }}
    >
      <AnimatePresence>
        {enabled && (
          <motion.span
            key="ripple"
            initial={{ scale: 0.4, opacity: 0.4 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-green-400/40 blur-[25px] rounded-full"
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        className={clsx(
          "absolute inset-0 transition-all duration-700 rounded-full",
          enabled ? "bg-linear-to-r from-green-400/20 to-emerald-500/20" : ""
        )}
      />

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 600, damping: 28 }}
        className={clsx(
          "relative z-10 h-5 w-5 rounded-full transition-all duration-500 ease-out",
          enabled
            ? "translate-x-[22px] bg-white/70"
            : "translate-x-0 bg-white/60"
        )}
        style={{
          boxShadow: enabled
            ? "0 0 10px rgba(16,185,129,0.5), inset 0 0 8px rgba(255,255,255,0.3)"
            : "0 0 6px rgba(255,255,255,0.4), inset 0 0 4px rgba(255,255,255,0.2)",
          backdropFilter: "blur(12px) saturate(150%)",
          WebkitBackdropFilter: "blur(12px) saturate(150%)",
        }}
      >
        <motion.span
          initial={false}
          animate={{
            opacity: enabled ? [0.6, 0.9, 0.6] : [0.4, 0.7, 0.4],
            y: enabled ? [0, -1, 0] : [0, 1, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0.5 left-[3px] w-[60%] h-[40%] bg-white/50 rounded-full blur-[5px]"
        />

        <div className="absolute bottom-[3px] right-1 w-[40%] h-[35%] bg-emerald-300/30 rounded-full blur-[6px]" />
      </motion.div>
    </motion.button>
  );
}
function Ios26Slider({
  value,
  min,
  max,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (val: number) => void;
}) {
  const handleSlide = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative w-full h-6 flex items-center">
      {/* Track */}
      <div className="absolute w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          animate={{ width: `${percent}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="h-full bg-linear-to-r from-green-400/80 to-emerald-500/80 rounded-full"
        />
      </div>

      {/* Input */}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleSlide}
        className="absolute w-full opacity-0 cursor-pointer h-6 z-20"
      />

      {/* Knob */}
      <motion.div
        className="absolute z-10 w-6 h-6 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none"
        animate={{ left: `calc(${percent}% - 12px)` }}
        transition={{ type: "spring", stiffness: 250, damping: 30 }}
      >
        <div className="absolute top-0.5 left-[3px] w-[60%] h-[40%] bg-white/40 rounded-full blur-xs" />
      </motion.div>
    </div>
  );
}
