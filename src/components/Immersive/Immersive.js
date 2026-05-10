'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Lightformer, Environment, Sparkles } from '@react-three/drei';
import './Immersive.css';

function FloatingObjects() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[2, 1, -2]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#a855f7" wireframe />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-3, -1, -1]}>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          <meshStandardMaterial color="#ec4899" wireframe={true} />
        </mesh>
      </Float>
      
      <Float speed={3} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[1, -2, 0]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#6366f1" wireframe />
        </mesh>
      </Float>

      <Sparkles count={200} scale={10} size={2} speed={0.4} color="#a855f7" />
      
      <Environment preset="city">
        <Lightformer form="rect" intensity={1} position={[2, 5, 5]} />
      </Environment>
    </>
  );
}

export default function Immersive() {
  return (
    <section id="immersive" className="immersive-section">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <FloatingObjects />
        </Canvas>
      </div>

      <div className="immersive-content container text-center">
        <motion.h2 
          className="immersive-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Step Into <br/> The Virtual <span className="text-gradient-accent">Classroom</span>
        </motion.h2>
        <motion.p 
          className="immersive-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Kolaborasi realtime, object 3D interaktif, dan avatar imersif. 
          Belajar tidak pernah sehidup ini sebelumnya.
        </motion.p>
        
        <motion.button 
          className="btn-primary mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Enter VR Mode
        </motion.button>
      </div>
    </section>
  );
}
