import { GoogleGenerativeAI } from "@google/generative-ai";

// Menggunakan API Key dari environment variables
// Pastikan Anda menambahkan GEMINI_API_KEY di dalam file .env.local
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "dummy_key");

export async function POST(req) {
  try {
    const { message, history } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return Response.json(
        { reply: "⚠️ [SYSTEM OFFLINE]: GEMINI_API_KEY tidak ditemukan di .env.local. Silakan tambahkan API key Anda untuk mengaktifkan AI Assistant." },
        { status: 200 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Format prompt dengan konteks sistem NEXA EDU
    const systemContext = `
      Kamu adalah NEXA, sebuah AI Tutor Assistant futuristik di platform NEXA EDU.
      Platform ini menggunakan Kurikulum Merdeka dan berfokus pada AI Adaptive Learning.
      Kepribadianmu: Pintar, suportif, futuristik, dan ringkas.
      Tugas utama: Membantu siswa memahami materi, memberikan rekomendasi belajar, dan membaca kondisi belajar (mock).
      Gunakan bahasa Indonesia yang semi-formal namun bersahabat.
    `;

    // Buat riwayat percakapan untuk Gemini. Gemini butuh role 'user' atau 'model'.
    // Pastikan percakapan pertama adalah 'user' jika ada history.
    let chatHistory = history.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // Jika pesan pertama adalah model, kita hapus atau tambahkan dummy user message
    if (chatHistory.length > 0 && chatHistory[0].role === "model") {
      chatHistory.shift(); 
    }

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const fullMessage = `[SISTEM]: ${systemContext}\n\n[PENGGUNA]: ${message}`;
    const result = await chat.sendMessage(fullMessage);
    const response = await result.response;
    const text = response.text();

    return Response.json({ reply: text });
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return Response.json(
      { reply: "Koneksi ke Neural Core terputus. Mohon coba lagi beberapa saat." },
      { status: 500 }
    );
  }
}
