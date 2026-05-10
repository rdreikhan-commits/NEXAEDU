'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  BrainCircuit, LayoutDashboard, BookOpen, Users, GraduationCap,
  Calendar, MessageSquare, FileText, BarChart2, Settings,
  Bell, Search, LogOut, PlusCircle, Video, Star, HelpCircle
} from 'lucide-react';
import '../dashboard/DashboardLayout.css';
import './TeacherDashboard.css';

const navItems = [
  { href: '/teacher', icon: LayoutDashboard, label: 'Beranda' },
  { href: '/teacher/courses', icon: BookOpen, label: 'Mata Kuliah Saya' },
  { href: '/teacher/students', icon: Users, label: 'Mahasiswa' },
  { href: '/teacher/consultations', icon: MessageSquare, label: 'Konsultasi Privat' },
  { href: '/teacher/zoom', icon: Video, label: 'Zoom Session' },
  { href: '/teacher/grades', icon: Star, label: 'Nilai & Penilaian' },
  { href: '/teacher/reports', icon: BarChart2, label: 'Laporan' },
];

export default function TeacherLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Link href="/" className="sidebar-brand">
          <BrainCircuit className="sidebar-logo-icon" size={26} />
          <span>NEXA<span className="accent">EDU</span></span>
        </Link>

        <div className="sync-status" style={{ background: '#fef3c7', borderColor: '#fde68a' }}>
          <div className="sync-icon-wrapper" style={{ background: 'url("https://i.pravatar.cc/150?img=33") center/cover', width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0 }}></div>
          <div className="sync-text">
            <h5>Dr. Sarah Wijaya</h5>
            <p style={{ color: '#d97706' }}>👩‍🏫 Dosen / Pengajar</p>
          </div>
        </div>

        <p className="nav-section-label">Menu Pengajar</p>
        <nav className="sidebar-nav">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href} className={`nav-link ${pathname === href ? 'active' : ''}`}>
              <Icon size={18} /> {label}
            </Link>
          ))}
        </nav>

        <p className="nav-section-label">Lainnya</p>
        <nav className="sidebar-nav" style={{ flexGrow: 0 }}>
          <Link href="#" className="nav-link"><Settings size={18} /> Pengaturan</Link>
          <Link href="/auth/login" className="nav-link" style={{ color: '#ef4444' }}>
            <LogOut size={18} /> Keluar
          </Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-tabs">
            <span style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '1rem' }}>Portal Pengajar</span>
          </div>
          <div className="header-actions">
            <div className="search-box">
              <Search size={16} color="#9ca3af" />
              <input type="text" placeholder="Cari mahasiswa atau materi..." />
            </div>
            <button className="action-btn"><Bell size={18} /></button>
            <button className="action-btn"><Settings size={18} /></button>
            <div className="profile-avatar" style={{ background: 'url("https://i.pravatar.cc/150?img=33") center/cover' }}></div>
          </div>
        </header>
        <div className="dashboard-content">{children}</div>
      </main>
    </div>
  );
}
