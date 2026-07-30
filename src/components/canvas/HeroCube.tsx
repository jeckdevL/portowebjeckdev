'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroCube() {
  const groupRef = useRef<THREE.Group>(null);
  
  // 3x3x3 grid
  const size = 3;
  const spacing = 1.1;
  const cubes = useMemo(() => {
    const items = [];
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          items.push({
            position: [
              (x - (size - 1) / 2) * spacing,
              (y - (size - 1) / 2) * spacing,
              (z - (size - 1) / 2) * spacing,
            ] as [number, number, number],
            key: `${x}-${y}-${z}`
          });
        }
      }
    }
    return items;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t / 4) * 0.2;
    groupRef.current.rotation.x = Math.sin(t / 3) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {cubes.map((cube) => (
          <mesh key={cube.key} position={cube.position}>
            <boxGeometry args={[0.9, 0.9, 0.9]} />
            <meshPhysicalMaterial
              color="#0a0a0a"
              metalness={0.9}
              roughness={0.1}
              envMapIntensity={2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}