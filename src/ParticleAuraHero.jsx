import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';

const noise3D = createNoise3D();

// 1. BACKGROUND FLOATING SQUARES
const BackgroundSquares = ({ mouseRef }) => {
  const count = 50;
  const meshRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 20;
      const z = -2 - Math.random() * 8;
      const size = Math.random() * 0.8 + 0.3;
      const speed = Math.random() * 0.01 + 0.005;
      const rotSpeed = Math.random() * 0.01;
      temp.push({ x, y, z, size, speed, rotSpeed });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !meshRef.current.children) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.children.forEach((child, i) => {
      const p = particles[i];
      // Drifts slightly with global mouse
      const driftX = mouseRef.current[0] * 2.5;
      const driftY = mouseRef.current[1] * 2.5;
      child.position.x = THREE.MathUtils.lerp(child.position.x, p.x + driftX, 0.02);
      child.position.y = p.y + Math.sin(time * p.speed + i) * 1.5 + driftY;
      child.rotation.z += p.rotSpeed;
      child.rotation.x += p.rotSpeed * 0.5;
    });
  });

  return (
    <group ref={meshRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <planeGeometry args={[p.size, p.size]} />
          <meshBasicMaterial
            color="#C06722"
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

// 2. THE ORGANIC AURA BLOB
const AuraBlob = ({ mouseRef }) => {
  const meshRef = useRef();
  const shellRef = useRef();
  const { viewport } = useThree();

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.4, 40), []);
  const originalPositions = useMemo(() => geometry.attributes.position.array.slice(), [geometry]);

  useFrame((state) => {
    if (!meshRef.current || !shellRef.current || !meshRef.current.parent) return;
    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position.array;
    const shellPositions = shellRef.current.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i];
      const y = originalPositions[i + 1];
      const z = originalPositions[i + 2];

      const noise = noise3D(x * 0.3 + time * 0.15, y * 0.3 + time * 0.15, z * 0.3 + time * 0.15);
      const displacement = 1 + noise * 0.45;

      positions[i] = x * displacement;
      positions[i + 1] = y * displacement;
      positions[i + 2] = z * displacement;

      const shellNoise = noise3D(x * 0.2 + time * 0.1, y * 0.2 + time * 0.1, z * 0.2 + time * 0.1);
      const shellDisplacement = 1.05 + shellNoise * 0.5;
      shellPositions[i] = x * shellDisplacement;
      shellPositions[i + 1] = y * shellDisplacement;
      shellPositions[i + 2] = z * shellDisplacement;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    shellRef.current.geometry.attributes.position.needsUpdate = true;

    meshRef.current.rotation.y = time * 0.08;
    shellRef.current.rotation.y = -time * 0.04;

    // Use global normalized mouse coordinates for responsive float
    const mx = mouseRef.current[0] * (viewport.width / 5);
    const my = mouseRef.current[1] * (viewport.height / 5);
    const targetX = viewport.width > 10 ? 4 : 0;

    meshRef.current.parent.position.x = THREE.MathUtils.lerp(meshRef.current.parent.position.x, targetX + mx, 0.05);
    meshRef.current.parent.position.y = THREE.MathUtils.lerp(meshRef.current.parent.position.y, 0 + my, 0.05);
  });

  return (
    <group position={[4, 0, 0]}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#FDB931"
          transparent
          opacity={0.7}
          roughness={0}
          metalness={1}
          emissive="#C06722"
          emissiveIntensity={0.6}
        />
      </mesh>
      <mesh ref={shellRef} geometry={geometry}>
        <meshPhongMaterial
          color="#FDB931"
          wireframe={true}
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh scale={0.8}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#C06722" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};

const SceneController = ({ mouseRef, currentMouseRef }) => {
  useFrame(() => {
    // Ultra-smooth lerp for mouse coordinates
    currentMouseRef.current[0] = THREE.MathUtils.lerp(currentMouseRef.current[0], mouseRef.current[0], 0.05);
    currentMouseRef.current[1] = THREE.MathUtils.lerp(currentMouseRef.current[1], mouseRef.current[1], 0.05);
  });
  return null;
};

const ParticleAuraHero = () => {
  const mouseRef = useRef([0, 0]); // Target
  const currentMouseRef = useRef([0, 0]); // Smoothed

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current = [x, y];
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      background: '#1A0F00',
      overflow: 'hidden'
    }}>
      <Canvas
        dpr={[1, 1.5]} // Performance optimized high-DPI
        camera={{ position: [0, 0, 12], fov: 30 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[15, 20, 10]} angle={0.3} penumbra={1} intensity={2} color="#FDB931" />
        <pointLight position={[-10, -10, 5]} intensity={1} color="#C06722" />

        <SceneController mouseRef={mouseRef} currentMouseRef={currentMouseRef} />
        <BackgroundSquares mouseRef={currentMouseRef} />
        <AuraBlob mouseRef={currentMouseRef} />
      </Canvas>

      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 75% 50%, transparent 0%, rgba(26, 15, 0, 0.3) 45%, #1A0F00 95%)'
      }} />
    </div>
  );
};

export default ParticleAuraHero;