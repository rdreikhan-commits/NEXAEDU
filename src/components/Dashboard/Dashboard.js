'use client';

import { motion } from 'framer-motion';
import { Activity, HeartPulse, Brain, Target, Compass } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <section id="dashboard" className="dashboard-section container">
      <div className="section-header text-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Sentient <span className="text-gradient-accent">Live Dashboard</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Monitoring kognitif, analitik emosional, dan adaptasi kurikulum terjadi dalam hitungan milidetik.
        </motion.p>
      </div>

      <div className="dashboard-mockup glass-panel">
        <div className="dashboard-sidebar">
          <div className="user-profile">
            <div className="avatar glow-point"></div>
            <div>
              <h4>Alex Carter</h4>
              <p>Neural Sync: 92%</p>
            </div>
          </div>
          <nav className="dashboard-nav">
            <div className="nav-item active"><Compass size={18} /> Overview</div>
            <div className="nav-item"><Activity size={18} /> Analytics</div>
            <div className="nav-item"><Target size={18} /> Roadmap</div>
          </nav>
        </div>
        
        <div className="dashboard-main">
          <div className="dashboard-header">
            <h3>AI Core Insights</h3>
            <div className="status-badge">Live System Active</div>
          </div>

          <div className="metrics-grid">
            <motion.div 
              className="metric-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <HeartPulse size={24} className="metric-icon" />
              <div className="metric-info">
                <span>Emotional State</span>
                <h4>Optimal Flow</h4>
              </div>
            </motion.div>
            
            <motion.div 
              className="metric-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Brain size={24} className="metric-icon" />
              <div className="metric-info">
                <span>Cognitive Load</span>
                <h4>45% (Stable)</h4>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="ai-recommendation glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="rec-header">
              <span className="pulsing-dot"></span>
              NEXA Core Recommendation
            </div>
            <p className="rec-text">
              "Siswa menunjukkan peningkatan retensi sebesar 34% pada materi visual interaktif. 
              Menggeser silabus modul Fisika Kuantum ke mode 3D Simulation."
            </p>
            <button className="btn-primary rec-btn">Execute Syllabus Shift</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
