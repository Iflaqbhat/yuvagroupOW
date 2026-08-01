'use client';

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type BuildingData = {
  pos: [number, number, number];
  scale: [number, number, number];
  delay: number;
};

function BlueprintBuilding({ pos, scale, delay }: BuildingData) {
  const wireRef = useRef<THREE.LineSegments>(null);
  const solidRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!wireRef.current || !solidRef.current) return;
    const t = state.clock.elapsedTime;
    const reveal = Math.min(1, (t - delay) * 0.4);

    // wireframe rises from the ground
    const targetY = pos[1];
    wireRef.current.position.y = THREE.MathUtils.lerp(-3, targetY, reveal);
    (wireRef.current.material as THREE.Material).opacity = reveal * 0.5;

    // solid fades in after wireframe completes
    const solidReveal = Math.max(0, Math.min(1, (t - delay - 1.5) * 0.5));
    solidRef.current.scale.y = scale[1] * solidReveal;
    (solidRef.current.material as THREE.Material).opacity = solidReveal * 0.08;

    // gentle float
    wireRef.current.position.y += Math.sin(t * 0.3 + delay) * 0.003;
  });

  return (
    <group>
      <lineSegments ref={wireRef} position={[pos[0], pos[1], pos[2]]} scale={scale}>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial color="#9a3a3a" transparent opacity={0} />
      </lineSegments>
      <mesh ref={solidRef} position={pos} scale={[scale[0], 0, scale[2]]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#d8d4cc" transparent opacity={0} roughness={0.9} />
      </mesh>
    </group>
  );
}

function FloatingPlane({
  position,
  rotation,
  delay,
  size,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  delay: number;
  size: [number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.25 + delay) * 0.15;
    ref.current.rotation.z = rotation[2] + Math.sin(t * 0.2 + delay) * 0.02;
  });
  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <planeGeometry args={[size[0], size[1]]} />
      <meshStandardMaterial
        color="#e8e4dc"
        transparent
        opacity={0.4}
        roughness={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function GroundGrid() {
  const ref = useRef<THREE.GridHelper>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    (ref.current.material as THREE.Material).opacity = 0.08 + Math.sin(t * 0.5) * 0.02;
  });
  return (
    <gridHelper
      ref={ref}
      args={[30, 30, '#c0bcb4', '#d0ccc4']}
      position={[0, -3, 0]}
    />
  );
}

function Scene() {
  const buildings = useMemo<BuildingData[]>(() => {
    const items: BuildingData[] = [];
    const rng = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    for (let i = 0; i < 10; i++) {
      const x = (rng(i) - 0.5) * 12;
      const z = (rng(i + 100) - 0.5) * 6 - 1;
      const h = 1.5 + rng(i + 200) * 3.5;
      const w = 0.7 + rng(i + 300) * 0.6;
      items.push({
        pos: [x, h / 2 - 1.5, z],
        scale: [w, h, w],
        delay: i * 0.15,
      });
    }
    return items;
  }, []);

  const planes = useMemo(() => {
    const items: { pos: [number, number, number]; rot: [number, number, number]; delay: number; size: [number, number] }[] = [];
    for (let i = 0; i < 5; i++) {
      items.push({
        pos: [(Math.random() - 0.5) * 10, 1 + Math.random() * 3, -2 - Math.random() * 3],
        rot: [Math.PI / 2.5, 0, (Math.random() - 0.5) * 0.3],
        delay: i * 0.5,
        size: [2 + Math.random() * 2, 1.5 + Math.random() * 1.5],
      });
    }
    return items;
  }, []);

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={0.5} color="#f5f0e8" />
      <pointLight position={[-6, 3, -4]} intensity={0.3} color="#a83838" />
      <GroundGrid />
      {buildings.map((b, i) => (
        <BlueprintBuilding key={i} {...b} />
      ))}
      {planes.map((p, i) => (
        <FloatingPlane key={`p-${i}`} position={p.pos} rotation={p.rot} delay={p.delay} size={p.size} />
      ))}
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 1, 9], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
