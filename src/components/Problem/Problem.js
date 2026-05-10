'use client';

import { motion } from 'framer-motion';
import { Frown, BookX, UserX } from 'lucide-react';
import './Problem.css';

const problems = [
  {
    icon: <Frown size={40} className="problem-icon" />,
    title: "Burnout & Stres",
    desc: "Siswa kelelahan dengan sistem belajar yang kaku dan target yang tidak sesuai kemampuan.",
    stat: "78%"
  },
  {
    icon: <BookX size={40} className="problem-icon" />,
    title: "Pembelajaran Monoton",
    desc: "Materi satu-ukuran-untuk-semua membuat siswa kehilangan minat dan motivasi.",
    stat: "65%"
  },
  {
    icon: <UserX size={40} className="problem-icon" />,
    title: "Sistem Tidak Personal",
    desc: "Potensi unik setiap siswa tidak terdeteksi oleh sistem konvensional.",
    stat: "82%"
  }
];

export default function Problem() {
  return (
    <section id="problem" className="problem-section container">
      <div className="section-header text-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The Obsolete Framework
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sistem pendidikan tradisional gagal beradaptasi dengan kecepatan kognitif generasi baru.
        </motion.p>
      </div>

      <div className="problem-grid">
        {problems.map((item, index) => (
          <motion.div 
            key={index}
            className="problem-card glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="problem-stat">{item.stat}</div>
            <div className="problem-icon-wrapper">{item.icon}</div>
            <div className="problem-card-content">
              <h3 className="problem-card-title">{item.title}</h3>
              <p className="problem-card-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
