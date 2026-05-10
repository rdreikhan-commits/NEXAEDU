'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  DollarSign, TrendingUp, CreditCard, Users, ArrowUpRight, ArrowDownRight,
  PieChart, Activity, Crown, Calendar, Download, Filter, CheckCircle, AlertCircle, Clock, X, FileText
} from 'lucide-react';
import './FinanceDashboard.css';

const kpis = [
  { label: 'Total Pendapatan', value: 'Rp 452.8M', icon: DollarSign, color: '#16a34a', bg: '#dcfce7', trend: 'up', change: '+12.5%' },
  { label: 'Pendapatan Bulan Ini', value: 'Rp 64.2M', icon: TrendingUp, color: '#7c3aed', bg: '#ede9fe', trend: 'up', change: '+8.2%' },
  { label: 'Langganan Premium Aktif', value: '1,420', icon: Crown, color: '#d97706', bg: '#fef3c7', trend: 'up', change: '+15.3%' },
  { label: 'Tingkat Churn', value: '2.4%', icon: Activity, color: '#ef4444', bg: '#fee2e2', trend: 'down', change: '-0.5%' },
];

const initialTransactions = [
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
  const pathname = usePathname() || '/finance';
  const isHome = pathname === '/finance';
  const isAnalytics = pathname.includes('/analytics');
  const isReports = pathname.includes('/reports');
  const isRevenue = pathname.includes('/revenue');
  const isSubscriptions = pathname.includes('/subscriptions');
  const isTransactions = pathname.includes('/transactions');
  
  const [dateRange, setDateRange] = useState('Bulan Ini');
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showModal, setShowModal] = useState({ type: null, data: null });

  const handleTransactionAction = (id, newStatus) => {
    setTransactions(transactions.map(t => {
      if (t.id === id) {
        return {
          ...t,
          status: newStatus,
          iconBg: newStatus === 'sukses' ? '#dcfce7' : '#fee2e2',
          iconColor: newStatus === 'sukses' ? '#16a34a' : '#ef4444'
        };
      }
      return t;
    }));
    setShowModal({ type: null, data: null });
  };

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
          <button onClick={() => setShowModal({ type: 'export' })} style={{
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
      {(isHome || isAnalytics || isRevenue) && (
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
      )}

      <div className={isHome ? "finance-main-grid" : ""} style={{ display: 'grid', gridTemplateColumns: isHome ? '1fr 1fr' : '1fr', gap: '20px' }}>
        {/* LEFT COLUMN */}
        {(isHome || isRevenue || isAnalytics || isSubscriptions) && (
          <div>
            {/* Revenue by Category */}
            {(isHome || isRevenue || isAnalytics) && (
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
            )}

            {/* Subscription Plans */}
            {(isHome || isSubscriptions) && (
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
            )}
          </div>
        )}

        {/* RIGHT COLUMN */}
        {(isHome || isTransactions || isReports) && (
          <div>
            {/* Recent Transactions */}
            <div className="finance-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}><DollarSign size={18} color="#16a34a" /> Transaksi Terbaru</h3>
              <button style={{ background: 'none', border: 'none', color: '#6c63ff', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>Lihat Semua</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {transactions.map((trx, idx) => (
                <div key={idx} className="transaction-row" style={{ cursor: trx.status === 'pending' ? 'pointer' : 'default' }} onClick={() => trx.status === 'pending' && setShowModal({ type: 'verify', data: trx })}>
                  <div className="transaction-icon" style={{ background: trx.iconBg }}>
                    {trx.status === 'sukses' ? <CheckCircle size={18} color={trx.iconColor} /> : 
                     trx.status === 'gagal' ? <AlertCircle size={18} color={trx.iconColor} /> : 
                     <Clock size={18} color={trx.iconColor} />}
                  </div>
                  <div className="transaction-info">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div className="transaction-name">
                        {trx.user}
                        {trx.status === 'pending' && <span style={{ marginLeft: '8px', fontSize: '0.65rem', background: '#fef3c7', color: '#d97706', padding: '2px 6px', borderRadius: '8px' }}>Perlu Verifikasi</span>}
                      </div>
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
        )}
      </div>

      {/* MODALS */}
      {showModal.type && (
        <div onClick={() => setShowModal({ type: null, data: null })} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#fff', borderRadius: '20px', padding: '30px', width: '90%', maxWidth: '450px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#1a1a2e' }}>
                {showModal.type === 'export' ? 'Export Laporan Keuangan' : 'Verifikasi Transaksi'}
              </h3>
              <button onClick={() => setShowModal({ type: null, data: null })} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}><X size={20}/></button>
            </div>

            {showModal.type === 'export' && (
              <div style={{ textAlign: 'center' }}>
                <FileText size={48} color="#16a34a" style={{ marginBottom: '15px' }} />
                <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '20px' }}>Pilih format laporan keuangan untuk diunduh:</p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <button onClick={() => { alert('Laporan Excel berhasil diunduh!'); setShowModal({ type: null }); }} style={{ padding: '10px 20px', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>.XLSX (Excel)</button>
                  <button onClick={() => { alert('Laporan PDF berhasil diunduh!'); setShowModal({ type: null }); }} style={{ padding: '10px 20px', background: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>.PDF</button>
                </div>
              </div>
            )}

            {showModal.type === 'verify' && (
              <div>
                <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '12px', marginBottom: '20px' }}>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>ID Transaksi: <strong>{showModal.data?.id}</strong></p>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Pengguna: <strong>{showModal.data?.user}</strong></p>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Item: <strong>{showModal.data?.plan}</strong></p>
                  <p style={{ fontSize: '1.2rem', color: '#1a1a2e', fontWeight: 800, marginTop: '10px' }}>{showModal.data?.amount}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => handleTransactionAction(showModal.data.id, 'gagal')} style={{ flex: 1, padding: '12px', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>Tolak Transaksi</button>
                  <button onClick={() => handleTransactionAction(showModal.data.id, 'sukses')} style={{ flex: 1, padding: '12px', background: '#dcfce7', color: '#16a34a', border: 'none', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>Terima Pembayaran</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
