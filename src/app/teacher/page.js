'use client';

import { usePathname } from 'next/navigation';
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
  const pathname = usePathname() || '/teacher';
  const isHome = pathname === '/teacher';
  const isCourses = pathname.includes('/courses');
  const isStudents = pathname.includes('/students');
  const isConsults = pathname.includes('/consultations');
  const isZoom = pathname.includes('/zoom');
  const isGrades = pathname.includes('/grades');
  const isReports = pathname.includes('/reports');
  
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
      {isHome && (
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
      )}

      <div className={isHome ? "teacher-main-grid" : ""} style={{ display: 'grid', gridTemplateColumns: isHome ? '1.4fr 1fr' : '1fr', gap: '20px' }}>
        {/* LEFT */}
        {(isHome || isCourses || isZoom) && (
          <div>
            {/* Mata Kuliah Saya */}
            {(isHome || isCourses) && (
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
            )}

            {/* Zoom Sessions */}
            {(isHome || isZoom) && (
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
              </button>
            </div>
            )}
          </div>
        )}

        {/* RIGHT */}
        {(isHome || isConsults || isStudents || isCourses) && (
          <div>
            {/* Konsultasi */}
            {(isHome || isConsults) && (
              <div className="teacher-section">
            <h3><MessageSquare size={18} color="#d97706" /> Permintaan Konsultasi</h3>
            {consults.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280', fontSize: '0.9rem' }}>
                <CheckCircle size={24} color="#16a34a" style={{ marginBottom: '10px' }} />
                <p>Semua konsultasi telah dibalas!</p>
              </div>
            ) : consults.map(c => (
              <div key={c.id} className="consult-request">
                <img src={`https://i.pravatar.cc/150?img=${10 + (c.id % 20)}`} alt="" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
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
          )}

          {/* Mahasiswa Perlu Perhatian */}
          {(isHome || isStudents) && (
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
          )}

          {/* Manajemen Modul & Kuis */}
          {(isHome || isCourses) && (
          <div className="teacher-section">
            <h3><BookOpen size={18} color="#ec4899" /> Kelola Modul & Kuis Terpadu</h3>
            <div style={{ padding: '16px', background: '#fdf2f8', border: '1px dashed #fbcfe8', borderRadius: '12px', textAlign: 'center', marginBottom: '16px' }}>
              <p style={{ fontSize: '0.85rem', color: '#831843', marginBottom: '12px', lineHeight: 1.5 }}>Upload materi PDF dan buat bank soal kuis baru untuk menguji pemahaman mahasiswa setelah menonton video.</p>
              <button onClick={() => setShowModal({ type: 'add_quiz', data: null })} style={{ padding: '10px 16px', background: '#db2777', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', margin: '0 auto' }}>
                <PlusCircle size={16} /> Buat Kuis Baru
              </button>
            </div>
            
            <div className="consult-request" style={{ padding: '12px', background: '#fff', border: '1px solid #f0f0f8', cursor: 'pointer' }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1a1a2e' }}>Kuis: Machine Learning Fundamentals</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>15 Soal Pilihan Ganda</p>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#16a34a', background: '#dcfce7', padding: '4px 8px', borderRadius: '8px' }}>Aktif</span>
            </div>
            <div className="consult-request" style={{ padding: '12px', background: '#fff', border: '1px solid #f0f0f8', cursor: 'pointer' }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1a1a2e' }}>Kuis: Struktur Data</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Draf · Belum ada soal</p>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#d97706', background: '#fef3c7', padding: '4px 8px', borderRadius: '8px' }}>Draf</span>
              </div>
            </div>
          )}
          </div>
        )}

        {/* Custom Grades View */}
        {isGrades && !isHome && (
          <div className="teacher-section" style={{ gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}><Star size={18} color="#f59e0b" /> Manajemen Nilai & Penilaian</h3>
              <button style={{ padding: '8px 16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Export CSV</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '24px' }}>
              <div style={{ background: '#fef3c7', padding: '15px', borderRadius: '10px', border: '1px solid #fde68a' }}>
                <p style={{ color: '#d97706', fontSize: '0.85rem', fontWeight: 600 }}>Rata-rata Kelas</p>
                <h4 style={{ fontSize: '1.8rem', color: '#b45309', margin: '5px 0' }}>82.5</h4>
              </div>
              <div style={{ background: '#dcfce7', padding: '15px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
                <p style={{ color: '#16a34a', fontSize: '0.85rem', fontWeight: 600 }}>Tingkat Kelulusan</p>
                <h4 style={{ fontSize: '1.8rem', color: '#15803d', margin: '5px 0' }}>94%</h4>
              </div>
              <div style={{ background: '#fee2e2', padding: '15px', borderRadius: '10px', border: '1px solid #fecaca' }}>
                <p style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 600 }}>Perlu Remedial</p>
                <h4 style={{ fontSize: '1.8rem', color: '#b91c1c', margin: '5px 0' }}>12 Siswa</h4>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b' }}>
                    <th style={{ padding: '12px 0' }}>Nama Mahasiswa</th>
                    <th style={{ padding: '12px 0' }}>Mata Kuliah</th>
                    <th style={{ padding: '12px 0' }}>Tugas</th>
                    <th style={{ padding: '12px 0' }}>Kuis</th>
                    <th style={{ padding: '12px 0' }}>Nilai Akhir</th>
                    <th style={{ padding: '12px 0' }}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {recentStudents.map((s, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '12px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={`https://i.pravatar.cc/150?img=${s.avatar}`} style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }} alt=""/>
                        <span style={{ fontWeight: 600, color: '#1e293b' }}>{s.name}</span>
                      </td>
                      <td style={{ padding: '12px 0', color: '#475569', fontSize: '0.85rem' }}>{s.course.split('·')[0]}</td>
                      <td style={{ padding: '12px 0', color: '#475569' }}>{Math.floor(s.progress * 0.9)}</td>
                      <td style={{ padding: '12px 0', color: '#475569' }}>{Math.floor(s.progress * 1.1 > 100 ? 100 : s.progress * 1.1)}</td>
                      <td style={{ padding: '12px 0' }}>
                        <span style={{ background: s.progress >= 70 ? '#dcfce7' : '#fee2e2', color: s.progress >= 70 ? '#16a34a' : '#ef4444', padding: '4px 8px', borderRadius: '6px', fontWeight: 700, fontSize: '0.8rem' }}>
                          {s.progress >= 85 ? 'A' : s.progress >= 70 ? 'B' : s.progress >= 50 ? 'C' : 'D'}
                        </span>
                      </td>
                      <td style={{ padding: '12px 0' }}>
                        <button style={{ color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>Edit Nilai</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Custom Reports View */}
        {isReports && !isHome && (
          <div className="teacher-section" style={{ gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}><TrendingUp size={18} color="#7c3aed" /> Laporan Kinerja Akademik</h3>
              <select style={{ padding: '8px 12px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff' }}><option>Semester Ganjil 2026</option></select>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                <h4 style={{ color: '#475569', marginBottom: '15px' }}>Distribusi Penilaian Anda (Feedback Mahasiswa)</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '12px' }}>
                  <div style={{ width: '45px', fontWeight: 700, color: '#1e293b', fontSize: '0.9rem' }}>5 Star</div>
                  <div style={{ flex: 1, height: '12px', background: '#e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{ width: '75%', height: '100%', background: '#f59e0b', borderRadius: '6px' }}></div>
                  </div>
                  <div style={{ width: '35px', color: '#64748b', fontSize: '0.85rem', textAlign: 'right' }}>75%</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '12px' }}>
                  <div style={{ width: '45px', fontWeight: 700, color: '#1e293b', fontSize: '0.9rem' }}>4 Star</div>
                  <div style={{ flex: 1, height: '12px', background: '#e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{ width: '20%', height: '100%', background: '#f59e0b', borderRadius: '6px' }}></div>
                  </div>
                  <div style={{ width: '35px', color: '#64748b', fontSize: '0.85rem', textAlign: 'right' }}>20%</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '45px', fontWeight: 700, color: '#1e293b', fontSize: '0.9rem' }}>3 Star</div>
                  <div style={{ flex: 1, height: '12px', background: '#e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{ width: '5%', height: '100%', background: '#f59e0b', borderRadius: '6px' }}></div>
                  </div>
                  <div style={{ width: '35px', color: '#64748b', fontSize: '0.85rem', textAlign: 'right' }}>5%</div>
                </div>
              </div>
              
              <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                <h4 style={{ color: '#475569', marginBottom: '15px' }}>Rangkuman Analitik</h4>
                <p style={{ color: '#334155', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  Berdasarkan data aktivitas semester ini, tingkat partisipasi mahasiswa dalam kelas Anda naik <strong>12%</strong>. Materi <span style={{ color: '#7c3aed', fontWeight: 600 }}>Python untuk Data Science</span> memiliki tingkat retensi paling tinggi (81%). Kami menyarankan Anda untuk memperbanyak sesi praktek pada materi <span style={{ color: '#ef4444', fontWeight: 600 }}>Deep Learning</span> untuk mendongkrak pemahaman mahasiswa.
                </p>
                <button style={{ marginTop: '20px', width: '100%', padding: '12px', background: '#7c3aed', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 10px rgba(124,58,237,0.3)' }}>Unduh Laporan Lengkap (.PDF)</button>
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
            background: '#fff', borderRadius: '20px', padding: '30px', width: '90%', maxWidth: '500px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#1a1a2e' }}>
                {showModal.type === 'add_module' ? 'Tambah Materi Baru' : 
                 showModal.type === 'zoom' ? 'Mulai Zoom Session' : 
                 showModal.type === 'schedule_zoom' ? 'Jadwalkan Zoom Baru' :
                 showModal.type === 'add_quiz' ? 'Buat Kuis Baru' :
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

            {showModal.type === 'add_quiz' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ padding: '12px', background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '8px', fontSize: '0.85rem', color: '#d97706', display: 'flex', gap: '10px' }}>
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  Kuis ini akan terhubung secara otomatis setelah mahasiswa menyelesaikan menonton video dan membaca modul PDF.
                </div>
                <input type="text" placeholder="Judul Kuis (Cth: Kuis Algoritma Dasar)" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', width: '100%' }} />
                <select style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', width: '100%' }}>
                  <option>Pilih Modul Tujuan</option>
                  {courses.map(c => <option key={c.name}>{c.name}</option>)}
                </select>
                <input type="number" placeholder="Jumlah Pertanyaan (Bank Soal)" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', width: '100%' }} />
                <button onClick={() => { alert('Draf Kuis berhasil dibuat! Anda sekarang bisa memasukkan soal.'); setShowModal({ type: null, data: null }); }} style={{ padding: '12px', background: '#db2777', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>Buat Draf Kuis</button>
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
