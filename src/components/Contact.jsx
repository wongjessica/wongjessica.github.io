import { motion } from "framer-motion";
import { about } from "../data/content";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8 mx-auto" />

          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            I'm always open to new opportunities, collaborations, and conversations.
            Feel free to reach out!
          </p>

          <div className="flex items-center justify-center gap-6 mb-10">
            <a
              href={`mailto:${about.email}`}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              <FaEnvelope size={18} />
              Say Hello
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            <a
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`mailto:${about.email}`}
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-secondary hover:text-white transition-all"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
