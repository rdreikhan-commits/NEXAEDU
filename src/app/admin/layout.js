'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BrainCircuit, 
  ShieldAlert, 
  Users, 
  Server, 
  Database, 
  Activity, 
  LogOut,
  DollarSign
} from 'lucide-react';
import '../dashboard/DashboardLayout.css';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="dashboard-layout" style={{ '--accent-color': '#ef4444' }}>
      {/* Sidebar */}
      <aside className="dashboard-sidebar" style={{ borderRight: '1px solid rgba(239, 68, 68, 0.15)' }}>
        <Link href="/" className="sidebar-brand">
          <ShieldAlert className="sidebar-logo-icon" size={24} color="#ef4444" />
          <span>NEXA<span style={{ color: '#ef4444' }}>ADMIN</span></span>
        </Link>

        <div className="sync-status" style={{ background: '#fef2f2', border: '1px solid #fecaca' }}>
          <div className="sync-icon-wrapper" style={{ background: '#fee2e2', color: '#ef4444' }}>
            <Server size={20} />
          </div>
          <div className="sync-text">
            <h5>Core Server</h5>
            <p style={{ color: '#ef4444' }}>System Online</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link href="/admin" className={`nav-link ${pathname === '/admin' ? 'active' : ''}`}>
            <Activity size={18} /> Network Overview
          </Link>
          <Link href="/admin/users" className={`nav-link ${pathname === '/admin/users' ? 'active' : ''}`}>
            <Users size={18} /> User Management
          </Link>
          <Link href="/admin/ai-models" className={`nav-link ${pathname === '/admin/ai-models' ? 'active' : ''}`}>
            <BrainCircuit size={18} /> AI Model Config
          </Link>
          <Link href="/admin/database" className={`nav-link ${pathname === '/admin/database' ? 'active' : ''}`}>
            <Database size={18} /> Database Logs
          </Link>
        </nav>

        <p className="nav-section-label">Lainnya</p>
        <nav className="sidebar-nav" style={{ flexGrow: 0 }}>
          <Link href="/finance" className="nav-link"><DollarSign size={18} /> Finance Panel</Link>
          <Link href="/auth/login" className="nav-link" style={{ color: '#ef4444' }}>
            <LogOut size={18} /> Keluar
          </Link>
        </nav>
      </aside>

      {/* Main Area */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header" style={{ borderBottom: '1px solid #f0f0f8' }}>
          <div className="header-tabs">
            <div className="header-tab active" style={{ borderBottomColor: '#ef4444', color: '#ef4444', fontWeight: 700 }}>Master Control</div>
            <div className="header-tab">Security Logs</div>
          </div>

          <div className="header-actions">
            <div className="profile-avatar" style={{ border: '2px solid #ef4444', background: 'url("https://i.pravatar.cc/150?img=68") center/cover' }}></div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
}
