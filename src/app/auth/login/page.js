'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, ArrowRight, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [role, setRole] = useState('student'); // 'student', 'teacher', 'finance', 'admin'
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'student') router.push('/dashboard');
    else if (role === 'teacher') router.push('/teacher');
    else if (role === 'finance') router.push('/finance');
    else router.push('/admin');
  };

  return (
    <motion.div 
      className="auth-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="auth-header">
        <h2>Welcome Back</h2>
        <p>Log in to access your Neural Hub</p>
      </div>

      <div className="auth-tabs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '20px' }}>
        <div className={`auth-tab ${role === 'student' ? 'active' : ''}`} onClick={() => setRole('student')} style={{ fontSize: '0.85rem' }}>
          Mahasiswa
        </div>
        <div className={`auth-tab ${role === 'teacher' ? 'active' : ''}`} onClick={() => setRole('teacher')} style={{ fontSize: '0.85rem' }}>
          Guru / Dosen
        </div>
        <div className={`auth-tab ${role === 'finance' ? 'active' : ''}`} onClick={() => setRole('finance')} style={{ fontSize: '0.85rem' }}>
          Keuangan
        </div>
        <div className={`auth-tab admin ${role === 'admin' ? 'active' : ''}`} onClick={() => setRole('admin')} style={{ fontSize: '0.85rem' }}>
          Master Admin
        </div>
      </div>

      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email Address</label>
          <div style={{ position: 'relative' }}>
            <input 
              type="email" className="auth-input" required 
              value={role === 'admin' ? 'admin@nexa.edu' : role === 'teacher' ? 'dosen@nexa.edu' : role === 'finance' ? 'keuangan@nexa.edu' : 'alex@nexa.edu'}
              readOnly
            />
            <Mail className="input-icon" size={18} />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>
          <div style={{ position: 'relative' }}>
            <input type="password" className="auth-input" required value="password123" readOnly />
            <Lock className="input-icon" size={18} />
          </div>
        </div>

        {role === 'admin' && (
          <div style={{ marginBottom: '20px', padding: '10px', background: 'rgba(255, 77, 77, 0.1)', border: '1px solid rgba(255, 77, 77, 0.3)', borderRadius: '8px', fontSize: '0.85rem', color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldAlert size={16} />
            Restricted System Access. Master authorization required.
          </div>
        )}

        <button type="submit" className={`btn-primary auth-btn ${role === 'admin' ? 'admin-btn' : ''}`} style={{ width: '100%', marginTop: '10px' }}>
          Login sebagai {role === 'student' ? 'Mahasiswa' : role === 'teacher' ? 'Dosen' : role === 'finance' ? 'Keuangan' : 'Admin'} <ArrowRight size={18} />
        </button>
      </form>

      <div className="auth-footer">
        Don't have an account? <Link href="/auth/register">Register now</Link>
      </div>
    </motion.div>
  );
}
