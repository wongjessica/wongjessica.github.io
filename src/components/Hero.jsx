import { motion } from "framer-motion";
import { about } from "../data/content";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-40 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            {about.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-2 font-light">
            {about.title} · {about.location}
          </p>
          <p className="text-gray-500 max-w-xl mx-auto mt-6 leading-relaxed">
            {about.bio}
          </p>

          <div className="flex items-center justify-center gap-5 mt-10">
            <a
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-900 text-white hover:bg-primary transition-colors shadow-lg hover:shadow-primary/25"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-primary transition-colors shadow-lg hover:shadow-primary/25"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`mailto:${about.email}`}
              className="p-3 rounded-full bg-secondary text-white hover:bg-primary transition-colors shadow-lg hover:shadow-primary/25"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16"
          >
            <div className="animate-bounce text-gray-400">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
