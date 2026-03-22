import { motion } from "framer-motion";
import { about, awards } from "../data/content";
import { FaTrophy } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {about.bio}
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about building technology that makes a positive impact.
                With experience spanning full-stack development, data engineering,
                and cybersecurity education, I bring a diverse
                perspective to every project I work on.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FaTrophy className="text-accent-warm" />
                Honors & Awards
              </h3>
              <ul className="space-y-3">
                {awards.map((award, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary shrink-0" />
                    <div>
                      <span className="text-gray-700 font-medium text-sm">
                        {award.name}
                      </span>
                      {award.year && (
                        <span className="text-gray-400 text-xs ml-2">
                          {award.year}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
