'use client';

import { BrainCircuit, Settings, Play, Square } from 'lucide-react';
import '../../dashboard/DashboardPage.css';

export default function AdminAIModelsPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <BrainCircuit size={28} color="#ff4d4d" />
        AI Model Configuration
      </div>
      
      <div className="dashboard-grid" style={{ marginTop: '30px' }}>
        <div className="panel-glass">
          <h3 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>NEXA Core Engine</h3>
          
          <div className="portfolio-list">
            <div className="portfolio-item" style={{ borderLeft: '3px solid #00ff64', padding: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
                <h4 style={{ fontSize: '1.2rem' }}>Gemini Pro (v1.5)</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Primary Engine for Adaptive Learning</p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn-secondary" style={{ padding: '8px 15px', display: 'flex', alignItems: 'center', gap: '5px' }}><Settings size={16}/> Config</button>
                <button className="btn-primary" style={{ background: 'rgba(255, 77, 77, 0.2)', color: '#ff4d4d', border: '1px solid rgba(255, 77, 77, 0.5)', padding: '8px 15px', display: 'flex', alignItems: 'center', gap: '5px' }}><Square size={16} fill="currentColor" /> Stop</button>
              </div>
            </div>

            <div className="portfolio-item" style={{ borderLeft: '3px solid rgba(255,255,255,0.2)', padding: '20px', opacity: 0.6 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
                <h4 style={{ fontSize: '1.2rem' }}>GPT-4 Turbo (Fallback)</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Secondary Engine</p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn-secondary" style={{ padding: '8px 15px', display: 'flex', alignItems: 'center', gap: '5px', color: '#00ff64', borderColor: 'rgba(0, 255, 100, 0.3)' }}><Play size={16} fill="currentColor" /> Start</button>
              </div>
            </div>
          </div>
        </div>

        <div className="panel-glass">
          <h3 style={{ marginBottom: '20px' }}>Prompt Engineering Console</h3>
          <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '12px', padding: '15px' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '10px' }}>System Context Variable:</p>
            <textarea 
              className="auth-input" 
              style={{ width: '100%', minHeight: '150px', background: 'transparent', resize: 'vertical' }}
              defaultValue="Kamu adalah NEXA, sebuah AI Tutor Assistant futuristik di platform NEXA EDU. Platform ini menggunakan Kurikulum Merdeka..."
            ></textarea>
            <button className="btn-primary" style={{ background: 'linear-gradient(135deg, #ff4d4d, #b30000)', padding: '10px 20px', marginTop: '15px' }}>Deploy to Cluster</button>
          </div>
        </div>
      </div>
    </div>
  );
}
