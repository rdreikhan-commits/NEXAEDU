'use client';

import { Lightbulb } from 'lucide-react';
import '../DashboardPage.css';

export default function InsightsPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Lightbulb size={28} color="var(--accent-color)" />
        AI Insights
      </div>
      <div className="dashboard-grid" style={{ marginTop: '30px', gridTemplateColumns: '1fr' }}>
        <div className="panel-glass">
          <h3>Prediksi Kinerja Akademik</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>
            Berdasarkan 48 jam waktu belajar terakhir, diprediksi Anda akan mendapatkan peningkatan pemahaman 22% jika fokus pada simulasi visual.
          </p>
        </div>
      </div>
    </div>
  );
}
