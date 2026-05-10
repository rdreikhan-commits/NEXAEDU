'use client';

import { Database, Terminal } from 'lucide-react';
import '../../dashboard/DashboardPage.css';

export default function AdminDatabasePage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Database size={28} color="#ff4d4d" />
        Live Database Logs
      </div>
      
      <div className="panel-glass" style={{ marginTop: '30px', flex: 1, display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '15px 20px', background: 'rgba(0,0,0,0.5)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Terminal size={18} color="#ff4d4d" />
          <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#ff4d4d' }}>nexa-cluster-01 / logs</span>
        </div>
        
        <div style={{ flex: 1, padding: '20px', background: '#0a0a0f', overflowY: 'auto', fontFamily: 'monospace', fontSize: '0.85rem', color: '#00ff64', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p>[10:45:01] <span style={{ color: '#fff' }}>INFO:</span> Connection established to Neural DB shard-4</p>
          <p>[10:45:03] <span style={{ color: '#ff4d4d' }}>WARN:</span> Rate limit approaching for Gemini API endpoint</p>
          <p>[10:45:05] <span style={{ color: '#fff' }}>INFO:</span> Query executed: SELECT * FROM users WHERE active=true (1432 rows)</p>
          <p>[10:46:12] <span style={{ color: '#fff' }}>INFO:</span> Syncing Learning DNA for user_id: 88472...</p>
          <p>[10:46:13] <span style={{ color: '#fff' }}>INFO:</span> DNA Sync complete. Payload: {`{visual: 92, auditory: 45}`}</p>
          <p>[10:47:00] <span style={{ color: '#00e5ff' }}>EVENT:</span> Automated backup initiated.</p>
          <p>[10:47:15] <span style={{ color: '#00e5ff' }}>EVENT:</span> Backup successfully stored in Cold Storage B.</p>
          <p>[10:48:22] <span style={{ color: '#fff' }}>INFO:</span> Admin session created. Token generated.</p>
        </div>
      </div>
    </div>
  );
}
