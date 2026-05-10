'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, BrainCircuit } from 'lucide-react';
import './AiAssistant.css';

export default function AiAssistant({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { 
      role: 'ai', 
      content: 'Halo, Alex! Berdasarkan sinkronisasi awal, saya ingin mengkalibrasi ulang Neural DNA Anda untuk memberikan rekomendasi materi dan bakat yang paling akurat. \n\nSilakan pilih gaya belajar yang paling Anda sukai saat ini:' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); // To track which mock options to show
  const chatAreaRef = useRef(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages, isLoading, step]);

  const handleOptionClick = (optionText, currentStep) => {
    const userMessage = { role: 'user', content: optionText };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setStep(0); // Hide options temporarily

    setTimeout(() => {
      let aiReply = '';
      let nextStep = 0;

      if (currentStep === 1) {
        if (optionText.includes('Visual')) {
          aiReply = 'Luar biasa. Saya telah memperbarui DNA Anda: **Visual Processing dominan (92%)**. \n\nSatu pertanyaan terakhir untuk memetakan bakat Anda: Bidang apa yang paling membuat Anda penasaran saat ini?';
        } else if (optionText.includes('Membaca')) {
          aiReply = 'Dicatat. DNA Anda di-set: **Analytical & Textual Processing (88%)**. \n\nSatu pertanyaan terakhir untuk memetakan bakat Anda: Bidang apa yang paling membuat Anda penasaran saat ini?';
        } else {
          aiReply = 'Baik. DNA Anda di-set: **Auditory & Collaborative (85%)**. \n\nSatu pertanyaan terakhir untuk memetakan bakat Anda: Bidang apa yang paling membuat Anda penasaran saat ini?';
        }
        nextStep = 2;
      } else if (currentStep === 2) {
        aiReply = `Sempurna! Kalibrasi selesai.\n\n**Hasil Analisis AI NEXA:**\nBerdasarkan kombinasi gaya belajar dan minat Anda, rekomendasi karir masa depan yang paling cocok adalah **Neural Architect** atau **Creative Technologist**.\n\nSaya telah menambahkan modul pembelajaran berbasis *Project-Based Learning* ke dalam menu Curriculum Anda. Anda sudah bisa mulai mempelajarinya sekarang!`;
        nextStep = 3; // Finished onboarding
      }

      setMessages((prev) => [...prev, { role: 'ai', content: aiReply }]);
      setIsLoading(false);
      setStep(nextStep);
    }, 1500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Fallback manual reply if user types freely after or during onboarding
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: 'Terima kasih atas masukannya. Sistem saat ini beroperasi dalam Mode Simulasi Terpandu untuk keperluan demonstrasi kalibrasi DNA. Silakan ikuti opsi yang diberikan untuk melihat kemampuan analitik sistem.' }
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={`ai-assistant-overlay ${isOpen ? 'open' : ''}`}>
      <div className="ai-assistant-modal">
        {/* Header */}
        <div className="ai-header">
          <div className="ai-branding">
            <div className="ai-avatar">
              <BrainCircuit size={20} />
            </div>
            <div className="ai-title">
              <h3>NEXA Core</h3>
              <p><span className="ai-status-dot"></span> Mode Kalibrasi Cerdas</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="ai-chat-area" ref={chatAreaRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.role}`}>
              <div className="msg-avatar">
                {msg.role === 'ai' && <Sparkles size={18} />}
              </div>
              <div className="msg-bubble">
                <span style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</span>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="chat-message ai">
              <div className="msg-avatar"><Sparkles size={18} /></div>
              <div className="msg-bubble">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Options */}
          {!isLoading && step === 1 && (
            <div className="ai-options-container">
              <button className="ai-option-btn" onClick={() => handleOptionClick('👁️ Visual & Proyek Praktek', 1)}>👁️ Visual & Proyek Praktek</button>
              <button className="ai-option-btn" onClick={() => handleOptionClick('📚 Membaca & Analitik Data', 1)}>📚 Membaca & Analitik Data</button>
              <button className="ai-option-btn" onClick={() => handleOptionClick('🎧 Audio & Diskusi Grup', 1)}>🎧 Audio & Diskusi Grup</button>
            </div>
          )}

          {!isLoading && step === 2 && (
            <div className="ai-options-container">
              <button className="ai-option-btn" onClick={() => handleOptionClick('🚀 Teknologi Masa Depan & AI', 2)}>🚀 Teknologi Masa Depan & AI</button>
              <button className="ai-option-btn" onClick={() => handleOptionClick('🎨 Seni, Desain & Kreativitas', 2)}>🎨 Seni, Desain & Kreativitas</button>
              <button className="ai-option-btn" onClick={() => handleOptionClick('🌍 Bisnis & Dampak Sosial', 2)}>🌍 Bisnis & Dampak Sosial</button>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form className="ai-input-area" onSubmit={handleSendMessage}>
          <div className="input-container">
            <input 
              type="text" 
              className="ai-input" 
              placeholder="Ketik balasan Anda..." 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={isLoading || step === 1 || step === 2}
            />
            <button type="submit" className="btn-send" disabled={!inputMessage.trim() || isLoading || step === 1 || step === 2}>
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
