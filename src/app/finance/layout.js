'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BrainCircuit, LayoutDashboard, DollarSign, TrendingUp,
  Users, CreditCard, FileText, Settings, Bell, Search, LogOut,
  PieChart, ArrowUpRight, ArrowDownRight, BarChart3
} from 'lucide-react';
import '../dashboard/DashboardLayout.css';
import './FinanceDashboard.css';

const navItems = [
  { href: '/finance', icon: LayoutDashboard, label: 'Ringkasan' },
  { href: '/finance/revenue', icon: TrendingUp, label: 'Pendapatan' },
  { href: '/finance/subscriptions', icon: CreditCard, label: 'Langganan Premium' },
  { href: '/finance/transactions', icon: DollarSign, label: 'Transaksi' },
  { href: '/finance/reports', icon: FileText, label: 'Laporan Keuangan' },
  { href: '/finance/analytics', icon: BarChart3, label: 'Analitik' },
];

export default function FinanceLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Link href="/" className="sidebar-brand">
          <BrainCircuit className="sidebar-logo-icon" size={26} />
          <span>NEXA<span className="accent">EDU</span></span>
        </Link>

        <div className="sync-status" style={{ background: '#dcfce7', borderColor: '#bbf7d0' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '12px', flexShrink: 0,
            background: 'linear-gradient(135deg, #16a34a, #059669)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <DollarSign size={18} color="#fff" />
          </div>
          <div className="sync-text">
            <h5>Tim Keuangan</h5>
            <p style={{ color: '#16a34a' }}>💰 Finance Manager</p>
          </div>
        </div>

        <p className="nav-section-label">Menu Keuangan</p>
        <nav className="sidebar-nav">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href} className={`nav-link ${pathname === href ? 'active' : ''}`}>
              <Icon size={18} /> {label}
            </Link>
          ))}
        </nav>

        <p className="nav-section-label">Lainnya</p>
        <nav className="sidebar-nav" style={{ flexGrow: 0 }}>
          <Link href="/admin" className="nav-link"><Settings size={18} /> Admin Panel</Link>
          <Link href="/auth/login" className="nav-link" style={{ color: '#ef4444' }}>
            <LogOut size={18} /> Keluar
          </Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-tabs">
            <span style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '1rem' }}>
              💰 Dashboard Keuangan
            </span>
          </div>
          <div className="header-actions">
            <div className="search-box">
              <Search size={16} color="#9ca3af" />
              <input type="text" placeholder="Cari transaksi..." />
            </div>
            <button className="action-btn"><Bell size={18} /></button>
            <button className="action-btn"><Settings size={18} /></button>
            <div className="profile-avatar"></div>
          </div>
        </header>
        <div className="dashboard-content">{children}</div>
      </main>
    </div>
  );
}
