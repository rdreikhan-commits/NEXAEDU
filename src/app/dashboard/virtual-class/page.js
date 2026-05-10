'use client';

import { MonitorPlay, Users, Video, Mic, Share2, Settings, MessageSquare } from 'lucide-react';
import '../DashboardPage.css';

export default function VirtualClassPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <MonitorPlay size={28} color="var(--accent-color)" />
        Immersive Virtual Classroom
      </div>
      
      <div className="dashboard-grid" style={{ marginTop: '20px', flex: 1, gridTemplateColumns: '3fr 1fr' }}>
        {/* Main Video Area */}
        <div className="panel-glass" style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
          <div style={{ flex: 1, background: '#000', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,0,0,0.5)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '8px', height: '8px', background: '#ff4d4d', borderRadius: '50%', animation: 'pulseGlow 2s infinite' }}></div>
              LIVE: Quantum Physics Session
            </div>
            
            {/* Hologram Representation */}
            <div style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,229,255,0.2) 0%, transparent 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px dashed rgba(0, 229, 255, 0.3)' }}>
              <MonitorPlay size={64} color="var(--accent-color)" opacity={0.8} />
            </div>
          </div>
          
          <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', gap: '20px', background: 'rgba(25, 25, 30, 0.9)' }}>
            <button className="btn-secondary" style={{ padding: '10px', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mic size={20} /></button>
            <button className="btn-secondary" style={{ padding: '10px', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Video size={20} /></button>
            <button className="btn-primary" style={{ padding: '10px', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Share2 size={20} /></button>
            <button className="btn-secondary" style={{ padding: '10px', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff4d4d', borderColor: 'rgba(255, 77, 77, 0.3)' }}><MonitorPlay size={20} /></button>
          </div>
        </div>

        {/* Sidebar Chat & Participants */}
        <div className="panel-glass" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Users size={18} color="var(--accent-color)" /> Participants (24)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--accent-color)' }}></div>
                <span style={{ fontSize: '0.9rem' }}>Prof. Sarah (Host)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'url("https://i.pravatar.cc/150?img=11") center/cover' }}></div>
                <span style={{ fontSize: '0.9rem' }}>Alex Carter (You)</span>
              </div>
            </div>
          </div>
          
          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MessageSquare size={18} color="var(--accent-color)" /> Class Chat
            </h3>
            <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Welcome to the session.</p>
              <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                <input type="text" placeholder="Type a message..." style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px', color: '#fff', fontSize: '0.85rem' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
