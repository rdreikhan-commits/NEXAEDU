'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  BrainCircuit,
  Activity,
  BookOpen,
  Layers,
  Lightbulb,
  Search,
  Bell,
  Settings,
  Sparkles,
  HelpCircle,
  LogOut,
  Video,
  Award,
  ChevronRight,
  Home,
  BarChart2,
  User,
  Menu,
  X
} from 'lucide-react';
import './DashboardLayout.css';
import AiAssistant from '@/components/AiAssistant/AiAssistant';
import { PremiumProvider } from './PremiumContext';

const navItems = [
  { href: '/dashboard', icon: Activity, label: 'Beranda' },
  { href: '/dashboard/dna', icon: BrainCircuit, label: 'Learning DNA' },
  { href: '/dashboard/curriculum', icon: BookOpen, label: 'Mata Pelajaran' },
  { href: '/dashboard/resources', icon: Layers, label: 'Video Belajar' },
  { href: '/dashboard/virtual-class', icon: Video, label: 'Kelas Virtual' },
  { href: '/dashboard/portfolio', icon: Award, label: 'Portofolio' },
  { href: '/dashboard/insights', icon: Lightbulb, label: 'AI Insights' },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <PremiumProvider>
      <div className="dashboard-layout">
        {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <div className="sidebar-brand-wrapper">
          <Link href="/" className="sidebar-brand" onClick={() => setIsMobileMenuOpen(false)}>
            <BrainCircuit className="sidebar-logo-icon" size={26} />
            <span>NEXA<span className="accent">EDU</span></span>
          </Link>
          <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} color="#6b7280" />
          </button>
        </div>

        {/* User Profile Card */}
        <div className="sync-status">
          <div className="sync-icon-wrapper"></div>
          <div className="sync-text">
            <h5>Alex Carter</h5>
            <p>Kelas 12 IPA · Level 4</p>
          </div>
        </div>

        <p className="nav-section-label">Menu Belajar</p>
        <nav className="sidebar-nav">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon size={18} /> {label}
            </Link>
          ))}
        </nav>

        <p className="nav-section-label">Lainnya</p>
        <nav className="sidebar-nav" style={{ flexGrow: 0 }}>
          <Link href="#" className="nav-link">
            <HelpCircle size={18} /> Bantuan
          </Link>
          <Link href="/auth/login" className="nav-link" style={{ color: '#ef4444' }}>
            <LogOut size={18} /> Keluar
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <button className="btn-ai-assistant" onClick={() => { setIsAiOpen(true); setIsMobileMenuOpen(false); }}>
            <Sparkles size={16} /> Tanya NEXA AI
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} color="#1a1a2e" />
          </button>

          {/* Mobile Logo */}
          <Link href="/" className="mobile-header-brand">
            <BrainCircuit className="sidebar-logo-icon" size={24} />
            <span>NEXA<span className="accent">EDU</span></span>
          </Link>

          <div className="header-tabs">
            <Link href="/dashboard" className={`header-tab ${pathname === '/dashboard' ? 'active' : ''}`}>
              Beranda
            </Link>
            <Link href="/dashboard/virtual-class" className={`header-tab ${pathname === '/dashboard/virtual-class' ? 'active' : ''}`}>
              Kelas Virtual
            </Link>
            <Link href="/dashboard/portfolio" className={`header-tab ${pathname === '/dashboard/portfolio' ? 'active' : ''}`}>
              Portofolio
            </Link>
          </div>

          <div className="header-actions">
            <div className="search-box">
              <Search size={16} color="#9ca3af" />
              <input type="text" placeholder="Cari materi pelajaran..." />
            </div>
            <button className="action-btn"><Bell size={18} /></button>
            <button className="action-btn"><Settings size={18} /></button>
            <div className="profile-avatar"></div>
          </div>
        </header>

        {/* Page Content */}
        <div className="dashboard-content">
          {children}
        </div>
      </main>

      {/* AI Assistant Modal */}
      <AiAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />

      {/* Mobile Bottom Navigation for Dashboard */}
      <div className="dashboard-mobile-nav">
        <Link href="/dashboard" className={`bottom-nav-item ${pathname === '/dashboard' ? 'active' : ''}`}>
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link href="/dashboard/dna" className={`bottom-nav-item ${pathname === '/dashboard/dna' ? 'active' : ''}`}>
          <BrainCircuit size={20} />
          <span>Analysis</span>
        </Link>
        <Link href="/dashboard/resources" className={`bottom-nav-item ${pathname === '/dashboard/resources' ? 'active' : ''}`}>
          <Video size={20} />
          <span>Courses</span>
        </Link>
        <Link href="/dashboard/profile" className={`bottom-nav-item ${pathname === '/dashboard/profile' ? 'active' : ''}`}>
          <User size={20} />
          <span>Profile</span>
        </Link>
      </div>
    </div>
    </PremiumProvider>
  );
}
