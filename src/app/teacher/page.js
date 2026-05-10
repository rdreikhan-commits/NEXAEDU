'use client';

import { useState } from 'react';
import {
  Users, BookOpen, Video, MessageSquare, Star, TrendingUp,
  Clock, CheckCircle, AlertCircle, Calendar, Play, PlusCircle,
  Crown, Award, X, Check
} from 'lucide-react';
import './TeacherDashboard.css';

const stats = [
  { label: 'Total Mahasiswa', value: '1,248', icon: Users, color: '#7c3aed', bg: '#ede9fe', change: '+12 bulan ini' },
  { label: 'Mata Kuliah Aktif', value: '6', icon: BookOpen, color: '#2563eb', bg: '#dbeafe', change: '3 sedang berjalan' },
  { label: 'Sesi Zoom Minggu Ini', value: '4', icon: Video, color: '#16a34a', bg: '#dcfce7', change: '1 besok pukul 09:00' },
  { label: 'Konsultasi Pending', value: '8', icon: MessageSquare, color: '#d97706', bg: '#fef3c7', change: '3 urgent' },
];

const recentStudents = [
  { name: 'Budi Prasetyo', course: 'Teknik Informatika · Semester 3', progress: 72, avatar: '11', status: 'aktif' },
  { name: 'Siti Rahayu', course: 'AI & Machine Learning · Semester 4', progress: 91, avatar: '12', status: 'aktif' },
  { name: 'Andi Firmansyah', course: 'Keamanan Siber · Semester 2', progress: 45, avatar: '13', status: 'perlu perhatian' },
  { name: 'Rina Kusumawati', course: 'Data Analytics · Semester 3', progress: 88, avatar: '14', status: 'aktif' },
  { name: 'Dimas Arya', course: 'Cloud & DevOps · Semester 5', progress: 33, avatar: '15', status: 'perlu perhatian' },
];

const initialConsultRequests = [
  { id: 1, name: 'Budi Prasetyo', topic: 'Kesulitan memahami Backpropagation di Neural Network', time: '10 menit lalu', urgent: true },
  { id: 2, name: 'Rina Kusumawati', topic: 'Request review skripsi bab 3', time: '1 jam lalu', urgent: false },
  { id: 3, name: 'Siti Rahayu', topic: 'Tanya soal ujian midterm', time: '2 jam lalu', urgent: false },
];

const initialZoomSessions = [
  { id: 1, title: 'Machine Learning Fundamentals - Sesi 8', date: 'Besok, 09:00 WIB', students: 42, status: 'upcoming' },
  { id: 2, title: 'Review Proyek Akhir AI/ML', date: 'Senin, 14:00 WIB', students: 18, status: 'upcoming' },
  { id: 3, title: 'Tanya Jawab Sistem Basis Data', date: 'Rabu, 10:00 WIB', students: 35, status: 'upcoming' },
];

const courses = [
  { name: 'Machine Learning Fundamentals', students: 214, progress: 68, rating: 4.9, premium: true },
  { name: 'Basis Data & SQL Advanced', students: 187, progress: 45, rating: 4.8, premium: false },
  { name: 'Python untuk Data Science', students: 302, progress: 81, rating: 4.9, premium: false },
  { name: 'Deep Learning & Neural Networks', students: 156, progress: 30, rating: 4.7, premium: true },
];

export default function TeacherPage() {
  const [activeTab, setActiveTab] = useState('beranda');
  
  // Interactive States
  const [consults, setConsults] = useState(initialConsultRequests);
  const [zooms, setZooms] = useState(initialZoomSessions);
  const [showModal, setShowModal] = useState({ type: null, data: null });

  const handleReplyConsult = (id) => {
    alert("Pesan balasan terkirim!");
    setConsults(consults.filter(c => c.id !== id));
  };

  const handleStartZoom = (id) => {
    setShowModal({ type: 'zoom', data: zooms.find(z => z.id === id) });
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      {/* Welcome */}
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a1a2e' }}>Selamat datang, Dr. Sarah 👋</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Sabtu, 10 Mei 2026 · 1.248 mahasiswa aktif di kelas Anda</p>
        </div>
        <button onClick={() => setShowModal({ type: 'add_module', data: null })} style={{
          display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 22px',
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#fff',
          border: 'none', borderRadius: '12px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem',
          boxShadow: '0 4px 15px rgba(124,58,237,0.35)'
        }}>
          <PlusCircle size={16} /> Tambah Materi Baru
        </button>
      </div>

      {/* Stat Cards */}
      <div className="teacher-stat-grid">
        {stats.map(s => (
          <div key={s.label} className="teacher-stat-card">
            <div className="teacher-stat-icon" style={{ background: s.bg }}>
              <s.icon size={20} color={s.color} />
            </div>
            <div className="teacher-stat-value">{s.value}</div>
            <div className="teacher-stat-label">{s.label}</div>
            <div style={{ fontSize: '0.75rem', color: s.color, fontWeight: 600 }}>{s.change}</div>
          </div>
        ))}
      </div>

      <div className="teacher-main-grid">
        {/* LEFT */}
        <div>
          {/* Mata Kuliah Saya */}
          <div className="teacher-section">
            <h3><BookOpen size={18} color="#7c3aed" /> Mata Kuliah Saya</h3>
            {courses.map(c => (
              <div key={c.name} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1a1a2e' }}>{c.name}</span>
                    {c.premium && (
                      <span style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: '#fff', fontSize: '0.65rem', padding: '2px 7px', borderRadius: '8px', fontWeight: 700 }}>
                        <Crown size={8} style={{ marginRight: '3px' }} />PREMIUM
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{c.students} siswa · ⭐ {c.rating}</span>
                </div>
                <div style={{ background: '#f0f0f8', borderRadius: '8px', height: '8px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${c.progress}%`, height: '100%', borderRadius: '8px',
                    background: 'linear-gradient(90deg, #7c3aed, #ec4899)', transition: 'width 1s ease'
                  }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Progress rata-rata mahasiswa</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7c3aed' }}>{c.progress}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Zoom Sessions */}
          <div className="teacher-section">
            <h3><Video size={18} color="#2563eb" /> Zoom Session Mendatang</h3>
            {zooms.map(z => (
              <div key={z.title} className="zoom-card">
                <div className="zoom-card-icon">
                  <Video size={20} color="#fff" />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a2e' }}>{z.title}</p>
                  <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '2px' }}>
                    <Calendar size={12} style={{ marginRight: '4px', display: 'inline' }} />{z.date} · {z.students} peserta
                  </p>
                </div>
                <button onClick={() => handleStartZoom(z.id)} style={{
                  padding: '7px 16px', background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                  color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer',
                  fontSize: '0.8rem', fontWeight: 700
                }}>
                  Mulai
                </button>
              </div>
            ))}
            <button onClick={() => setShowModal({ type: 'schedule_zoom', data: null })} style={{
              width: '100%', padding: '10px', borderRadius: '10px', marginTop: '8px',
              border: '1.5px dashed #c4b5fd', background: 'transparent', cursor: 'pointer',
              color: '#7c3aed', fontWeight: 600, fontSize: '0.85rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
            }}>
              <PlusCircle size={15} /> Jadwalkan Sesi Baru
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          {/* Konsultasi */}
          <div className="teacher-section">
            <h3><MessageSquare size={18} color="#d97706" /> Permintaan Konsultasi</h3>
            {consults.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280', fontSize: '0.9rem' }}>
                <CheckCircle size={24} color="#16a34a" style={{ marginBottom: '10px' }} />
                <p>Semua konsultasi telah dibalas!</p>
              </div>
            ) : consults.map(c => (
              <div key={c.id} className="consult-request">
                <img src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 20 + 10)}`} alt="" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1a1a2e' }}>{c.name}</span>
                    {c.urgent && <span style={{ background: '#fce7f3', color: '#db2777', fontSize: '0.65rem', padding: '1px 7px', borderRadius: '8px', fontWeight: 700 }}>URGENT</span>}
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#6b7280', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.topic}</p>
                  <p style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: '2px' }}>{c.time}</p>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button onClick={() => setShowModal({ type: 'reply_consult', data: c })} style={{
                    padding: '6px 10px', background: '#dcfce7', color: '#16a34a',
                    border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem'
                  }}>Balas</button>
                </div>
              </div>
            ))}
          </div>

          {/* Mahasiswa Perlu Perhatian */}
          <div className="teacher-section">
            <h3><AlertCircle size={18} color="#ef4444" /> Mahasiswa Perlu Perhatian</h3>
            {recentStudents.filter(s => s.status === 'perlu perhatian').map(s => (
              <div key={s.name} className="student-row">
                <img src={`https://i.pravatar.cc/150?img=${s.avatar}`} alt="" className="student-avatar" />
                <div className="student-info">
                  <div className="student-name">{s.name}</div>
                  <div className="student-sub">{s.course}</div>
                  <div style={{ marginTop: '4px', background: '#f0f0f8', borderRadius: '4px', height: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${s.progress}%`, height: '100%', background: s.progress < 50 ? '#ef4444' : '#7c3aed', borderRadius: '4px' }} />
                  </div>
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ef4444' }}>{s.progress}%</span>
              </div>
            ))}

            <h3 style={{ marginTop: '20px' }}><CheckCircle size={18} color="#16a34a" /> Progress Mahasiswa Aktif</h3>
            {recentStudents.filter(s => s.status === 'aktif').map(s => (
              <div key={s.name} className="student-row">
                <img src={`https://i.pravatar.cc/150?img=${s.avatar}`} alt="" className="student-avatar" />
                <div className="student-info">
                  <div className="student-name">{s.name}</div>
                  <div className="student-sub">{s.course}</div>
                  <div style={{ marginTop: '4px', background: '#f0f0f8', borderRadius: '4px', height: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${s.progress}%`, height: '100%', background: '#16a34a', borderRadius: '4px' }} />
                  </div>
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#16a34a' }}>{s.progress}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODALS */}
      {showModal.type && (
        <div onClick={() => setShowModal({ type: null, data: null })} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#fff', borderRadius: '20px', padding: '30px', width: '90%', maxWidth: '500px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#1a1a2e' }}>
                {showModal.type === 'add_module' ? 'Tambah Materi Baru' : 
                 showModal.type === 'zoom' ? 'Mulai Zoom Session' : 
                 showModal.type === 'schedule_zoom' ? 'Jadwalkan Zoom Baru' :
                 'Balas Konsultasi'}
              </h3>
              <button onClick={() => setShowModal({ type: null, data: null })} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}><X size={20}/></button>
            </div>

            {showModal.type === 'add_module' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" placeholder="Judul Modul" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', width: '100%' }} />
                <input type="text" placeholder="URL Video YouTube" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', width: '100%' }} />
                <button onClick={() => { alert('Materi berhasil ditambahkan!'); setShowModal({ type: null, data: null }); }} style={{ padding: '12px', background: '#7c3aed', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>Simpan Materi</button>
              </div>
            )}

            {showModal.type === 'zoom' && (
              <div style={{ textAlign: 'center' }}>
                <Video size={48} color="#2563eb" style={{ marginBottom: '15px' }} />
                <h4>{showModal.data?.title}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '20px' }}>Kamera dan mikrofon siap. Anda akan memulai sesi dengan {showModal.data?.students} peserta.</p>
                <button onClick={() => { alert('Membuka aplikasi Zoom...'); setShowModal({ type: null, data: null }); }} style={{ padding: '12px 24px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '30px', fontWeight: 700, cursor: 'pointer' }}>Buka Zoom</button>
              </div>
            )}

            {showModal.type === 'schedule_zoom' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" placeholder="Topik Sesi" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', width: '100%' }} />
                <input type="datetime-local" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', width: '100%' }} />
                <button onClick={() => { alert('Sesi Zoom berhasil dijadwalkan!'); setShowModal({ type: null, data: null }); }} style={{ padding: '12px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>Buat Undangan</button>
              </div>
            )}

            {showModal.type === 'reply_consult' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ background: '#f5f6fa', padding: '15px', borderRadius: '8px', fontSize: '0.9rem' }}>
                  <strong>{showModal.data?.name}:</strong> {showModal.data?.topic}
                </div>
                <textarea rows={4} placeholder="Ketik balasan Anda di sini..." style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', width: '100%', resize: 'vertical' }}></textarea>
                <button onClick={() => { handleReplyConsult(showModal.data?.id); setShowModal({ type: null, data: null }); }} style={{ padding: '12px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>Kirim Balasan</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
