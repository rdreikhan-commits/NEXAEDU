'use client';

import { useState } from 'react';
import { Play, Clock, Video, Search, Star, Lock, Crown, X, ExternalLink, Users, Loader2 } from 'lucide-react';
import '../DashboardPage.css';
import { usePremium } from '../PremiumContext';

const categories = ['Semua', 'Teknik Informatika', 'AI & Machine Learning', 'Keamanan Siber', 'Data Analytics', 'Cloud & DevOps', 'Product Management', 'UI/UX Design'];

// Gunakan YouTube video ID — video akan di-embed langsung, tidak perlu simpan video
const resources = [
  {
    category: 'AI & Machine Learning',
    title: 'Supervised Learning: Decision Tree, Random Forest & XGBoost',
    instructor: 'Dr. Anisa Rahman, Ph.D - Stanford AI Lab',
    duration: '45 menit',
    level: 'Intermediate',
    rating: 4.9,
    students: 2840,
    youtubeId: 'J4Wdy0Wc_xQ',
    badge: 'Populer',
    badgeColor: { bg: '#fce7f3', color: '#db2777' },
    premium: false,
    order: 1,
  },
  {
    category: 'Teknik Informatika',
    title: 'Query Optimization & Indexing Strategy di PostgreSQL',
    instructor: 'Dr. Budi Santoso, M.Kom - Universitas Indonesia',
    duration: '32 menit',
    level: 'Intermediate',
    rating: 4.8,
    students: 1920,
    youtubeId: 'HXV3zeQKqGY',
    badge: 'Aktif Semester Ini',
    badgeColor: { bg: '#ede9fe', color: '#7c3aed' },
    premium: false,
    order: 2,
  },
  {
    category: 'Cloud & DevOps',
    title: 'Membangun Arsitektur Microservices Production-Ready di AWS',
    instructor: 'Rizky Pratama, M.Kom - Ex-Google Engineer',
    duration: '58 menit',
    level: 'Advanced',
    rating: 4.9,
    students: 3120,
    youtubeId: 'rv4LlmLmVWk',
    badge: 'Industri',
    badgeColor: { bg: '#dbeafe', color: '#2563eb' },
    premium: true,
    order: 3,
  },
  {
    category: 'Keamanan Siber',
    title: 'Hands-on Penetration Testing: From Recon to Post-Exploitation',
    instructor: 'Farhan Maulana, CEH - BSSN',
    duration: '70 menit',
    level: 'Advanced',
    rating: 4.7,
    students: 1560,
    youtubeId: '3Kq1MIfTWCE',
    badge: 'Hands-on Lab',
    badgeColor: { bg: '#dcfce7', color: '#16a34a' },
    premium: true,
    order: 4,
  },
  {
    category: 'Data Analytics',
    title: 'A/B Testing & Statistical Significance untuk Decision Making',
    instructor: 'Sari Dewi, M.Stat - Tokopedia Data Team',
    duration: '38 menit',
    level: 'Intermediate',
    rating: 4.8,
    students: 2240,
    youtubeId: 'zFMgpxG-chM',
    badge: 'Baru',
    badgeColor: { bg: '#fef3c7', color: '#d97706' },
    premium: true,
    order: 5,
  },
  {
    category: 'Product Management',
    title: 'Building a Product Roadmap dengan Framework RICE & ICE Scoring',
    instructor: 'Dian Pratiwi, MBA - Ex-Gojek Product Director',
    duration: '42 menit',
    level: 'Intermediate',
    rating: 4.9,
    students: 1890,
    youtubeId: 'T8MSA1pLJkI',
    badge: 'Industri',
    badgeColor: { bg: '#ede9fe', color: '#7c3aed' },
    premium: true,
    order: 6,
  },
];

const levelColor = {
  'Beginner': { bg: '#dcfce7', c: '#16a34a' },
  'Intermediate': { bg: '#fef3c7', c: '#d97706' },
  'Advanced': { bg: '#fce7f3', c: '#db2777' }
};

// Gunakan PremiumContext
export default function ResourcesPage() {
  const { isPremium: IS_PREMIUM, upgradeToPremium } = usePremium();
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcessUpgrade = () => {
    setIsProcessing(true);
    // Simulasi proses payment gateway / verifikasi (2 detik)
    setTimeout(() => {
      upgradeToPremium();
      setIsProcessing(false);
      setShowUpgradeModal(false);
      alert("🎉 Pembayaran Berhasil! Akun Anda sekarang PREMIUM.");
    }, 2000);
  };

  const filtered = resources.filter(r => {
    const matchCategory = activeCategory === 'Semua' || r.category === activeCategory;
    const matchSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handlePlay = (video) => {
    if (video.premium && !IS_PREMIUM) {
      setShowUpgradeModal(true);
    } else {
      setActiveVideo(video);
    }
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>

      {/* YouTube Video Modal */}
      {activeVideo && (
        <div onClick={() => setActiveVideo(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#fff', borderRadius: '20px', overflow: 'hidden',
            width: '90%', maxWidth: '900px', boxShadow: '0 30px 80px rgba(0,0,0,0.3)'
          }}>
            {/* Modal Header */}
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a2e' }}>{activeVideo.title}</p>
                <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>{activeVideo.instructor}</p>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#6c63ff', fontWeight: 600 }}
                >
                  <ExternalLink size={14} /> Buka di YouTube
                </a>
                <button onClick={() => setActiveVideo(null)} style={{
                  background: '#f5f5f5', border: 'none', borderRadius: '50%',
                  width: '34px', height: '34px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <X size={16} />
                </button>
              </div>
            </div>
            {/* YouTube Embed */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
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
            background: '#fff', borderRadius: '24px', padding: '40px', maxWidth: '420px', width: '90%',
            textAlign: 'center', boxShadow: '0 30px 80px rgba(0,0,0,0.2)'
          }}>
            <div style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Crown size={32} color="#fff" />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1a1a2e', marginBottom: '10px' }}>Konten Premium</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6, marginBottom: '24px' }}>
              Materi ini hanya tersedia untuk pengguna <strong>Premium</strong>. Upgrade sekarang untuk akses semua materi, loncat ke modul mana saja, konsultasi privat, dan sertifikat resmi!
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button onClick={() => setShowUpgradeModal(false)} style={{
                padding: '12px 24px', borderRadius: '30px', border: '1.5px solid #e5e7eb',
                background: '#fff', cursor: 'pointer', color: '#6b7280', fontWeight: 600
              }}>Nanti Saja</button>
              <button onClick={handleProcessUpgrade} disabled={isProcessing} style={{
                padding: '12px 24px', borderRadius: '30px', border: 'none',
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#fff',
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

      <div className="panel-title" style={{ marginBottom: '8px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Video size={26} color="#6c63ff" /> Video Kuliah & Materi
        </span>
        {!IS_PREMIUM && (
          <button onClick={() => setShowUpgradeModal(true)} style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '8px 18px', borderRadius: '30px', border: 'none',
            background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: '#fff',
            cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700,
            boxShadow: '0 4px 12px rgba(245,158,11,0.35)'
          }}>
            <Crown size={14} /> Upgrade Premium
          </button>
        )}
      </div>
      <p style={{ color: '#9ca3af', marginBottom: '24px', fontSize: '0.9rem' }}>
        Modul kuliah dan pelatihan industri dari dosen & praktisi terbaik. Video diputar langsung dari YouTube — tidak menghabiskan penyimpanan.
      </p>

      {/* Search */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
        <div className="search-box" style={{ flex: 1, maxWidth: '420px' }}>
          <Search size={16} color="#9ca3af" />
          <input
            type="text"
            placeholder="Cari nama materi atau instruktur..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)} style={{
            padding: '7px 16px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 600,
            border: 'none', cursor: 'pointer', transition: 'all 0.2s',
            background: activeCategory === cat ? '#6c63ff' : '#f5f6fa',
            color: activeCategory === cat ? '#fff' : '#6b7280',
            boxShadow: activeCategory === cat ? '0 4px 12px rgba(108, 99, 255, 0.3)' : 'none'
          }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="lessons-grid">
        {filtered.map(r => {
          const isLocked = r.premium && !IS_PREMIUM;
          return (
            <div key={r.title} className="lesson-card" style={{ position: 'relative' }}>
              {/* YouTube Thumbnail */}
              <div
                className="lesson-thumb"
                onClick={() => handlePlay(r)}
                style={{
                  position: 'relative', height: '170px', overflow: 'hidden',
                  cursor: 'pointer', background: '#000'
                }}
              >
                <img
                  src={`https://img.youtube.com/vi/${r.youtubeId}/hqdefault.jpg`}
                  alt={r.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isLocked ? 0.4 : 0.85 }}
                />
                <div style={{
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.15)'
                }}>
                  {isLocked ? (
                    <div style={{
                      width: '54px', height: '54px', background: 'rgba(245,158,11,0.9)',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 20px rgba(245,158,11,0.5)'
                    }}>
                      <Lock size={22} color="#fff" />
                    </div>
                  ) : (
                    <div style={{
                      width: '54px', height: '54px', background: 'rgba(255,255,255,0.95)',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)', transition: 'transform 0.2s'
                    }}>
                      <Play size={20} color="#6c63ff" fill="#6c63ff" />
                    </div>
                  )}
                </div>
                {/* Duration badge */}
                <div style={{
                  position: 'absolute', bottom: '8px', right: '8px',
                  background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '3px 8px',
                  borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600
                }}>
                  {r.duration}
                </div>
                {/* Premium badge */}
                {r.premium && (
                  <div style={{
                    position: 'absolute', top: '8px', left: '8px',
                    background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                    color: '#fff', padding: '3px 10px', borderRadius: '8px',
                    fontSize: '0.72rem', fontWeight: 700,
                    display: 'flex', alignItems: 'center', gap: '4px'
                  }}>
                    <Crown size={10} /> PREMIUM
                  </div>
                )}
              </div>

              <div className="lesson-info">
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span className="lesson-badge" style={{ background: r.badgeColor.bg, color: r.badgeColor.color }}>{r.badge}</span>
                  <span className="lesson-badge" style={{ background: levelColor[r.level]?.bg, color: levelColor[r.level]?.c }}>{r.level}</span>
                </div>
                <h4 style={{ fontSize: '0.92rem', lineHeight: 1.4, color: '#1a1a2e' }}>{r.title}</h4>
                <p style={{ fontSize: '0.78rem', color: '#6c63ff', fontWeight: 600, marginTop: '6px', marginBottom: '4px' }}>{r.category}</p>
                <p style={{ fontSize: '0.78rem', color: '#6b7280', marginBottom: '10px' }}>{r.instructor}</p>
                <div className="lesson-meta">
                  <Star size={12} color="#d97706" fill="#d97706" />
                  <span style={{ color: '#d97706', fontWeight: 700 }}>{r.rating}</span>
                  <span>·</span>
                  <Users size={12} />
                  <span>{r.students.toLocaleString()} mahasiswa</span>
                </div>

                <button
                  onClick={() => handlePlay(r)}
                  style={{
                    marginTop: '12px', width: '100%', padding: '9px', borderRadius: '10px',
                    border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    background: isLocked
                      ? 'linear-gradient(135deg, #f59e0b, #ef4444)'
                      : 'linear-gradient(135deg, #7c3aed, #6c63ff)',
                    color: '#fff',
                    boxShadow: isLocked
                      ? '0 4px 12px rgba(245,158,11,0.3)'
                      : '0 4px 12px rgba(108,99,255,0.3)'
                  }}
                >
                  {isLocked ? <><Crown size={14} /> Upgrade untuk Tonton</> : <><Play size={14} fill="#fff" /> Tonton Sekarang</>}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
