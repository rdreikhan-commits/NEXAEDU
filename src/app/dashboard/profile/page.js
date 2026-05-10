'use client';

import { User, Mail, Phone, MapPin, Award, BookOpen, Clock, Shield, Star, Edit3, Settings, TrendingUp } from 'lucide-react';
import '../DashboardPage.css';

export default function ProfilePage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease', paddingBottom: '40px' }}>
      <div className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <User size={28} color="var(--accent-color)" />
        Profil Mahasiswa
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
        
        {/* Top Header Card */}
        <div className="panel-glass" style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #6c63ff, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 25px rgba(108, 99, 255, 0.4)' }}>
            <span style={{ fontSize: '3rem', color: '#fff', fontWeight: 800 }}>AC</span>
          </div>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#1a1a2e', marginBottom: '5px' }}>Alex Carter</h2>
                <p style={{ color: '#6c63ff', fontWeight: 600, fontSize: '1rem', marginBottom: '15px' }}>Teknik Informatika · Semester 3</p>
              </div>
              <button style={{ padding: '8px 16px', background: '#f5f6fa', border: '1px solid #e5e7eb', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 600, color: '#374151' }}>
                <Edit3 size={16} /> Edit Profil
              </button>
            </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', color: '#6b7280', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Mail size={16} /> alex.carter@nexa.edu</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Phone size={16} /> +62 812-3456-7890</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> Jakarta, Indonesia</div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          
          {/* Stats */}
          <div className="panel-glass">
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', color: '#1a1a2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <TrendingUp size={20} color="#6c63ff" /> Statistik Pembelajaran
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={{ padding: '15px', background: '#f5f6fa', borderRadius: '12px', border: '1px solid #f0f0f8' }}>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '5px' }}>Total Jam Belajar</p>
                <h4 style={{ fontSize: '1.4rem', color: '#1a1a2e' }}>142 <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Jam</span></h4>
              </div>
              <div style={{ padding: '15px', background: '#f5f6fa', borderRadius: '12px', border: '1px solid #f0f0f8' }}>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '5px' }}>Modul Diselesaikan</p>
                <h4 style={{ fontSize: '1.4rem', color: '#1a1a2e' }}>48 <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Modul</span></h4>
              </div>
              <div style={{ padding: '15px', background: '#f5f6fa', borderRadius: '12px', border: '1px solid #f0f0f8' }}>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '5px' }}>Rata-rata Kuis</p>
                <h4 style={{ fontSize: '1.4rem', color: '#1a1a2e' }}>92<span style={{ fontSize: '0.9rem', fontWeight: 500 }}>/100</span></h4>
              </div>
              <div style={{ padding: '15px', background: '#f5f6fa', borderRadius: '12px', border: '1px solid #f0f0f8' }}>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '5px' }}>Peringkat Kelas</p>
                <h4 style={{ fontSize: '1.4rem', color: '#1a1a2e' }}>Top 5%</h4>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="panel-glass">
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', color: '#1a1a2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Award size={20} color="#16a34a" /> Sertifikat & Pencapaian
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                <div style={{ width: '45px', height: '45px', background: '#dcfce7', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={24} color="#16a34a" />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#1a1a2e' }}>Python Data Science Dasar</h4>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Selesai pada 12 Feb 2026</p>
                </div>
                <button style={{ padding: '6px 12px', background: '#f3f4f6', border: 'none', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>Unduh</button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                <div style={{ width: '45px', height: '45px', background: '#ede9fe', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={24} color="#7c3aed" />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#1a1a2e' }}>SQL Database Masterclass</h4>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Selesai pada 28 Mar 2026</p>
                </div>
                <button style={{ padding: '6px 12px', background: '#f3f4f6', border: 'none', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>Unduh</button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Settings */}
        <div className="panel-glass">
          <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', color: '#1a1a2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Settings size={20} color="#6b7280" /> Pengaturan Akun
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '16px', background: '#fafafa', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #f0f0f8' }}>
              <div>
                <p style={{ fontWeight: 600, color: '#1a1a2e' }}>Langganan Premium</p>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '4px' }}>Kelola siklus penagihan dan metode pembayaran Anda.</p>
              </div>
              <button style={{ padding: '8px 20px', background: '#fff', border: '1px solid #d1d5db', borderRadius: '20px', fontWeight: 600, cursor: 'pointer' }}>Kelola</button>
            </div>
            <div style={{ padding: '16px', background: '#fafafa', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #f0f0f8' }}>
              <div>
                <p style={{ fontWeight: 600, color: '#1a1a2e' }}>Keamanan & Sandi</p>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '4px' }}>Ubah kata sandi atau aktifkan autentikasi dua faktor (2FA).</p>
              </div>
              <button style={{ padding: '8px 20px', background: '#fff', border: '1px solid #d1d5db', borderRadius: '20px', fontWeight: 600, cursor: 'pointer' }}>Ubah</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
