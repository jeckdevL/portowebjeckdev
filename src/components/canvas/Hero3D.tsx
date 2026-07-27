'use client';

import { Suspense } from 'react';
import ThreeCanvas from './ThreeCanvas';
import HeroModel from './HeroModel';
import SceneEffects from './SceneEffects';

export default function Hero3D() {
  return (
    <ThreeCanvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8A2BE2" />
      <Suspense fallback={null}>
        <HeroModel />
        <SceneEffects />
      </Suspense>
    </ThreeCanvas>
  );
}