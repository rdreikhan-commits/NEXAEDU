'use client';

import { Briefcase, Award, Code, Globe, PenTool, ExternalLink } from 'lucide-react';
import '../DashboardPage.css';

export default function PortfolioPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Briefcase size={28} color="var(--accent-color)" />
        Smart Portfolio
      </div>
      
      <div className="dashboard-grid" style={{ marginTop: '30px', gridTemplateColumns: '1fr' }}>
        <div className="panel-glass">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <div>
              <h3>Alex's Digital Showcase</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Automatically curated from your Project-Based Learning modules.</p>
            </div>
            <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              <ExternalLink size={16} style={{ display: 'inline', marginRight: '8px' }} /> Share Public Link
            </button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className="portfolio-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                <div className="portfolio-icon"><Code size={24} color="#00e5ff" /></div>
                <span style={{ fontSize: '0.8rem', background: 'rgba(0, 229, 255, 0.1)', color: 'var(--accent-color)', padding: '4px 10px', borderRadius: '12px' }}>Tech</span>
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Quantum Mechanics 3D Viewer</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>
                Built a 3D simulation of electron orbits using Three.js as part of the final physics project.
              </p>
              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <Award size={16} color="#00ff64" /> <span style={{ fontSize: '0.85rem' }}>A+ Grade</span>
              </div>
            </div>

            <div className="portfolio-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                <div className="portfolio-icon"><Globe size={24} color="#b388ff" /></div>
                <span style={{ fontSize: '0.8rem', background: 'rgba(179, 136, 255, 0.1)', color: '#b388ff', padding: '4px 10px', borderRadius: '12px' }}>Humanities</span>
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Global Warming Analysis</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>
                A comprehensive data dashboard analyzing global temperature rises over the last century.
              </p>
              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <Award size={16} color="#00ff64" /> <span style={{ fontSize: '0.85rem' }}>Top 5% Class</span>
              </div>
            </div>

            <div className="portfolio-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                <div className="portfolio-icon"><PenTool size={24} color="#ffaa00" /></div>
                <span style={{ fontSize: '0.8rem', background: 'rgba(255, 170, 0, 0.1)', color: '#ffaa00', padding: '4px 10px', borderRadius: '12px' }}>Arts</span>
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Digital Architecture Model</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>
                Designed a sustainable, eco-friendly smart home model using Blender.
              </p>
              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <Award size={16} color="#00ff64" /> <span style={{ fontSize: '0.85rem' }}>Creativity Award</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
