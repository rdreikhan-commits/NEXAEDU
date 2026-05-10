'use client';

import { useState } from 'react';
import {
  DollarSign, TrendingUp, CreditCard, Users, ArrowUpRight, ArrowDownRight,
  PieChart, Activity, Crown, Calendar, Download, Filter
} from 'lucide-react';
import './FinanceDashboard.css';

const kpis = [
  { label: 'Total Pendapatan', value: 'Rp 452.8M', icon: DollarSign, color: '#16a34a', bg: '#dcfce7', trend: 'up', change: '+12.5%' },
  { label: 'Pendapatan Bulan Ini', value: 'Rp 64.2M', icon: TrendingUp, color: '#7c3aed', bg: '#ede9fe', trend: 'up', change: '+8.2%' },
  { label: 'Langganan Premium Aktif', value: '1,420', icon: Crown, color: '#d97706', bg: '#fef3c7', trend: 'up', change: '+15.3%' },
  { label: 'Tingkat Churn', value: '2.4%', icon: Activity, color: '#ef4444', bg: '#fee2e2', trend: 'down', change: '-0.5%' },
];

const recentTransactions = [
  { id: 'TRX-9982', user: 'Alex Carter', plan: 'Premium Tahunan', amount: 'Rp 1.200.000', status: 'sukses', date: 'Hari ini, 14:30', iconBg: '#dcfce7', iconColor: '#16a34a' },
  { id: 'TRX-9981', user: 'Siti Rahayu', plan: 'Premium Bulanan', amount: 'Rp 150.000', status: 'sukses', date: 'Hari ini, 13:15', iconBg: '#dcfce7', iconColor: '#16a34a' },
  { id: 'TRX-9980', user: 'Budi Prasetyo', plan: 'Bootcamp UI/UX', amount: 'Rp 2.500.000', status: 'pending', date: 'Hari ini, 11:45', iconBg: '#fef3c7', iconColor: '#d97706' },
  { id: 'TRX-9979', user: 'Dimas Arya', plan: 'Premium 6 Bulan', amount: 'Rp 750.000', status: 'sukses', date: 'Kemarin, 16:20', iconBg: '#dcfce7', iconColor: '#16a34a' },
  { id: 'TRX-9978', user: 'Rina Kusumawati', plan: 'Premium Bulanan', amount: 'Rp 150.000', status: 'gagal', date: 'Kemarin, 09:10', iconBg: '#fee2e2', iconColor: '#ef4444' },
];

const revenueByCategory = [
  { category: 'Langganan Premium Bulanan', amount: 'Rp 18.5M', percent: 65, color: 'linear-gradient(90deg, #7c3aed, #ec4899)' },
  { category: 'Langganan Premium Tahunan', amount: 'Rp 24.2M', percent: 85, color: 'linear-gradient(90deg, #f59e0b, #ef4444)' },
  { category: 'Program Bootcamp Intensif', amount: 'Rp 15.0M', percent: 45, color: 'linear-gradient(90deg, #10b981, #3b82f6)' },
  { category: 'Pembelian Sertifikat', amount: 'Rp 6.5M', percent: 25, color: 'linear-gradient(90deg, #6366f1, #8b5cf6)' },
];

const subscriptionPlans = [
  { name: 'Premium Bulanan', price: 'Rp 150.000', activeUsers: 850, growth: '+5%', color: '#7c3aed', bg: '#ede9fe' },
  { name: 'Premium 6 Bulan', price: 'Rp 750.000', activeUsers: 320, growth: '+12%', color: '#2563eb', bg: '#dbeafe' },
  { name: 'Premium Tahunan', price: 'Rp 1.200.000', activeUsers: 250, growth: '+20%', color: '#f59e0b', bg: '#fef3c7' },
];

export default function FinanceDashboard() {
  const [dateRange, setDateRange] = useState('Bulan Ini');

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a1a2e' }}>Ringkasan Keuangan</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Pantau pendapatan, langganan, dan transaksi platform.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 16px',
            background: '#fff', border: '1px solid #e5e7eb', borderRadius: '10px',
            color: '#4b5563', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem'
          }}>
            <Calendar size={15} /> {dateRange}
          </button>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 16px',
            background: 'linear-gradient(135deg, #16a34a, #059669)', color: '#fff',
            border: 'none', borderRadius: '10px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem',
            boxShadow: '0 4px 12px rgba(22,163,74,0.3)'
          }}>
            <Download size={15} /> Export Laporan
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="finance-kpi-grid">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="finance-kpi-card">
            <div className="kpi-header">
              <div className="kpi-icon" style={{ background: kpi.bg }}>
                <kpi.icon size={20} color={kpi.color} />
              </div>
              <div className={`kpi-change ${kpi.trend}`}>
                {kpi.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {kpi.change}
              </div>
            </div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-label">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* LEFT COLUMN */}
        <div>
          {/* Revenue by Category */}
          <div className="finance-section">
            <h3><PieChart size={18} color="#7c3aed" /> Pendapatan per Kategori ({dateRange})</h3>
            <div className="revenue-bar-container">
              {revenueByCategory.map((item, idx) => (
                <div key={idx} className="revenue-bar-row">
                  <div className="revenue-bar-label">{item.category}</div>
                  <div className="revenue-bar-track">
                    <div className="revenue-bar-fill" style={{ width: `${item.percent}%`, background: item.color }} />
                  </div>
                  <div style={{ width: '80px', textAlign: 'right', fontWeight: 700, fontSize: '0.85rem', color: '#1a1a2e' }}>
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="finance-section">
            <h3><Crown size={18} color="#f59e0b" /> Performa Paket Langganan</h3>
            {subscriptionPlans.map((plan, idx) => (
              <div key={idx} className="sub-plan-card">
                <div className="sub-plan-icon" style={{ background: plan.bg }}>
                  <Crown size={24} color={plan.color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a2e' }}>{plan.name}</h4>
                    <span style={{ fontWeight: 800, color: plan.color }}>{plan.price}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                      <Users size={14} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />
                      {plan.activeUsers} pengguna aktif
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 700, background: '#dcfce7', padding: '2px 8px', borderRadius: '10px' }}>
                      {plan.growth}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Recent Transactions */}
          <div className="finance-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}><DollarSign size={18} color="#16a34a" /> Transaksi Terbaru</h3>
              <button style={{ background: 'none', border: 'none', color: '#6c63ff', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>Lihat Semua</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {recentTransactions.map((trx, idx) => (
                <div key={idx} className="transaction-row">
                  <div className="transaction-icon" style={{ background: trx.iconBg }}>
                    {trx.status === 'sukses' ? <CheckCircle size={18} color={trx.iconColor} /> : 
                     trx.status === 'gagal' ? <AlertCircle size={18} color={trx.iconColor} /> : 
                     <Clock size={18} color={trx.iconColor} />}
                  </div>
                  <div className="transaction-info">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div className="transaction-name">{trx.user}</div>
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: trx.status === 'sukses' ? '#16a34a' : '#1a1a2e' }}>{trx.amount}</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                      <div className="transaction-sub">{trx.id} · {trx.plan}</div>
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{trx.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Temporary Lucide icon fallbacks since we used some new ones
const CheckCircle = ({ size, color }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const AlertCircle = ({ size, color }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
const Clock = ({ size, color }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
