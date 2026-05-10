'use client';

import { BrainCircuit } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <BrainCircuit className="logo-icon" size={28} />
            <span className="logo-text">NEXA<span className="logo-accent">EDU</span></span>
          </div>
          <p className="footer-desc">
            AI Adaptive Learning Ecosystem. Platform Pendidikan Masa Depan Berbasis Kurikulum Merdeka & AI Personalization.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Ecosystem</h4>
            <a href="#">Learning DNA</a>
            <a href="#">Virtual Classroom</a>
            <a href="#">Smart Portfolio</a>
            <a href="#">Emotion Analytics</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} NEXA EDU. All rights reserved. Sentient Learning Systems.</p>
      </div>
    </footer>
  );
}
