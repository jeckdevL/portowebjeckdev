'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Particle effects for background
export default function SceneEffects() {
  const { viewport } = useThree();
  const particlesRef = useRef<THREE.Points>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesCount = 200;
  const positions = useMemo(() => {
    if (!mounted) {
      // Return static positions during SSR
      return new Float32Array(particlesCount * 3);
    }
    
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * viewport.width * 4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [viewport, mounted]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
    </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#00F0FF"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
    </points>
  );
}
