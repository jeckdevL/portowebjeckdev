'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Navbar3D() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Continuous gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      // Small vertical bounce
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]} scale={[1.5, 1.5, 1.5]}>
      {/* Decorative 3D navbar elements */}
      <mesh>
        <torusGeometry args={[1, 0.1, 8, 20]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
      <mesh position={[0, 0, 1]}>
        <boxGeometry args={[0.2, 0.2, 0.5]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.2, 0.5, 8]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}