import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet, isDarkMode }) => {
  // Chane 3D model - https://sketchfab.com/

  const galaxy = useGLTF("./galaxy/scene.gltf");
  const office = useGLTF("./60s_office_props/scene.gltf");
  return (
    <mesh>
      {console.log(isDarkMode)}
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={isDarkMode ? galaxy.scene : office.scene}
        scale={
          isDarkMode
            ? isMobile
              ? 1.5
              : isTablet
              ? 2.5
              : 3.5
            : isMobile
            ? 0.5
            : isTablet
            ? 0.7
            : 1.0
        }
        position={isDarkMode ? [0, -1.5, 0] : [0, -2, 0]}
        rotation={isDarkMode ? [-0.2, -0.5, -0.6] : [0, 1.4, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({ isDarkMode, isMobile, isTablet }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers
          isMobile={isMobile}
          isTablet={isTablet}
          isDarkMode={isDarkMode}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
