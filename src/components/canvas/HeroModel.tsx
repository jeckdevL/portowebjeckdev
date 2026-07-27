'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Track mouse position for interaction
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      };
    });
  }

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth follow mouse
      meshRef.current.rotation.x +=
        (mousePosition.current.y * 0.5 - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y +=
        (mousePosition.current.x * 0.5 - meshRef.current.rotation.y) * 0.05;
      // Idle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.2, 1), []);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={geometry} castShadow>
        <MeshDistortMaterial
          color="#00F0FF"
          emissive="#8A2BE2"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
      {/* Inner ring */}
      <mesh>
        <ringGeometry args={[1.5, 1.6, 64]} />
        <meshBasicMaterial color="#00F0FF" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
}