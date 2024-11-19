"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function GitHubStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div className="relative h-[195px] w-full">
        <Image
          src="https://github-readme-stats.vercel.app/api/top-langs?username=kavindudr&show_icons=true&locale=en&layout=compact&theme=dark"
          alt="Top Languages"
          fill
          className="rounded-lg object-contain"
          unoptimized
        />
      </div>
      <div className="relative h-[195px] w-full">
        <Image
          src="https://github-readme-stats.vercel.app/api?username=kavindudr&show_icons=true&locale=en&theme=dark"
          alt="GitHub Stats"
          fill
          className="rounded-lg object-contain"
          unoptimized
        />
      </div>
    </motion.div>
  );
}