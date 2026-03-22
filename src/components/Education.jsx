import { motion } from "framer-motion";
import { education } from "../data/content";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg">
                  <FaGraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{edu.school}</h3>
                  <p className="text-gray-500 text-sm">{edu.degree}</p>
                </div>
              </div>

              {edu.honors.length > 0 && (
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((honor) => (
                      <span
                        key={honor}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-accent-warm/10 text-amber-700"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-700">Activities:</span>{" "}
                {edu.activities}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
