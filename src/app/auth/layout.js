'use client';

import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import './Auth.css';

export default function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-bg-glow"></div>
      
      <Link href="/" style={{ position: 'absolute', top: '30px', left: '40px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 10 }}>
        <BrainCircuit size={28} color="var(--accent-color)" />
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px' }}>
          NEXA<span style={{ color: 'var(--accent-color)' }}>EDU</span>
        </span>
      </Link>

      {children}
    </div>
  );
}
