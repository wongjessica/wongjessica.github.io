import { motion } from "framer-motion";
import { volunteerWork } from "../data/content";
import { FaHeart } from "react-icons/fa";

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Volunteer Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {volunteerWork.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-pink-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <FaHeart className="text-secondary" size={16} />
                <h3 className="text-lg font-bold text-gray-900">
                  {item.organization}
                </h3>
              </div>
              <p className="text-primary font-semibold text-sm mb-1">{item.role}</p>
              <p className="text-gray-400 text-sm mb-3">{item.period}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
