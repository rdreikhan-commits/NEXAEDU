'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Users, Server, BrainCircuit, Activity, RefreshCw, HardDrive, Shield, X, CheckCircle } from 'lucide-react';
import '../dashboard/DashboardPage.css';

export default function AdminDashboardPage() {
  const pathname = usePathname() || '/admin';
  const isHome = pathname === '/admin';
  const isDatabase = pathname.includes('/database');
  const isAI = pathname.includes('/ai-models');
  const isUsers = pathname.includes('/users');

  const [showModal, setShowModal] = useState({ type: null, title: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSystemAction = (type, title) => {
    setShowModal({ type, title });
  };

  const executeAction = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert(`✅ ${showModal.title} berhasil dieksekusi.`);
      setShowModal({ type: null, title: '' });
    }, 1500);
  };
  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      {(isHome || isDatabase) && (
        <div className="panel-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Server size={28} color="#ff4d4d" />
            System Network Overview
          </div>
          <button onClick={() => handleSystemAction('restart', 'Restart Main Server')} style={{ padding: '10px 20px', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RefreshCw size={16} /> Restart Node
          </button>
        </div>
      )}
      
      {/* Quick Controls */}
      {(isHome || isDatabase) && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '24px' }}>
          <button onClick={() => handleSystemAction('sync', 'Sinkronisasi Database')} style={{ padding: '15px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600, color: '#374151', justifyContent: 'center' }}>
            <HardDrive size={18} color="#2563eb" /> Force Sync DB
          </button>
          <button onClick={() => handleSystemAction('cache', 'Bersihkan Cache Sistem')} style={{ padding: '15px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600, color: '#374151', justifyContent: 'center' }}>
            <Activity size={18} color="#d97706" /> Clear System Cache
          </button>
          <button onClick={() => handleSystemAction('security', 'Pembaruan Firewall & Security')} style={{ padding: '15px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600, color: '#374151', justifyContent: 'center' }}>
            <Shield size={18} color="#16a34a" /> Update Firewall
          </button>
        </div>
      )}

      <div className="dashboard-grid" style={{ marginTop: '30px' }}>
        <div className="panel-glass">
          <h3 style={{ marginBottom: '20px' }}>Real-time Telemetry</h3>
          <div className="metrics-grid-2">
            {(isHome || isUsers) && (
              <div className="metric-box" style={{ borderColor: '#fecaca', background: '#fff' }}>
                <h4 style={{ color: '#ef4444', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={16}/> Active Students</h4>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a1a2e' }}>1,432</p>
                <p style={{ color: '#16a34a', fontSize: '0.85rem' }}>+12% this week</p>
              </div>
            )}
            {(isHome || isAI) && (
              <div className="metric-box" style={{ borderColor: '#fecaca', background: '#fff' }}>
                <h4 style={{ color: '#ef4444', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><BrainCircuit size={16}/> AI Processing Load</h4>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a1a2e' }}>42%</p>
                <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>Optimal cluster allocation</p>
              </div>
            )}
            {(isHome || isDatabase) && (
              <>
                <div className="metric-box" style={{ borderColor: '#fecaca', background: '#fff' }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><Activity size={16}/> API Health</h4>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a1a2e' }}>99.9%</p>
                  <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>0 critical failures</p>
                </div>
                <div className="metric-box" style={{ borderColor: '#fecaca', background: '#fff' }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><Server size={16}/> Active Nodes</h4>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a1a2e' }}>24/24</p>
                  <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>All regions functional</p>
                </div>
              </>
            )}
          </div>
        </div>

        {(isHome || isDatabase || isUsers) && (
          <div className="panel-glass">
            <h3 style={{ marginBottom: '20px', color: '#1a1a2e' }}>Recent Security Logs</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', paddingBottom: '15px', borderBottom: '1px solid #f0f0f8' }}>
                <div style={{ color: '#16a34a', fontSize: '0.8rem', minWidth: '80px', fontWeight: 600 }}>10:42 AM</div>
                <div>
                  <strong style={{ color: '#1a1a2e' }}>Admin Login Successful</strong>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>IP: 192.168.1.44 (Authorized)</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', paddingBottom: '15px', borderBottom: '1px solid #f0f0f8' }}>
                <div style={{ color: '#2563eb', fontSize: '0.8rem', minWidth: '80px', fontWeight: 600 }}>09:15 AM</div>
                <div>
                  <strong style={{ color: '#1a1a2e' }}>Database Sync Complete</strong>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Synced 1.4k student DNA profiles.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ color: '#d97706', fontSize: '0.8rem', minWidth: '80px', fontWeight: 600 }}>02:30 AM</div>
                <div>
                  <strong style={{ color: '#1a1a2e' }}>High Traffic Alert</strong>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Cluster 3 auto-scaled to meet demand.</p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* ADMIN MODAL */}
      {showModal.type && (
        <div onClick={() => setShowModal({ type: null, title: '' })} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#fff', borderRadius: '16px', padding: '30px', width: '90%', maxWidth: '400px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)', textAlign: 'center'
          }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
              <button onClick={() => setShowModal({ type: null, title: '' })} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}><X size={20}/></button>
            </div>
            
            <div style={{ width: '70px', height: '70px', background: '#f8fafc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: '2px solid #e2e8f0' }}>
              <Server size={32} color="#475569" />
            </div>
            
            <h3 style={{ fontSize: '1.2rem', color: '#1a1a2e', marginBottom: '10px' }}>{showModal.title}</h3>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5 }}>
              Apakah Anda yakin ingin menjalankan aksi sistem ini? Pastikan tidak ada proses antrian yang tertunda.
            </p>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setShowModal({ type: null, title: '' })} style={{ flex: 1, padding: '12px', background: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '10px', fontWeight: 600, cursor: 'pointer' }}>Batal</button>
              <button onClick={executeAction} disabled={isProcessing} style={{ flex: 1, padding: '12px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 700, cursor: isProcessing ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', opacity: isProcessing ? 0.7 : 1 }}>
                {isProcessing ? 'Eksekusi...' : 'Jalankan'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
