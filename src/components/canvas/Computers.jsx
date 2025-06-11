import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';
import FullscreenLoader from "../FullscreenLoader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.54}
        position={isMobile ? [-5.7, -1.5, -2.2] : [0, -2, -1.5]}
        rotation={[-0.01, -0.1, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Show loader initially
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    // Fail-safe timeout for mobile crash
    const crashTimeout = setTimeout(() => {
      if (isMobile) {
        setShouldRenderCanvas(false);
      }
    }, 4000);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      clearTimeout(loaderTimeout);
      clearTimeout(crashTimeout);
    };
  }, [isMobile]);

  if (!shouldRenderCanvas && isMobile) {
    return (
      <div className="w-full h-[350px] bg-black flex items-center justify-center text-white z-10">
        <p className="text-lg">3D Model disabled on mobile</p>
      </div>
    );
  }

  return (
    <>
      {showLoader && <FullscreenLoader />}
      <div className="absolute inset-0 w-full h-full z-[10]">
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true, alpha: true }}
          style={{ background: 'transparent' }}
          onCreated={({ gl }) => {
            gl.setClearColor(new THREE.Color(0x000000), 0);
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              enableRotate={true}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </>
  );
};

export default ComputersCanvas;