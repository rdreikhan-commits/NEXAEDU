# 🚀 Panduan Presentasi: NEXA EDU Platform

Dokumen ini dirancang sebagai panduan narasi (script) dan alur (flow) presentasi Anda untuk mendemonstrasikan platform **Nexa Edu**. Gunakan panduan ini saat memandu audiens atau juri melihat sistem yang telah Anda bangun.

---

## 1. Pembukaan & Visi Platform (Landing Page)
**Deskripsi Singkat:**
Nexa Edu adalah platform manajemen pembelajaran (LMS) berbasis *Artificial Intelligence* (AI) generasi masa depan. Dirancang untuk menghancurkan batasan belajar konvensional dengan menghadirkan pengalaman visual yang imersif, personalisasi pembelajaran lewat AI, dan sistem manajerial terpadu untuk semua pihak (Siswa, Pengajar, Keuangan, dan Admin).

**Flow Presentasi (Aksi yang dilakukan):**
1. **Buka Halaman Utama (Homepage / Landing Page):** Tunjukkan elemen **Hero 3D Interaktif** berbentuk bola partikel *(Animated Sphere & Particles)* yang merespon gerakan pengguna.
2. **Narasi:** *"Ini adalah wajah baru pendidikan masa depan. Nexa Edu tidak menggunakan gambar statis yang membosankan. Kami menggunakan teknologi WebGL dan 3D Rendering di halaman utama untuk merepresentasikan betapa dinamis dan modernnya pendidikan bersama kami."*
3. **Scroll ke Bawah:** Tunjukkan bagian keunggulan AI, Testimoni, dan fitur-fitur unggulan.

---

## 2. Alur Pengguna: Siswa / Mahasiswa (Student Portal)
**Deskripsi:**
Siswa adalah pengguna utama. Dashboard siswa dirancang dengan pendekatan *Gamification* (seperti bermain game) dan asisten AI agar siswa tidak cepat bosan.

**Flow Presentasi:**
1. **Navigasi ke `/dashboard`** (atau pura-pura login sebagai siswa).
2. **Beranda Siswa:** Tunjukkan banner ucapan selamat datang dengan progres belajar (*Level 4*).
3. **Menu Mata Pelajaran & Video:** Perlihatkan antarmuka kartu mata pelajaran yang bersih dan elegan (mirip Ruang Guru namun lebih futuristik). 
4. **Learning DNA & AI Insights:** 
   - Klik menu *Learning DNA*.
   - **Narasi:** *"Nexa Edu memiliki fitur unik bernama Learning DNA. Sistem secara otomatis membaca kebiasaan belajar siswa dan merekomendasikan gaya belajar terbaiknya (Visual, Auditori, atau Kinestetik) menggunakan analitik AI."*
5. **Tanya NEXA AI (Asisten Pintar):** Klik tombol "Tanya NEXA AI" di pojok kiri bawah (jika di Desktop) untuk membuka modal asisten virtual. 

---

## 3. Alur Pengguna: Dosen / Pengajar (Teacher Portal)
**Deskripsi:**
Pengajar membutuhkan alat kontrol yang cepat untuk memantau ratusan siswa. Dashboard ini murni fokus pada manajemen performa dan kelas.

**Flow Presentasi:**
1. **Navigasi ke `/teacher`**.
2. **Beranda Pengajar:** Tunjukkan statistik metrik di atas (Total Mahasiswa, Kelas Aktif, Sesi Zoom).
3. **Fitur "Mahasiswa Perlu Perhatian":**
   - **Narasi:** *"Sistem secara cerdas menyoroti mahasiswa yang nilai atau kehadirannya menurun (zona merah). Dosen tidak perlu mengecek satu-satu, sistem yang memberi tahu siapa yang harus dibantu."*
4. **Menu Nilai & Penilaian (`/teacher/grades`):** Tunjukkan tabel rekap nilai yang sangat rapi dengan otomatisasi huruf mutu (A/B/C).
5. **Menu Laporan (`/teacher/reports`):** Tunjukkan grafik distribusi evaluasi bintang dari mahasiswa untuk menilai kinerja dosen itu sendiri.

---

## 4. Alur Pengguna: Manajemen Keuangan (Finance Portal)
**Deskripsi:**
Sebuah institusi pendidikan tidak bisa berjalan tanpa arus kas yang sehat. Portal Finance memberikan visibilitas penuh terhadap pendapatan.

**Flow Presentasi:**
1. **Navigasi ke `/finance`**.
2. **Beranda Keuangan:** Tunjukkan grafik Ringkasan Transaksi secara real-time.
3. **Menu Pendapatan (`/finance/revenue`):** 
   - Tunjukkan visualisasi Bar progresif dan grafik tren *Q3 Projection*.
   - **Narasi:** *"Di menu ini, manajer keuangan bisa melihat proyeksi dan tren pendapatan dari pendaftaran siswa dan fitur premium."*
4. **Menu Analitik (`/finance/analytics`):** Tunjukkan diagram *Sales Funnel* (Corong Penjualan).
   - **Narasi:** *"Bukan sekadar mencatat uang, Nexa Edu dilengkapi analitik konversi. Kita bisa tahu berapa banyak orang yang hanya melihat web versus yang akhirnya mendaftar dan membayar."*

---

## 5. Alur Pengguna: Master Admin (Admin Portal)
**Deskripsi:**
Pengendali seluruh sistem. Tampilan didominasi warna merah/gelap (Tema *Security/Master Control*) untuk memberikan *feel* eksklusivitas dan keamanan.

**Flow Presentasi:**
1. **Navigasi ke `/admin`**.
2. **Master Control & Server Logs:** Tunjukkan status "System Online" dan log basis data.
3. **Narasi Penutup:** *"Nexa Edu bukan sekadar portal belajar. Ini adalah ekosistem digital mandiri di mana Admin memiliki kontrol penuh atas lalu lintas server, manajemen user, dan konfigurasi Model AI."*

---

## 6. Demonstrasi Responsivitas (Mobile View)
**Flow Presentasi:**
1. Ubah ukuran jendela browser (*Resize*) menjadi seukuran layar HP, atau gunakan *Inspect Element* -> *Toggle Device Toolbar*.
2. Buka salah satu dashboard (misalnya Dosen).
3. Klik **Tombol Hamburger (Garis 3)** di pojok kiri atas.
4. **Narasi:** *"Semua antarmuka yang kompleks ini sepenuhnya responsif. Di layar handphone, navigasi otomatis berubah menjadi Sliding Menu yang elegan sehingga pengguna tetap bisa mengakses semua fitur dengan satu sentuhan tanpa membuat layar terasa penuh."*

---

### 💡 Tips Ekstra Saat Presentasi:
- **Transisi:** Berbicaralah dengan tempo sedang saat berpindah halaman (router Next.js berpindah sangat cepat, sehingga audiens tidak merasa ada "loading").
- **Fokus pada UI/UX:** Selalu soroti betapa halusnya animasi transisi, *glassmorphism* (efek kaca), dan skema warna premium (Deep Violet & Indigo) yang Anda bangun.
- **Problem Solving:** Tekankan bahwa aplikasi ini dibangun untuk menyelesaikan masalah "kebosanan siswa" dan "rumitnya birokrasi kampus/sekolah".
