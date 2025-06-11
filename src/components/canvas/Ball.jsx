import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} intensity={0.8} />

      <mesh castShadow receiveShadow scale={isMobile ? 2.1 : 2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          flatShading
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
      setIsLowEndDevice(true);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  if (isLowEndDevice) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-center p-4">
        <p className="text-sm md:text-base">
          3D Ball rendering is disabled on low-end devices to ensure smooth performance.
        </p>
      </div>
    );
  }

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
