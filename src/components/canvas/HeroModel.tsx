'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroModel() {
  const groupRef = useRef<THREE.Group>(null);
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
    if (groupRef.current) {
      // Smooth rotation based on mouse movement
      groupRef.current.rotation.x +=
        (mousePosition.current.y * 0.3 - groupRef.current.rotation.x) * 0.03;
      groupRef.current.rotation.y +=
        (mousePosition.current.x * 0.3 - groupRef.current.rotation.y) * 0.03;
      
      // Continuous auto rotation
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x += 0.004;
      groupRef.current.rotation.z += 0.002;
    }
  });

  // Create a 3x3x3 grid of cubes
  const size = 3;
  const spacing = 1.05;
  const cuboids = useMemo(() => {
    const items = [];
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          const posX = (x - (size - 1) / 2) * spacing;
          const posY = (y - (size - 1) / 2) * spacing;
          const posZ = (z - (size - 1) / 2) * spacing;

          items.push(
            <mesh key={`${x}-${y}-${z}`} position={[posX, posY, posZ]} castShadow receiveShadow>
              <boxGeometry args={[0.96, 0.96, 0.96]} />
              <meshStandardMaterial
                color="#0a0a0a"
                roughness={0.15}
                metalness={0.9}
                envMapIntensity={1}
              />
            </mesh>
          );
        }
      }
    }
    return items;
  }, []);

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} scale={0.8}>
        {cuboids}
      </group>
    </Float>
  );
}