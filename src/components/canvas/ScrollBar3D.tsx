'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ScrollBar3D() {
  const barRef = useRef<THREE.Mesh>(null);
  const trackRef = useRef<THREE.Mesh>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (barRef.current) {
      const targetY = 1.2 - scrollProgress * 2.4;
      barRef.current.position.y += (targetY - barRef.current.position.y) * 0.1;
    }
  });

  return (
    <group position={[2.5, 0, 0]}>
      <mesh ref={trackRef}>
        <cylinderGeometry args={[0.02, 0.02, 2.8, 8]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
      <mesh ref={barRef}>
        <cylinderGeometry args={[0.04, 0.04, 0.4, 8]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, -1.5, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}