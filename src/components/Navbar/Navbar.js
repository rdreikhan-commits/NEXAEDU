'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BrainCircuit, Menu, Home, BarChart2, BookOpen, User } from 'lucide-react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container nav-container">
          <button className="mobile-menu-btn">
            <Menu size={24} color="#7c3aed" />
          </button>
          
          <Link href="/" className="logo">
            <BrainCircuit className="logo-icon" size={24} />
            <span className="logo-text">NEXA<span className="logo-accent">EDU</span></span>
          </Link>
          
          <div className="nav-links">
            <Link href="#problem">Problem</Link>
            <Link href="#features">AI Features</Link>
            <Link href="#dashboard">Live Dashboard</Link>
            <Link href="#immersive">Immersive</Link>
          </div>

          <div className="nav-actions">
            <Link href="/auth/login" className="btn-secondary nav-btn sign-in-btn">Sign In</Link>
            <Link href="/auth/register" className="btn-primary nav-btn join-btn">Join Waitlist</Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-bottom-nav">
        <Link href="/" className="bottom-nav-item active">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link href="/analytics" className="bottom-nav-item">
          <BarChart2 size={20} />
          <span>Analytics</span>
        </Link>
        <Link href="/courses" className="bottom-nav-item">
          <BookOpen size={20} />
          <span>Courses</span>
        </Link>
        <Link href="/profile" className="bottom-nav-item">
          <User size={20} />
          <span>Profile</span>
        </Link>
      </div>
    </>
  );
}
