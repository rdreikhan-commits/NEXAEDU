'use client';

import { BookOpen } from 'lucide-react';
import '../DashboardPage.css';

export default function CurriculumPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <BookOpen size={28} color="var(--accent-color)" />
        Mata Pelajaran & Kurikulum
      </div>
      <div className="dashboard-grid" style={{ marginTop: '30px', gridTemplateColumns: '1fr' }}>
        <div className="panel-glass">
          <h3>Kurikulum Sedang Dalam Penyesuaian AI</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>
            NexaEdu sedang menyusun ulang silabus Anda berdasarkan hasil analisis DNA Belajar terakhir. Silakan cek kembali nanti.
          </p>
        </div>
      </div>
    </div>
  );
}
