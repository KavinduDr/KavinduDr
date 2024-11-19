"use client";

import { motion } from "framer-motion";
import { Medal } from "lucide-react";

export function CurrentStatus() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
    >
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Medal className="w-5 h-5" />
          Current Focus
        </h3>
        <p className="text-gray-300">
          🔭 Working on <span className="text-blue-400">Assignment Management System</span>
          <br />
          🌱 Learning <span className="text-green-400">Spring Boot, React, Express, MongoDB</span>
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-300">
          📫 Email: <a href="mailto:rmkavindudhananjaya@gmail.com" className="text-blue-400 hover:underline">
            rmkavindudhananjaya@gmail.com
          </a>
        </p>
      </div>
    </motion.div>
  );
}