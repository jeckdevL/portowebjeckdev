'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

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
      meshRef.current.rotation.x +=
        (mousePosition.current.y * 0.5 - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y +=
        (mousePosition.current.x * 0.5 - meshRef.current.rotation.y) * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  const geometry = useMemo(() => new THREE.TorusKnotGeometry(1, 0.35, 128, 16), []);
  const particleGeo = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 0.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(positions, 3));
  }, []);

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
      {/* Orbital ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[1.8, 1.9, 64]} />
        <meshBasicMaterial color="#00F0FF" transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>
      {/* Particle field */}
      <points>
        <primitive object={particleGeo} attach="geometry" />
        <pointsMaterial
          size={0.04}
          color="#8A2BE2"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </Float>
  );
}
