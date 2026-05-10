'use client';

import { motion } from 'framer-motion';
import { Network, LineChart, Target, Zap, LayoutDashboard, BrainCircuit } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Network size={32} />,
    title: "AI Learning DNA",
    desc: "AI menganalisa cara belajar, kecepatan, minat, dan performa untuk menentukan strategi belajar personal."
  },
  {
    icon: <Zap size={32} />,
    title: "Adaptive Learning System",
    desc: "Materi berubah otomatis sesuai kemampuan. Menyederhanakan materi sulit atau memberi challenge ekstra."
  },
  {
    icon: <Target size={32} />,
    title: "AI Curriculum Path",
    desc: "Sistem membuat roadmap pembelajaran otomatis dengan target mingguan dan rekomendasi skill."
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "Smart Portfolio System",
    desc: "Skill tree, achievement, dan project showcase otomatis dalam satu digital CV interaktif."
  },
  {
    icon: <LineChart size={32} />,
    title: "Emotion & Focus Analytics",
    desc: "AI membaca tingkat burnout dan konsistensi belajar, membantu guru menjaga wellbeing siswa."
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "AI Project Based",
    desc: "AI membantu menyusun ide proyek, memantau teamwork, dan mengevaluasi skill berbasis Kurikulum Merdeka."
  }
];

export default function Features() {
  return (
    <section id="features" className="features-section container">
      <div className="section-header text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glow-point mx-auto mb-4"
          style={{ margin: '0 auto 16px auto' }}
        ></motion.div>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Rewrite Your <span className="text-gradient-accent">Learning DNA</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ekosistem AI kami memetakan respons kognitif Anda untuk menyesuaikan kurikulum secara real-time.
        </motion.p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="feature-card glass-panel"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.02)' }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
            <div className="feature-hover-glow"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
