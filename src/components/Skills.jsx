import { motion } from "framer-motion";
import { skills } from "../data/content";
import { FaCode, FaCubes, FaTools, FaBrain } from "react-icons/fa";

const categories = [
  { key: "languages", label: "Languages", icon: FaCode, gradient: "from-indigo-500 to-purple-500" },
  { key: "frameworks", label: "Frameworks", icon: FaCubes, gradient: "from-pink-500 to-rose-500" },
  { key: "tools", label: "Tools", icon: FaTools, gradient: "from-cyan-500 to-blue-500" },
  { key: "concepts", label: "Concepts", icon: FaBrain, gradient: "from-amber-500 to-orange-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-lg`}
                >
                  <cat.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
