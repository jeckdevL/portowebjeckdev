'use client';

import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import ThreeCanvas from './ThreeCanvas';
import HeroModel from './HeroModel';
import SceneEffects from './SceneEffects';

export default function Hero3D() {
  return (
    <ThreeCanvas className="w-full h-full">
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
      <Environment preset="city" />
      <Suspense fallback={null}>
        <HeroModel />
        <SceneEffects />
      </Suspense>
    </ThreeCanvas>
  );
}