// File purpose: 3D tower scene (react-three-fiber). Currently not used on any page; kept as a reusable graphic.
'use client';

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

type TowerData = {
  pos: [number, number, number];
  scale: [number, number, number];
  color: string;
  delay: number;
};

// Anchor the entrance animation to page-load time instead of the canvas
// clock. Mobile browsers can drop the WebGL context for off-screen
// canvases; when the context is recreated the clock resets to 0 and the
// towers would replay their growth ("renders again very fast" when
// scrolling back up). A page-load timestamp keeps the reveal done forever.
const startedAt = Date.now();

function Tower({ pos, scale, color, delay }: TowerData) {
  const wireRef = useRef<THREE.LineSegments>(null);
  const solidRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = (Date.now() - startedAt) / 1000;
    if (wireRef.current && solidRef.current && groupRef.current) {
      const reveal = Math.min(1, (t - delay) * 0.3);
      wireRef.current.position.y = THREE.MathUtils.lerp(-2, pos[1], reveal);
      (wireRef.current.material as THREE.Material).opacity = reveal * 0.4;
      const solidReveal = Math.max(0, Math.min(1, (t - delay - 1) * 0.4));
      solidRef.current.scale.y = scale[1] * solidReveal;
      (solidRef.current.material as THREE.Material).opacity = solidReveal * 0.12;
      // Float uses the clock so the gentle motion keeps going after reveal.
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.4 + delay) * 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments ref={wireRef} position={pos} scale={scale}>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial color={color} transparent opacity={0} />
      </lineSegments>
      <mesh ref={solidRef} position={pos} scale={[scale[0], 0, scale[2]]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#d8d4cc" transparent opacity={0} roughness={0.85} />
      </mesh>
    </group>
  );
}

function GroundPlane() {
  const ref = useRef<THREE.GridHelper>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    (ref.current.material as THREE.Material).opacity = 0.06 + Math.sin(t * 0.4) * 0.015;
  });
  return (
    <gridHelper ref={ref} args={[20, 20, '#b8b4ac', '#c8c4bc']} position={[0, -2.5, 0]} />
  );
}

function Scene() {
  const towers = useMemo<TowerData[]>(() => {
    const colors = ['#9a3a3a', '#3a6a5a', '#3a4a6a', '#6a4a3a'];
    const layout: [number, number, number][] = [
      [-2.5, 0, -0.5],
      [0.5, 0, 0.8],
      [2.8, 0, -0.3],
      [-1, 0, 1.5],
    ];
    const scales: [number, number, number][] = [
      [0.9, 3.2, 0.9],
      [0.7, 2.4, 0.7],
      [1.0, 4.0, 1.0],
      [0.8, 2.8, 0.8],
    ];
    return layout.map((pos, i) => ({
      pos: [pos[0], scales[i][1] / 2 - 1.5, pos[2]],
      scale: scales[i],
      color: colors[i],
      delay: i * 0.2,
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 6, 4]} intensity={0.6} color="#f5f0e8" />
      <pointLight position={[-5, 2, -3]} intensity={0.25} color="#9a3a3a" />
      <GroundPlane />
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.4}>
        <group>
          {towers.map((t, i) => (
            <Tower key={i} {...t} />
          ))}
        </group>
      </Float>
    </>
  );
}

export function FeaturedScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 8], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'default' }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
