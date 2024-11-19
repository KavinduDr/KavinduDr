"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Facebook, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://linkedin.com/in/kavindu-dhananjaya-2b039b233",
    label: "LinkedIn",
  },
  {
    icon: <Github className="w-6 h-6" />,
    href: "https://github.com/kavindudr",
    label: "GitHub",
  },
  {
    icon: <Facebook className="w-6 h-6" />,
    href: "https://fb.com/kavindu.rathnayaka.35",
    label: "Facebook",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:rmkavindudhananjaya@gmail.com",
    label: "Email",
  },
];

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl font-bold mb-4">Hi 👋, I&apos;m Kavindu Dhanajaya</h1>
      <h2 className="text-2xl text-gray-300 mb-8">A passionate Full Stack Developer</h2>
      
      <div className="flex justify-center gap-6 mb-8">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}