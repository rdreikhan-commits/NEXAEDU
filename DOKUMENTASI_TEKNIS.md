# 📘 DOKUMENTASI TEKNIS — NEXA EDU PLATFORM
### Alur Sistem, Data Flow Diagram (DFD), dan Deskripsi Fitur Lengkap

---

## 🏛️ 1. DESKRIPSI SISTEM

**Nexa Edu** adalah platform Learning Management System (LMS) generasi berikutnya yang mengintegrasikan kecerdasan buatan (AI) untuk personalisasi pembelajaran. Sistem ini memiliki **4 peran utama pengguna** dengan akses dan fitur yang berbeda-beda:

| Peran | Akses | Fungsi Utama |
|---|---|---|
| 👨‍🎓 **Siswa/Mahasiswa** | `/dashboard` | Belajar, mengakses materi, AI insights |
| 👩‍🏫 **Dosen/Pengajar** | `/teacher` | Kelola kelas, nilai, konsultasi, zoom |
| 💰 **Keuangan** | `/finance` | Pantau transaksi, pendapatan, analitik |
| 🛡️ **Master Admin** | `/admin` | Kontrol sistem, database, konfigurasi AI |

---

## 🌐 2. ARSITEKTUR SISTEM

```mermaid
graph TB
  subgraph CLIENT["🖥️ Client Layer (Browser)"]
    UI["Next.js 16 App Router\n(React 19 + Turbopack)"]
    CSS["CSS Glassmorphism\n+ Lucide Icons + 3D Three.js"]
  end

  subgraph SERVER["⚙️ Server Layer"]
    API["API Routes\n/api/chat (Dynamic)"]
    AI["Google Gemini AI\n@google/generative-ai"]
  end

  subgraph DEPLOY["☁️ Deployment"]
    GH["GitHub Repository\nbranch: main"]
    NET["Netlify CDN\n@netlify/plugin-nextjs"]
  end

  subgraph ROLES["👥 User Roles"]
    S["Siswa\n/dashboard/*"]
    T["Dosen\n/teacher/*"]
    F["Keuangan\n/finance/*"]
    A["Admin\n/admin/*"]
  end

  S & T & F & A --> UI
  UI --> CSS
  UI --> API
  API --> AI
  GH -->|"Auto Deploy"| NET
  NET --> CLIENT
```

---

## 📊 3. DFD LEVEL 0 — KONTEKS DIAGRAM

> Gambaran tertinggi: siapa saja yang berinteraksi dengan sistem dan apa yang mereka kirimkan/terima.

```mermaid
graph LR
  SISWA(["👨‍🎓 Siswa\nMahasiswa"])
  DOSEN(["👩‍🏫 Dosen\nPengajar"])
  KEUANGAN(["💰 Tim\nKeuangan"])
  ADMIN(["🛡️ Master\nAdmin"])

  SYS["⬡ NEXA EDU\nSYSTEM"]

  SISWA -- "Input: Profil, Aktivitas Belajar" --> SYS
  SYS -- "Output: Materi, Nilai, AI Insights" --> SISWA

  DOSEN -- "Input: Materi, Nilai, Jadwal" --> SYS
  SYS -- "Output: Data Mahasiswa, Laporan Kelas" --> DOSEN

  KEUANGAN -- "Input: Verifikasi Transaksi" --> SYS
  SYS -- "Output: Laporan Keuangan, Analitik" --> KEUANGAN

  ADMIN -- "Input: Konfigurasi Sistem, AI Model" --> SYS
  SYS -- "Output: Log Server, Status Database" --> ADMIN
```

---

## 📊 4. DFD LEVEL 1 — PROSES UTAMA SISTEM

> Memecah sistem utama menjadi proses-proses fungsional yang saling terhubung.

```mermaid
graph TB
  subgraph EXTERNAL["Entitas Eksternal"]
    U_S(["👨‍🎓 Siswa"])
    U_T(["👩‍🏫 Dosen"])
    U_F(["💰 Keuangan"])
    U_A(["🛡️ Admin"])
    G_AI(["🤖 Google\nGemini API"])
  end

  subgraph PROCESSES["Proses Sistem"]
    P1["1.0\n🔐 Autentikasi\n& Manajemen Sesi"]
    P2["2.0\n📚 Manajemen\nKonten Pembelajaran"]
    P3["3.0\n🧠 AI Learning\nPersonalization Engine"]
    P4["4.0\n💬 Manajemen\nKonsultasi"]
    P5["5.0\n💰 Manajemen\nKeuangan & Transaksi"]
    P6["6.0\n⚙️ Administrasi\nSistem"]
  end

  subgraph DATASTORES["Penyimpanan Data (Mock)"]
    DS1[("👤 Data\nPengguna")]
    DS2[("📖 Data\nMateri & Kuis")]
    DS3[("💳 Data\nTransaksi")]
    DS4[("📋 Data\nNilai & Laporan")]
  end

  U_S & U_T --> P1
  U_F & U_A --> P1
  P1 --> DS1

  U_S --> P2
  U_T --> P2
  P2 <--> DS2

  U_S --> P3
  P3 --> G_AI
  G_AI --> P3
  P3 --> DS1

  U_S & U_T --> P4
  P4 <--> DS4

  U_F --> P5
  P5 <--> DS3

  U_A --> P6
  P6 <--> DS1 & DS2 & DS3 & DS4
```

---

## 📊 5. DFD LEVEL 2 — DETAIL PROSES BELAJAR SISWA (P2 & P3)

```mermaid
graph LR
  SISWA(["👨‍🎓 Siswa"])

  P2_1["2.1\nBrowse\nMata Pelajaran"]
  P2_2["2.2\nTonton\nVideo Materi"]
  P2_3["2.3\nKerjakan\nKuis"]
  P2_4["2.4\nUpdate\nProgress Belajar"]
  P3_1["3.1\nAnalisis\nPola Belajar"]
  P3_2["3.2\nGenerate\nAI Insights"]
  P3_3["3.3\nTampilkan\nRekomendasi"]

  DS_MATERI[("📖 Materi\n& Kuis")]
  DS_PROGRESS[("📈 Progress\nSiswa")]
  GEMINI(["🤖 Gemini API"])

  SISWA --> P2_1
  P2_1 --> DS_MATERI
  DS_MATERI --> P2_2
  P2_2 --> P2_3
  P2_3 --> P2_4
  P2_4 --> DS_PROGRESS

  DS_PROGRESS --> P3_1
  P3_1 --> P3_2
  P3_2 --> GEMINI
  GEMINI --> P3_2
  P3_2 --> P3_3
  P3_3 --> SISWA
```

---

## 🗺️ 6. USER FLOW — ALUR LENGKAP SETIAP ROLE

### 6.1 — Flow: Siswa / Mahasiswa

```mermaid
flowchart TD
  A(["🌐 Buka nexaedu.app"]) --> B["Halaman Landing\n(Hero 3D + Info Platform)"]
  B --> C{"Sudah punya\nakun?"}
  C -- "Belum" --> D["Halaman Daftar\n/auth/register"]
  D --> E["Isi: Nama, Email,\nPassword, Role: Siswa"]
  C -- "Sudah" --> F["Halaman Login\n/auth/login"]
  E --> F
  F --> G["Dashboard Siswa\n/dashboard"]

  G --> H["📊 Lihat Progress\nBelajar Hari Ini"]
  G --> I["📚 Pilih Mata\nPelajaran"]
  G --> J["🧬 Buka Learning DNA\n(Analitik Gaya Belajar)"]
  G --> K["🎥 Buka Video Belajar\n/dashboard/resources"]
  G --> L["🏆 Portofolio Saya\n/dashboard/portfolio"]
  G --> M["💡 AI Insights\n/dashboard/insights"]

  I --> N["Tonton Konten\n& Materi Video"]
  N --> O["Kerjakan Kuis Setelah\nSelesai Menonton"]
  O --> P["Progress Diperbarui\n+XP & Level Naik"]
  P --> G

  M --> Q["Tanya NEXA AI\n(Chatbot Gemini)"]
  Q --> R["AI Memberikan Rekomendasi\nMateri & Gaya Belajar"]
  R --> G
```

---

### 6.2 — Flow: Dosen / Pengajar

```mermaid
flowchart TD
  A(["🔐 Login sebagai Dosen"]) --> B["Portal Pengajar\n/teacher"]
  B --> C["📊 Dashboard Utama\n(Statistik Mahasiswa)"]

  C --> D["📚 Mata Kuliah Saya\n/teacher/courses"]
  C --> E["👥 Data Mahasiswa\n/teacher/students"]
  C --> F["💬 Konsultasi Privat\n/teacher/consultations"]
  C --> G["🎥 Zoom Session\n/teacher/zoom"]
  C --> H["⭐ Nilai & Penilaian\n/teacher/grades"]
  C --> I["📈 Laporan Kinerja\n/teacher/reports"]

  D --> D1["Tambah Modul Baru\n(Judul + URL Video)"]
  D --> D2["Buat Kuis untuk Modul"]
  D1 & D2 --> D3["Simpan &\nPublikasikan ke Siswa"]

  F --> F1["Lihat Permintaan\nKonsultasi Masuk"]
  F1 --> F2{"Ada yang URGENT?"}
  F2 -- "Ya" --> F3["Balas dengan\nPrioritas Tinggi"]
  F2 -- "Tidak" --> F4["Balas Sesuai\nAntrian"]

  G --> G1["Klik Mulai\npada Sesi Mendatang"]
  G1 --> G2["Modal Konfirmasi\n'Buka Zoom'"]
  G2 --> G3["🎥 Zoom App Dibuka"]

  H --> H1["Lihat Tabel Rekap\nNilai Seluruh Mahasiswa"]
  H1 --> H2["Edit Nilai\nJika Diperlukan"]
  H2 --> H3["Export CSV\nLaporan Nilai"]

  I --> I1["Lihat Distribusi\nRating dari Mahasiswa"]
  I1 --> I2["Baca Analitik &\nRekomendasi AI"]
  I2 --> I3["Unduh Laporan\nPDF Lengkap"]
```

---

### 6.3 — Flow: Tim Keuangan

```mermaid
flowchart TD
  A(["🔐 Login sebagai Keuangan"]) --> B["Dashboard Keuangan\n/finance"]
  B --> C["💹 KPI Utama:\nPendapatan, Transaksi, Langganan"]

  C --> D["📈 Menu Pendapatan\n/finance/revenue"]
  C --> E["💳 Langganan Premium\n/finance/subscriptions"]
  C --> F["🔄 Transaksi Harian\n/finance/transactions"]
  C --> G["📋 Laporan Keuangan\n/finance/reports"]
  C --> H["📊 Analitik\n/finance/analytics"]

  D --> D1["Lihat Grafik Tren\nPendapatan per Bulan"]
  D1 --> D2["Lihat Proyeksi\nPendapatan Q3"]
  D2 --> D3["Identifikasi Bulan\ndengan Pendapatan Tertinggi"]

  F --> F1["Lihat Daftar\nTransaksi Masuk"]
  F1 --> F2{"Status Transaksi?"}
  F2 -- "Pending" --> F3["Klik 'Verifikasi'\nPembayaran"]
  F2 -- "Berhasil" --> F4["Catat sebagai\nPendapatan Konfirmasi"]
  F3 --> F4

  H --> H1["Lihat Sales Funnel:\nPengunjung → Trial → Premium"]
  H1 --> H2["Identifikasi\nBottleneck Konversi"]
  H2 --> H3["Susun Strategi\nPromo/Diskon"]
```

---

### 6.4 — Flow: Master Admin

```mermaid
flowchart TD
  A(["🔐 Login sebagai Admin"]) --> B["Master Control Panel\n/admin"]
  B --> C{"Pilih Modul\nAdministrasi"}

  C --> D["👥 User Management\n/admin/users"]
  C --> E["🤖 AI Model Config\n/admin/ai-models"]
  C --> F["🗄️ Database Logs\n/admin/database"]

  D --> D1["Lihat Semua\nPengguna Aktif"]
  D1 --> D2{"Aksi User?"}
  D2 -- "Blokir" --> D3["Nonaktifkan Akun"]
  D2 -- "Upgrade Role" --> D4["Ubah Role\nSiswa → Dosen"]
  D2 -- "Reset Password" --> D5["Kirim Email\nReset Password"]

  E --> E1["Pilih Provider AI\n(Google Gemini)"]
  E1 --> E2["Set Parameter:\nTemperature, Max Tokens"]
  E2 --> E3["Test Koneksi\nAPI Key"]
  E3 --> E4{"Koneksi OK?"}
  E4 -- "Ya" --> E5["✅ Simpan Konfigurasi"]
  E4 -- "Tidak" --> E6["❌ Cek API Key\n& Quota"]

  F --> F1["Monitor Query\nDatabase Real-time"]
  F1 --> F2["Identifikasi\nQuery Lambat"]
  F2 --> F3["Optimasi Index\nDatabase"]
```

---

## 📋 7. USE CASE DIAGRAM

```mermaid
flowchart LR
  subgraph ACTOR["👥 Aktor"]
    S(["👨‍🎓 Siswa"])
    T(["👩‍🏫 Dosen"])
    F(["💰 Keuangan"])
    A(["🛡️ Admin"])
  end

  subgraph USECASE["📋 Use Case Nexa Edu"]
    UC1["Login / Logout"]
    UC2["Register Akun"]
    UC3["Akses Materi Belajar"]
    UC4["Kerjakan Kuis"]
    UC5["Tanya AI Assistant"]
    UC6["Lihat Learning DNA"]
    UC7["Lihat Portofolio"]
    UC8["Upload Materi (Dosen)"]
    UC9["Buat Kuis (Dosen)"]
    UC10["Balas Konsultasi"]
    UC11["Jadwalkan Zoom"]
    UC12["Kelola Nilai Mahasiswa"]
    UC13["Buat Laporan Kelas"]
    UC14["Verifikasi Transaksi"]
    UC15["Analitik Pendapatan"]
    UC16["Laporan Keuangan"]
    UC17["Manajemen User"]
    UC18["Konfigurasi AI Model"]
    UC19["Monitor Database"]
  end

  S --> UC1 & UC2 & UC3 & UC4 & UC5 & UC6 & UC7
  T --> UC1 & UC8 & UC9 & UC10 & UC11 & UC12 & UC13
  F --> UC1 & UC14 & UC15 & UC16
  A --> UC1 & UC17 & UC18 & UC19
```

---

## 🗂️ 8. STRUKTUR NAVIGASI APLIKASI (Site Map)

```mermaid
graph TD
  ROOT["🌐 nexaedu.app/"]

  ROOT --> LANDING["🏠 Landing Page\n(Hero 3D, Fitur, Testimoni)"]
  ROOT --> AUTH["🔐 Autentikasi"]
  ROOT --> STUDENT["👨‍🎓 Portal Siswa\n/dashboard"]
  ROOT --> TEACHER["👩‍🏫 Portal Dosen\n/teacher"]
  ROOT --> FINANCE["💰 Portal Keuangan\n/finance"]
  ROOT --> ADMIN["🛡️ Portal Admin\n/admin"]

  AUTH --> LOGIN["/auth/login"]
  AUTH --> REG["/auth/register"]

  STUDENT --> S1["/dashboard (Beranda)"]
  STUDENT --> S2["/dashboard/dna"]
  STUDENT --> S3["/dashboard/curriculum"]
  STUDENT --> S4["/dashboard/resources"]
  STUDENT --> S5["/dashboard/virtual-class"]
  STUDENT --> S6["/dashboard/portfolio"]
  STUDENT --> S7["/dashboard/insights"]

  TEACHER --> T1["/teacher (Beranda)"]
  TEACHER --> T2["/teacher/courses"]
  TEACHER --> T3["/teacher/students"]
  TEACHER --> T4["/teacher/consultations"]
  TEACHER --> T5["/teacher/zoom"]
  TEACHER --> T6["/teacher/grades"]
  TEACHER --> T7["/teacher/reports"]

  FINANCE --> F1["/finance (Ringkasan)"]
  FINANCE --> F2["/finance/revenue"]
  FINANCE --> F3["/finance/subscriptions"]
  FINANCE --> F4["/finance/transactions"]
  FINANCE --> F5["/finance/reports"]
  FINANCE --> F6["/finance/analytics"]

  ADMIN --> A1["/admin (Overview)"]
  ADMIN --> A2["/admin/users"]
  ADMIN --> A3["/admin/ai-models"]
  ADMIN --> A4["/admin/database"]
```

---

## ⚙️ 9. TEKNOLOGI & STACK YANG DIGUNAKAN

| Kategori | Teknologi | Keterangan |
|---|---|---|
| **Framework** | Next.js 16.2.6 | App Router + Turbopack untuk performa build ultra cepat |
| **UI Library** | React 19 | Server & Client Component yang optimal |
| **3D Graphics** | Three.js + @react-three/fiber | Animasi bola & partikel 3D di Landing Page |
| **Icons** | Lucide React | Set ikon modern yang konsisten |
| **Animation** | Framer Motion + GSAP | Transisi halaman yang halus |
| **AI Integration** | Google Gemini API | Chatbot cerdas & Learning DNA |
| **Styling** | Vanilla CSS | Glassmorphism, Gradient, Dark Mode |
| **Deployment** | Netlify + GitHub | CI/CD otomatis setiap push ke main |
| **Version Control** | Git + GitHub | History & kolaborasi tim |

---

## 🎯 10. KEUNGGULAN KOMPETITIF NEXA EDU

| Fitur | Nexa Edu | Platform Biasa |
|---|---|---|
| 🧬 Learning DNA (AI) | ✅ Ada, berbasis perilaku belajar siswa | ❌ Tidak ada |
| 🌐 Animasi 3D Interaktif | ✅ WebGL Real-time di Homepage | ❌ Gambar statis |
| 📱 Mobile-First Design | ✅ Hamburger menu, Sliding sidebar | ⚠️ Perlu zoom-in |
| 👥 Multi-Role Dashboard | ✅ 4 Role (Siswa, Dosen, Finance, Admin) | ⚠️ Biasanya 2 role saja |
| 🤖 AI Chatbot Terintegrasi | ✅ Google Gemini, jawab pertanyaan | ❌ Forum manual |
| 📊 Analitik Keuangan | ✅ Sales funnel & proyeksi pendapatan | ❌ Laporan manual |
| ⚡ Kecepatan Build | ✅ Turbopack Next.js 16 | ⚠️ Build lebih lambat |
| 🔄 Auto Deploy | ✅ Netlify CI/CD dari GitHub | ❌ Upload manual |

---

*Dokumen ini dipersiapkan untuk keperluan presentasi, penilaian juri, dan evaluasi teknis platform Nexa Edu. © 2026 HANSCO — All Rights Reserved.*
