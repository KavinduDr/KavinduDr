"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB",
  "Java", "Spring Boot", "Python", "TensorFlow", "Flutter", "Git",
  "MySQL", "Firebase", "Docker", "Linux"
];

export function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mb-16"
    >
      <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-gray-800 rounded-full text-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}