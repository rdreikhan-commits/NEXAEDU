'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Activity, CheckCircle, AlertTriangle } from 'lucide-react';
import '../DashboardPage.css';

export default function LearningDNAPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <BrainCircuit size={28} color="var(--accent-color)" />
        Neural Learning DNA Analysis
      </div>
      
      <div className="dashboard-grid" style={{ marginTop: '30px' }}>
        <div className="panel-glass">
          <h3 style={{ marginBottom: '20px' }}>Cognitive Breakdown</h3>
          <div className="metrics-grid-2">
            <div className="metric-box">
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Visual Processing</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>92%</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Highly dominant. Recommended: 3D Models & Video.</p>
            </div>
            <div className="metric-box">
              <h4 style={{ color: '#b388ff', marginBottom: '10px' }}>Auditory Processing</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>45%</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Below average. Requires visual reinforcement.</p>
            </div>
            <div className="metric-box">
              <h4 style={{ color: '#00ff64', marginBottom: '10px' }}>Kinesthetic</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>78%</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Strong active learning. Recommended: Project Based.</p>
            </div>
            <div className="metric-box">
              <h4 style={{ color: '#ff4d4d', marginBottom: '10px' }}>Reading/Writing</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>60%</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Moderate. Break long texts into interactive segments.</p>
            </div>
          </div>
        </div>

        <div className="panel-glass">
          <h3 style={{ marginBottom: '20px' }}>AI Adaptive Recommendations</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle size={20} color="#00ff64" style={{ marginTop: '2px' }} />
              <div>
                <strong>Shift to Visual Mode</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>All math formulas will now include animated graphs.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <AlertTriangle size={20} color="#ffaa00" style={{ marginTop: '2px' }} />
              <div>
                <strong>Attention Span Warning</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Focus drops after 25 mins. Pomodoro mode activated.</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <Activity size={20} color="var(--accent-color)" style={{ marginTop: '2px' }} />
              <div>
                <strong>Project-Based Syllabus</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Next assignment converted to collaborative simulation.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
