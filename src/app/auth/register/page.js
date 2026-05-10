'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate successful registration and auto-login
    router.push('/dashboard');
  };

  return (
    <motion.div 
      className="auth-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="auth-header">
        <h2>Join NEXA EDU</h2>
        <p>Create your Neural Profile today</p>
      </div>

      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label>Full Name</label>
          <div style={{ position: 'relative' }}>
            <input type="text" className="auth-input" placeholder="Alex Carter" required />
            <User className="input-icon" size={18} />
          </div>
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <div style={{ position: 'relative' }}>
            <input type="email" className="auth-input" placeholder="alex@example.com" required />
            <Mail className="input-icon" size={18} />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>
          <div style={{ position: 'relative' }}>
            <input type="password" className="auth-input" placeholder="••••••••" required />
            <Lock className="input-icon" size={18} />
          </div>
        </div>

        <button type="submit" className="btn-primary auth-btn">
          Create Neural DNA <ArrowRight size={18} />
        </button>
      </form>

      <div className="auth-footer">
        Already have an account? <Link href="/auth/login">Log in here</Link>
      </div>
    </motion.div>
  );
}
