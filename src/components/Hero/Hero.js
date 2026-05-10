'use client';

import { motion } from 'framer-motion';
import './Hero.css';
import { Sparkles, Brain, Cpu, BookOpen, Calculator, BarChart, Binary, Code2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow"></div>
      
      {/* Floating Educational Background Elements */}
      <div className="hero-floating-elements">
        <div className="float-icon float-1"><BookOpen size={42} /></div>
        <div className="float-icon float-2"><Calculator size={38} /></div>
        <div className="float-icon float-3"><BarChart size={46} /></div>
        <div className="float-icon float-4"><Binary size={52} /></div>
        <div className="float-icon float-5"><Code2 size={40} /></div>
      </div>

      <div className="hero-container container">
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sparkles size={16} className="badge-icon" />
            <span>NEXA EDU 2.0 IS LIVE</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Future Of <br />
            <span className="text-gradient-accent">Learning</span> Starts Here.
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AI-powered adaptive education ecosystem designed for the new generation curriculum. 
            Personalized, immersive, and data-driven.
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/auth/register" className="btn-primary flex-btn" style={{display: 'inline-flex'}}>
              <Brain size={20} />
              Start Free Trial
            </Link>
            <Link href="#dashboard" className="btn-secondary flex-btn" style={{display: 'inline-flex'}}>
              <Cpu size={20} />
              Explore Ecosystem
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="hologram-container">
            <Hero3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
