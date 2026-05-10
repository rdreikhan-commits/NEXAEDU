import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Problem from '@/components/Problem/Problem';
import Features from '@/components/Features/Features';
import Dashboard from '@/components/Dashboard/Dashboard';
import Immersive from '@/components/Immersive/Immersive';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="main-content">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Dashboard />
      <Immersive />
      <Footer />
    </main>
  );
}
