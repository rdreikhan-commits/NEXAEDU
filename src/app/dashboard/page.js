'use client';

import { useState } from 'react';
import { Sparkles, Video, Award, Clock, Play, Star, ChevronRight, TrendingUp, Zap, BookOpen, Target, Users, Code, Cpu, Database, Globe, Briefcase, BarChart2, Lock, Crown, X, ExternalLink, Loader2 } from 'lucide-react';
import './DashboardPage.css';
import { usePremium } from './PremiumContext';

// ===== DATA KURIKULUM MAHASISWA =====
const faculties = [
  {
    id: 'ilkom',
    emoji: '💻',
    label: 'Ilmu Komputer',
    count: '12 Jurusan',
    bg: '#ede9fe',
    color: '#7c3aed',
    majors: ['Teknik Informatika', 'Sistem Informasi', 'Ilmu Komputer', 'Teknik Komputer', 'Keamanan Siber', 'Kecerdasan Buatan']
  },
  {
    id: 'ekonomi',
    emoji: '📊',
    label: 'Ekonomi & Bisnis',
    count: '8 Jurusan',
    bg: '#fef3c7',
    color: '#d97706',
    majors: ['Manajemen', 'Akuntansi', 'Ekonomi Pembangunan', 'Bisnis Digital', 'Perbankan Syariah']
  },
  {
    id: 'teknik',
    emoji: '⚙️',
    label: 'Teknik',
    count: '10 Jurusan',
    bg: '#dbeafe',
    color: '#2563eb',
    majors: ['Teknik Sipil', 'Teknik Elektro', 'Teknik Mesin', 'Teknik Kimia', 'Teknik Industri']
  },
  {
    id: 'industri',
    emoji: '🏭',
    label: 'Industri & Profesi',
    count: '6 Track',
    bg: '#dcfce7',
    color: '#16a34a',
    majors: ['Product Manager', 'UI/UX Designer', 'Digital Marketing', 'Data Analyst', 'Cloud Engineer']
  },
  {
    id: 'kedokteran',
    emoji: '🩺',
    label: 'Kesehatan',
    count: '5 Jurusan',
    bg: '#fce7f3',
    color: '#db2777',
    majors: ['Kedokteran Umum', 'Keperawatan', 'Farmasi', 'Kesehatan Masyarakat']
  },
  {
    id: 'hukum',
    emoji: '⚖️',
    label: 'Hukum & Sosial',
    count: '4 Jurusan',
    bg: '#fff7ed',
    color: '#ea580c',
    majors: ['Ilmu Hukum', 'Hubungan Internasional', 'Ilmu Politik', 'Komunikasi']
  },
];

// Modul per jurusan (ditambahkan youtubeId agar bisa diputar)
const majorModules = {
  'Teknik Informatika': [
    { title: 'Algoritma & Struktur Data', sks: 3, semester: 2, status: 'selesai', youtubeId: '8hly31xKli0' },
    { title: 'Pemrograman Berorientasi Objek', sks: 4, semester: 2, status: 'selesai', youtubeId: 'pTB0EiLXUC8' },
    { title: 'Basis Data', sks: 3, semester: 3, status: 'aktif', youtubeId: 'HXV3zeQKqGY' },
    { title: 'Jaringan Komputer', sks: 3, semester: 3, status: 'aktif', youtubeId: 'IPvYjXCsTg8' },
    { title: 'Rekayasa Perangkat Lunak', sks: 3, semester: 4, status: 'terkunci', youtubeId: 'Oqj_X8w75fE' },
    { title: 'Machine Learning', sks: 3, semester: 5, status: 'terkunci', youtubeId: 'J4Wdy0Wc_xQ' },
  ],
  'Kecerdasan Buatan': [
    { title: 'Matematika Diskrit', sks: 3, semester: 1, status: 'selesai', youtubeId: 'tyDKR4FG3Yw' },
    { title: 'Probabilitas & Statistika', sks: 3, semester: 2, status: 'selesai', youtubeId: 'Vfo5le26IhY' },
    { title: 'Machine Learning Fundamentals', sks: 4, semester: 3, status: 'aktif', youtubeId: 'KNAWp2cw6-w' },
    { title: 'Deep Learning & Neural Network', sks: 4, semester: 4, status: 'terkunci', youtubeId: 'aircAruvnKk' },
    { title: 'Natural Language Processing', sks: 3, semester: 5, status: 'terkunci', youtubeId: 'fNxaJsNG3-s' },
    { title: 'Computer Vision', sks: 3, semester: 5, status: 'terkunci', youtubeId: 'Oqm9vsf_hvU' },
  ],
  'Keamanan Siber': [
    { title: 'Kriptografi Dasar', sks: 3, semester: 2, status: 'selesai', youtubeId: 'jhXCTbFnK8o' },
    { title: 'Ethical Hacking & Penetration Testing', sks: 4, semester: 3, status: 'aktif', youtubeId: '3Kq1MIfTWCE' },
    { title: 'Network Security', sks: 3, semester: 3, status: 'aktif', youtubeId: 'inWWhr5tnEA' },
    { title: 'Digital Forensics', sks: 3, semester: 4, status: 'terkunci', youtubeId: 'x6Rj9z_qRcw' },
    { title: 'Cloud Security', sks: 3, semester: 5, status: 'terkunci', youtubeId: 'uN13D2JWe8M' },
  ],
  'Data Analyst': [
    { title: 'Python untuk Data Science', sks: 4, semester: 1, status: 'selesai', youtubeId: 'edPijNQpCmA' },
    { title: 'SQL & Database Analytics', sks: 3, semester: 1, status: 'selesai', youtubeId: '7S_tz1z_5bA' },
    { title: 'Data Visualization (Tableau/Power BI)', sks: 3, semester: 2, status: 'aktif', youtubeId: 'zFMgpxG-chM' },
    { title: 'Statistika Inferensial', sks: 3, semester: 2, status: 'aktif', youtubeId: 'Vfo5le26IhY' },
    { title: 'Business Intelligence', sks: 3, semester: 3, status: 'terkunci', youtubeId: 'Oqj_X8w75fE' },
  ],
  'Product Manager': [
    { title: 'Product Thinking & Strategy', sks: 3, semester: 1, status: 'selesai', youtubeId: 'T8MSA1pLJkI' },
    { title: 'User Research & Discovery', sks: 3, semester: 1, status: 'selesai', youtubeId: 'uBq4n7Dqy-c' },
    { title: 'Agile & Scrum Framework', sks: 3, semester: 2, status: 'aktif', youtubeId: '9TycLR0TqFA' },
    { title: 'Roadmap & Prioritization', sks: 3, semester: 2, status: 'aktif', youtubeId: '2V689A4w3rE' },
    { title: 'Growth & Metrics', sks: 3, semester: 3, status: 'terkunci', youtubeId: 'Oqm9vsf_hvU' },
  ],
};

const recentLessons = [
  {
    subject: 'Basis Data',
    title: 'Query Optimization & Indexing Strategy di PostgreSQL',
    teacher: 'Dr. Budi Santoso',
    duration: '32 menit',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    badge: 'Aktif Dikerjakan',
    badgeColor: { bg: '#ede9fe', color: '#7c3aed' },
    level: 'Semester 3',
    youtubeId: 'HXV3zeQKqGY',
  },
  {
    subject: 'Machine Learning',
    title: 'Supervised Learning: Decision Tree & Random Forest',
    teacher: 'Dr. Anisa Rahman',
    duration: '45 menit',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    badge: 'Populer',
    badgeColor: { bg: '#fce7f3', color: '#db2777' },
    level: 'Semester 5',
    youtubeId: 'J4Wdy0Wc_xQ',
  },
  {
    subject: 'Cloud Engineering',
    title: 'Membangun Arsitektur Microservices di AWS ECS',
    teacher: 'Rizky Pratama, M.Kom',
    duration: '58 menit',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    badge: 'Industri',
    badgeColor: { bg: '#dbeafe', color: '#2563eb' },
    level: 'Advanced',
    youtubeId: 'rv4LlmLmVWk',
  },
];

const progressItems = [
  { label: 'Basis Data - Semester 3', pct: 72, color: '#6c63ff' },
  { label: 'Machine Learning Fundamentals', pct: 38, color: '#10b981' },
  { label: 'Jaringan Komputer', pct: 85, color: '#f59e0b' },
];

export default function DashboardPage() {
  const { isPremium, upgradeToPremium } = usePremium();
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedMajor, setSelectedMajor] = useState(null);

  // States for Learning Resource Modal and Upgrade Modal
  const [activeModuleData, setActiveModuleData] = useState(null);
  const [modalTab, setModalTab] = useState('video'); // 'video', 'pdf', 'quiz'
  
  // Quiz States
  const [quizState, setQuizState] = useState({ currentQuestionIndex: 0, score: 0, showResult: false, selectedAnswer: null, isAnswerCorrect: null });

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const mockQuiz = [
    { question: "Apa tujuan utama dari proses optimasi yang diajarkan dalam modul ini?", options: ['Meningkatkan penggunaan memori secara drastis', 'Mempercepat waktu eksekusi dan efisiensi sistem', 'Mengubah antarmuka grafis menjadi 3D', 'Menghapus data lama secara otomatis'], correct: 1 },
    { question: "Langkah pertama yang paling penting sebelum melakukan analisis data adalah?", options: ['Membuat visualisasi grafik', 'Melatih model Machine Learning', 'Membersihkan dan memvalidasi data (Data Cleaning)', 'Mempresentasikan hasil ke klien'], correct: 2 },
    { question: "Metode mana yang paling efektif untuk menguji keberhasilan sebuah fitur baru?", options: ['Mengandalkan intuisi manajer', 'Melakukan A/B Testing kepada pengguna', 'Membaca buku teks teori dasar', 'Membuat asumsi tanpa data'], correct: 1 },
  ];

  const currentFaculty = faculties.find(f => f.id === selectedFaculty);
  const currentModules = majorModules[selectedMajor] || null;

  const handleModuleClick = (mod) => {
    if (mod.status === 'terkunci' && !isPremium) {
      setShowUpgradeModal(true);
    } else {
      setModalTab('video');
      setQuizState({ currentQuestionIndex: 0, score: 0, showResult: false, selectedAnswer: null, isAnswerCorrect: null });
      setActiveModuleData({ title: mod.title, youtubeId: mod.youtubeId || 'HXV3zeQKqGY', instructor: currentFaculty?.label || 'Instruktur' });
    }
  };

  const handleRecentLessonPlay = (lesson) => {
    setModalTab('video');
    setQuizState({ currentQuestionIndex: 0, score: 0, showResult: false, selectedAnswer: null, isAnswerCorrect: null });
    setActiveModuleData({ title: lesson.title, youtubeId: lesson.youtubeId, instructor: lesson.teacher });
  };

  const handleQuizAnswer = (optIndex) => {
    if (quizState.selectedAnswer !== null) return; // Prevent clicking again

    const isCorrect = optIndex === mockQuiz[quizState.currentQuestionIndex].correct;
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: optIndex,
      isAnswerCorrect: isCorrect,
      score: isCorrect ? prev.score + 100 : prev.score
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestionIndex < mockQuiz.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        isAnswerCorrect: null
      }));
    } else {
      setQuizState(prev => ({ ...prev, showResult: true }));
    }
  };

  const handleProcessUpgrade = () => {
    setIsProcessing(true);
    setTimeout(() => {
      upgradeToPremium();
      setIsProcessing(false);
      setShowUpgradeModal(false);
      alert("🎉 Pembayaran Berhasil! Akses tak terbatas sekarang terbuka.");
    }, 2000);
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      {/* Learning Resource Modal */}
      {activeModuleData && (
        <div onClick={() => setActiveModuleData(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#fff', borderRadius: '20px', overflow: 'hidden',
            width: '90%', maxWidth: '900px', boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
            display: 'flex', flexDirection: 'column', maxHeight: '90vh'
          }}>
            {/* Modal Header */}
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1a1a2e' }}>{activeModuleData.title}</p>
                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>{activeModuleData.instructor}</p>
              </div>
              <button onClick={() => setActiveModuleData(null)} style={{ background: '#f5f5f5', border: 'none', borderRadius: '50%', width: '34px', height: '34px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={16} />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div style={{ display: 'flex', gap: '24px', padding: '0 24px', borderBottom: '1px solid #f0f0f8', background: '#fafafa', overflowX: 'auto' }}>
              <button onClick={() => setModalTab('video')} style={{ padding: '14px 0', border: 'none', background: 'none', borderBottom: modalTab === 'video' ? '3px solid #6c63ff' : '3px solid transparent', color: modalTab === 'video' ? '#6c63ff' : '#6b7280', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                <Play size={16} /> Video Materi
              </button>
              <button onClick={() => setModalTab('pdf')} style={{ padding: '14px 0', border: 'none', background: 'none', borderBottom: modalTab === 'pdf' ? '3px solid #6c63ff' : '3px solid transparent', color: modalTab === 'pdf' ? '#6c63ff' : '#6b7280', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                <BookOpen size={16} /> Modul PDF
              </button>
              <button onClick={() => setModalTab('quiz')} style={{ padding: '14px 0', border: 'none', background: 'none', borderBottom: modalTab === 'quiz' ? '3px solid #6c63ff' : '3px solid transparent', color: modalTab === 'quiz' ? '#6c63ff' : '#6b7280', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                <Target size={16} /> Quiz Tes Otak
              </button>
            </div>

            {/* Tab Contents */}
            <div style={{ flex: 1, overflowY: 'auto', background: '#fff', minHeight: '300px' }}>
              {modalTab === 'video' && (
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} src={`https://www.youtube.com/embed/${activeModuleData.youtubeId}?autoplay=1&rel=0`} title={activeModuleData.title} allowFullScreen />
                </div>
              )}

              {modalTab === 'pdf' && (
                <div style={{ padding: '50px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '80px', height: '80px', background: '#f5f6fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <BookOpen size={36} color="#6c63ff" />
                  </div>
                  <h3 style={{ marginBottom: '10px', color: '#1a1a2e' }}>Modul PDF Tersedia</h3>
                  <p style={{ color: '#6b7280', marginBottom: '24px', maxWidth: '400px', lineHeight: 1.5 }}>
                    Modul bacaan lengkap berformat PDF yang disusun langsung oleh dosen pengampu. Klik tombol di bawah untuk membaca atau mengunduh.
                  </p>
                  <button style={{ padding: '12px 28px', background: '#1a1a2e', border: 'none', borderRadius: '30px', fontWeight: 600, color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                    ⬇ Unduh PDF Materi
                  </button>
                </div>
              )}

              {modalTab === 'quiz' && (
                <div style={{ padding: '30px', maxWidth: '700px', margin: '0 auto' }}>
                  {quizState.showResult ? (
                    <div style={{ textAlign: 'center', padding: '40px 20px', background: '#f5f6fa', borderRadius: '16px' }}>
                      <div style={{ width: '80px', height: '80px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                        <Award size={40} color="#16a34a" />
                      </div>
                      <h2 style={{ marginBottom: '10px', color: '#1a1a2e' }}>Quiz Selesai! 🎉</h2>
                      <p style={{ color: '#6b7280', marginBottom: '20px' }}>Anda berhasil menyelesaikan tes otak untuk materi ini.</p>
                      <h1 style={{ fontSize: '3rem', color: '#6c63ff', marginBottom: '30px' }}>{quizState.score} <span style={{ fontSize: '1rem', color: '#9ca3af' }}>XP</span></h1>
                      <button onClick={() => setActiveModuleData(null)} style={{ padding: '12px 30px', background: 'var(--accent-color)', color: '#fff', border: 'none', borderRadius: '30px', fontWeight: 700, cursor: 'pointer' }}>Kembali ke Dashboard</button>
                    </div>
                  ) : (
                    <>
                      <div style={{ background: '#f5f6fa', padding: '24px', borderRadius: '16px', marginBottom: '20px', border: '1px solid #f0f0f8' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                          <p style={{ fontWeight: 700, color: '#6c63ff', fontSize: '0.9rem' }}>Pertanyaan {quizState.currentQuestionIndex + 1} dari {mockQuiz.length}</p>
                          <span style={{ fontSize: '0.8rem', background: '#e0e7ff', color: '#4338ca', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>100 XP</span>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '24px', color: '#1a1a2e', lineHeight: 1.5 }}>
                          {mockQuiz[quizState.currentQuestionIndex].question}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          {mockQuiz[quizState.currentQuestionIndex].options.map((opt, i) => {
                            let btnStyle = { padding: '16px 20px', textAlign: 'left', background: '#fff', border: '2px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: '#374151', fontWeight: 500 };
                            let circleStyle = { width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #d1d5db', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' };
                            
                            if (quizState.selectedAnswer !== null) {
                              if (i === mockQuiz[quizState.currentQuestionIndex].correct) {
                                btnStyle.background = '#dcfce7'; btnStyle.borderColor = '#16a34a'; btnStyle.color = '#16a34a';
                                circleStyle.background = '#16a34a'; circleStyle.borderColor = '#16a34a';
                              } else if (i === quizState.selectedAnswer) {
                                btnStyle.background = '#fee2e2'; btnStyle.borderColor = '#ef4444'; btnStyle.color = '#ef4444';
                                circleStyle.background = '#ef4444'; circleStyle.borderColor = '#ef4444';
                              }
                            }

                            return (
                              <button 
                                key={i} 
                                onClick={() => handleQuizAnswer(i)}
                                style={btnStyle}
                                disabled={quizState.selectedAnswer !== null}
                              >
                                <div style={circleStyle}>
                                  {quizState.selectedAnswer !== null && i === mockQuiz[quizState.currentQuestionIndex].correct && <span style={{ color: '#fff', fontSize: '0.7rem' }}>✓</span>}
                                  {quizState.selectedAnswer === i && i !== mockQuiz[quizState.currentQuestionIndex].correct && <span style={{ color: '#fff', fontSize: '0.7rem' }}>✕</span>}
                                </div>
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          {quizState.selectedAnswer !== null && (
                            <p style={{ fontWeight: 600, color: quizState.isAnswerCorrect ? '#16a34a' : '#ef4444' }}>
                              {quizState.isAnswerCorrect ? '🎉 Benar sekali! (+100 XP)' : 'Aduh, jawaban kurang tepat. Coba lagi nanti!'}
                            </p>
                          )}
                        </div>
                        <button 
                          onClick={handleNextQuestion}
                          disabled={quizState.selectedAnswer === null}
                          style={{ padding: '14px 32px', background: quizState.selectedAnswer !== null ? 'var(--accent-color)' : '#e5e7eb', color: quizState.selectedAnswer !== null ? '#fff' : '#9ca3af', border: 'none', borderRadius: '30px', fontWeight: 700, cursor: quizState.selectedAnswer !== null ? 'pointer' : 'not-allowed', boxShadow: quizState.selectedAnswer !== null ? '0 4px 15px rgba(108,99,255,0.3)' : 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s' }}>
                          {quizState.currentQuestionIndex < mockQuiz.length - 1 ? 'Selanjutnya' : 'Selesai'} <ChevronRight size={18} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div onClick={() => setShowUpgradeModal(false)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#fff', borderRadius: '24px', padding: '40px', maxWidth: '420px', width: '90%', textAlign: 'center', boxShadow: '0 30px 80px rgba(0,0,0,0.2)'
          }}>
            <div style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Crown size={32} color="#fff" />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1a1a2e', marginBottom: '10px' }}>Modul Terkunci</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6, marginBottom: '24px' }}>
              Materi ini hanya tersedia untuk pengguna <strong>Premium</strong>. Upgrade sekarang agar dapat meloncat ke modul manapun tanpa batas!
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button onClick={() => setShowUpgradeModal(false)} style={{ padding: '12px 24px', borderRadius: '30px', border: '1.5px solid #e5e7eb', background: '#fff', cursor: 'pointer', color: '#6b7280', fontWeight: 600 }}>Nanti Saja</button>
              <button onClick={handleProcessUpgrade} disabled={isProcessing} style={{
                padding: '12px 24px', borderRadius: '30px', border: 'none', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#fff',
                cursor: isProcessing ? 'not-allowed' : 'pointer', fontWeight: 700, boxShadow: '0 4px 15px rgba(124,58,237,0.4)',
                display: 'flex', alignItems: 'center', gap: '8px', opacity: isProcessing ? 0.7 : 1
              }}>
                {isProcessing ? <Loader2 size={16} className="spin-anim" /> : '🚀'} 
                {isProcessing ? 'Memproses...' : 'Upgrade Premium'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Suggestion Banner */}
      <div className="ai-alert-banner">
        <div className="ai-icon-bg">
          <Sparkles size={20} />
        </div>
        <div className="ai-alert-text">
          <h4>Rekomendasi AI NEXA untuk Mahasiswa</h4>
          <p>Berdasarkan profil DNA kamu, lanjutkan modul <strong>Query Optimization</strong> — kamu hampir selesai! 🎯</p>
        </div>
        <button className="btn-launch" onClick={() => handleModuleClick({ title: 'Query Optimization', youtubeId: 'HXV3zeQKqGY', status: 'aktif' })}>Lanjutkan</button>
      </div>

      {/* Welcome Banner */}
      <div className="welcome-banner" style={{ marginBottom: '24px' }}>
        <div className="welcome-text">
          <h2>Selamat datang, Alex! 🎓</h2>
          <p>Teknik Informatika · Semester 3 · Universitas Indonesia</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div className="welcome-progress">
            <span className="progress-num">78%</span>
            <span>DNA Sync</span>
          </div>
          <div className="welcome-progress" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <span className="progress-num">3.82</span>
            <span>IPK Prediksi</span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-row" style={{ marginBottom: '28px' }}>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#ede9fe' }}><Video size={22} color="#6c63ff" /></div>
          <div className="stat-info"><h4>48</h4><p>Modul Selesai</p></div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dcfce7' }}><TrendingUp size={22} color="#16a34a" /></div>
          <div className="stat-info"><h4>3.82</h4><p>IPK Prediksi AI</p></div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fef3c7' }}><Star size={22} color="#d97706" /></div>
          <div className="stat-info"><h4>4.200</h4><p>Total XP</p></div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fce7f3' }}><Zap size={22} color="#db2777" /></div>
          <div className="stat-info"><h4>12 Hari</h4><p>Streak Belajar</p></div>
        </div>
      </div>

      {/* === FACULTY / TRACK EXPLORER === */}
      {!selectedFaculty ? (
        <>
          <div className="section-header">
            <h3>🏫 Pilih Bidang Studi / Track Industri</h3>
          </div>
          <div className="subjects-grid" style={{ marginBottom: '32px' }}>
            {faculties.map((f) => (
              <div
                key={f.id}
                className="subject-card"
                onClick={() => setSelectedFaculty(f.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="subject-icon" style={{ background: f.bg }}>
                  <span style={{ fontSize: '1.6rem' }}>{f.emoji}</span>
                </div>
                <h4>{f.label}</h4>
                <p className="subject-count">{f.count}</p>
              </div>
            ))}
          </div>
        </>
      ) : !selectedMajor ? (
        /* MAJOR SELECTION */
        <>
          <div className="section-header" style={{ marginBottom: '16px' }}>
            <h3>{currentFaculty.emoji} {currentFaculty.label} — Pilih Jurusan/Track</h3>
            <button onClick={() => setSelectedFaculty(null)} style={{ background: 'none', border: 'none', color: '#6c63ff', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem' }}>← Kembali</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '28px' }}>
            {currentFaculty.majors.map((major) => (
              <div
                key={major}
                className="portfolio-item"
                onClick={() => setSelectedMajor(major)}
                style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                  <div className="portfolio-icon" style={{ background: currentFaculty.bg }}>
                    <BookOpen size={18} color={currentFaculty.color} />
                  </div>
                  <div>
                    <div className="portfolio-info" style={{ marginBottom: 0 }}><h4>{major}</h4></div>
                    <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>
                      {majorModules[major] ? `${majorModules[major].length} modul tersedia` : 'Modul dalam penyusunan'}
                    </span>
                  </div>
                  <ChevronRight size={16} color="#9ca3af" style={{ marginLeft: 'auto' }} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* MODULE LIST */
        <>
          <div className="section-header" style={{ marginBottom: '16px' }}>
            <h3>📋 Modul — {selectedMajor}</h3>
            <button onClick={() => setSelectedMajor(null)} style={{ background: 'none', border: 'none', color: '#6c63ff', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem' }}>← Kembali ke Jurusan</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
            {(currentModules || [{ title: 'Modul segera tersedia', sks: 0, semester: 0, status: 'terkunci' }]).map((mod) => (
              <div
                key={mod.title}
                className="portfolio-item"
                onClick={() => handleModuleClick(mod)}
                style={{
                  cursor: mod.status !== 'terkunci' || isPremium ? 'pointer' : 'pointer',
                  opacity: mod.status === 'terkunci' && !isPremium ? 0.65 : 1,
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div className="portfolio-icon" style={{
                    background: mod.status === 'selesai' ? '#dcfce7' : mod.status === 'aktif' ? '#ede9fe' : '#f5f6fa',
                  }}>
                    {mod.status === 'selesai' ? <Award size={18} color="#16a34a" /> :
                     mod.status === 'aktif' ? <Play size={18} color="#6c63ff" fill="#6c63ff" /> :
                     <Target size={18} color="#9ca3af" />}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a2e', marginBottom: '3px' }}>{mod.title}</p>
                    <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>
                      Semester {mod.semester} · {mod.sks} SKS
                    </span>
                  </div>
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: mod.status === 'selesai' ? '#dcfce7' : mod.status === 'aktif' ? '#ede9fe' : '#f5f6fa',
                  color: mod.status === 'selesai' ? '#16a34a' : mod.status === 'aktif' ? '#6c63ff' : '#9ca3af',
                }}>
                  {mod.status === 'selesai' ? '✅ Selesai' : mod.status === 'aktif' ? '▶ Berjalan' : isPremium ? '▶ Buka (Premium)' : '🔒 Terkunci'}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Main 2-Col: Recent Videos + Progress */}
      <div className="content-row">
        <div>
          <div className="section-header">
            <h3>🎬 Video Kuliah Terbaru</h3>
            <a href="/dashboard/resources">Lihat semua →</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {recentLessons.map((l) => (
              <div key={l.title} className="lesson-card" style={{ display: 'flex', flexDirection: 'row' }} onClick={() => handleRecentLessonPlay(l)}>
                <div className="lesson-thumb" style={{ background: l.gradient, width: '140px', flexShrink: 0, height: 'auto', minHeight: '90px' }}>
                  <div className="lesson-thumb-overlay">
                    <div className="play-btn">
                      <Play size={16} color="#6c63ff" fill="#6c63ff" />
                    </div>
                  </div>
                </div>
                <div className="lesson-info" style={{ flex: 1 }}>
                  <span className="lesson-badge" style={{ background: l.badgeColor.bg, color: l.badgeColor.color }}>{l.badge}</span>
                  <h4>{l.title}</h4>
                  <div className="lesson-meta">
                    <span>{l.teacher}</span>·
                    <Clock size={12} />
                    <span>{l.duration}</span>·
                    <span style={{ color: '#6c63ff', fontWeight: 600 }}>{l.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div>
          <div className="section-header"><h3>📊 Progress Semester 3</h3></div>
          <div className="progress-list">
            {progressItems.map((p) => (
              <div key={p.label} className="progress-item">
                <div className="progress-header">
                  <span className="progress-title">{p.label}</span>
                  <span className="progress-pct" style={{ color: p.color }}>{p.pct}%</span>
                </div>
                <div className="prog-bar-bg">
                  <div className="prog-bar-fill" style={{ width: `${p.pct}%`, background: p.color }}></div>
                </div>
              </div>
            ))}
            <div className="progress-item" style={{ background: 'linear-gradient(135deg, #6c63ff, #a78bfa)', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Award size={24} color="#fff" />
                <div>
                  <p style={{ fontWeight: 700, marginBottom: '2px' }}>Sertifikat Database Engineer</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.85 }}>85% menuju sertifikasi industri</p>
                </div>
                <ChevronRight size={20} style={{ marginLeft: 'auto' }} />
              </div>
              <div className="prog-bar-bg" style={{ marginTop: '10px', background: 'rgba(255,255,255,0.2)' }}>
                <div className="prog-bar-fill" style={{ width: '85%', background: 'rgba(255,255,255,0.8)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
