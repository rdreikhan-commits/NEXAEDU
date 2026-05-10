'use client';

import { Users, Search, Edit2, Trash2 } from 'lucide-react';
import '../../dashboard/DashboardPage.css';

export default function AdminUsersPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Users size={28} color="#ff4d4d" />
        User Management
      </div>
      
      <div className="panel-glass" style={{ marginTop: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div className="input-group" style={{ margin: 0, width: '300px' }}>
            <div style={{ position: 'relative' }}>
              <input type="text" className="auth-input" placeholder="Search by name or email..." style={{ padding: '8px 15px 8px 35px' }} />
              <Search className="input-icon" size={16} style={{ bottom: '10px' }} />
            </div>
          </div>
          <button className="btn-primary" style={{ background: 'linear-gradient(135deg, #ff4d4d, #b30000)', padding: '8px 15px', fontSize: '0.9rem' }}>+ Add New User</button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '15px 10px' }}>Student Name</th>
              <th style={{ padding: '15px 10px' }}>Email</th>
              <th style={{ padding: '15px 10px' }}>DNA Profile</th>
              <th style={{ padding: '15px 10px' }}>Status</th>
              <th style={{ padding: '15px 10px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '15px 10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'url("https://i.pravatar.cc/150?img=11") center/cover' }}></div>
                Alex Carter
              </td>
              <td style={{ padding: '15px 10px', color: 'var(--text-secondary)' }}>alex@nexa.edu</td>
              <td style={{ padding: '15px 10px' }}><span style={{ background: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem' }}>Visual/Tech</span></td>
              <td style={{ padding: '15px 10px' }}><span style={{ color: '#00ff64', fontSize: '0.9rem' }}>Active</span></td>
              <td style={{ padding: '15px 10px' }}>
                <button style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', marginRight: '10px' }}><Edit2 size={16} /></button>
                <button style={{ background: 'transparent', border: 'none', color: '#ff4d4d', cursor: 'pointer' }}><Trash2 size={16} /></button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '15px 10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'url("https://i.pravatar.cc/150?img=5") center/cover' }}></div>
                Sarah Jenkins
              </td>
              <td style={{ padding: '15px 10px', color: 'var(--text-secondary)' }}>sarah@nexa.edu</td>
              <td style={{ padding: '15px 10px' }}><span style={{ background: 'rgba(255, 170, 0, 0.1)', color: '#ffaa00', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem' }}>Audio/Arts</span></td>
              <td style={{ padding: '15px 10px' }}><span style={{ color: '#00ff64', fontSize: '0.9rem' }}>Active</span></td>
              <td style={{ padding: '15px 10px' }}>
                <button style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', marginRight: '10px' }}><Edit2 size={16} /></button>
                <button style={{ background: 'transparent', border: 'none', color: '#ff4d4d', cursor: 'pointer' }}><Trash2 size={16} /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
