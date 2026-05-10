'use client';

import { Users, Server, BrainCircuit, Activity } from 'lucide-react';
import '../dashboard/DashboardPage.css';

export default function AdminDashboardPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Server size={28} color="#ff4d4d" />
        System Network Overview
      </div>
      
      <div className="dashboard-grid" style={{ marginTop: '30px' }}>
        <div className="panel-glass">
          <h3 style={{ marginBottom: '20px' }}>Real-time Telemetry</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="metric-box" style={{ borderColor: '#fecaca', background: '#fff' }}>
              <h4 style={{ color: '#ef4444', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={16}/> Active Students</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a1a2e' }}>1,432</p>
              <p style={{ color: '#16a34a', fontSize: '0.85rem' }}>+12% this week</p>
            </div>
            <div className="metric-box" style={{ borderColor: '#fecaca', background: '#fff' }}>
              <h4 style={{ color: '#ef4444', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><BrainCircuit size={16}/> AI Processing Load</h4>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a1a2e' }}>42%</p>
              <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>Optimal cluster allocation</p>
            </div>
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
          </div>
        </div>

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
      </div>
    </div>
  );
}
