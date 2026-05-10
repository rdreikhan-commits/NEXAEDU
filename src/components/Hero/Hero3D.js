'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    // Ukuran diperkecil sedikit agar aman dan transparan 15%
    <Sphere ref={sphereRef} args={[1.5, 64, 64]} scale={0.9}>
      <MeshDistortMaterial
        color="#a855f7"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.9}
        wireframe={true}
        emissive="#7c3aed"
        emissiveIntensity={0.6}
        transparent={true}
        opacity={0.15}
      />
    </Sphere>
      );
}

      function Particles() {
  const particlesRef = useRef();

      useFrame(({clock}) => {
    if (particlesRef.current) {
        particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

      const count = 500;
      const positions = new Float32Array(count * 3);
      for(let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
  }

      return (
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#a855f7"
          transparent
          opacity={0.15}
          sizeAttenuation={true}
        />
      </points>
      );
}

      export default function Hero3D() {
  return (
      // Posisi kamera dimundurkan menjadi Z: 7 agar tidak terpotong
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, 5]} color="#ec4899" intensity={1.5} />
        <pointLight position={[5, 5, -5]} color="#7c3aed" intensity={1.5} />
        <AnimatedSphere />
        <Particles />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      );
}
