import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata = {
  title: "NEXA EDU | AI Adaptive Learning Ecosystem",
  description: "Platform Pendidikan Masa Depan Berbasis Kurikulum Merdeka & AI Personalization. Transformasi digital pendidikan dengan adaptive learning, AI tutor, dan immersive experience.",
  keywords: "Nexa Edu, AI Learning, Adaptive Learning, Kurikulum Merdeka, EdTech, Virtual Classroom, Education Ecosystem"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
