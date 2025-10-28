import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera, Center } from '@react-three/drei';
import Herocard from './components/Herocard';


// 3D Crown Model Component
function Crown() {
  const groupRef = useRef<any>(null);
  const { scene } = useGLTF('/crown.glb');
  
  useFrame((state) => {
    if (groupRef.current) {
      // Brighten materials
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material.emissiveIntensity = 1.5;
          child.material.metalness = 0.8;
          child.material.roughness = 0.2;
        }
      });

      // Floating effect
      const floatY = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
      groupRef.current.position.set(0, floatY, -1);
    }
  });
  
  return (
    <group ref={groupRef}>
      <Center>
        <primitive 
          object={scene} 
          scale={[2.5, 2.5, 2.5]}
        />
      </Center>
    </group>
  );
}

export default function Landing() {
  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/bg6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
        <div className="absolute left-20 top-1/2 -translate-y-1/2" style={{ zIndex: 3 }}>
  <Herocard />
</div>
      {/* 3D Crown Canvas - Position the container instead */}
      <div 
        className="absolute top-0 h-full" 
        style={{ 
          zIndex: 2,
          left: '58%',  // ← Adjust this to move left/right
          width: '50%'   // ← Adjust width as needed
        }}
      >
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            
            {/* Lighting stays same */}
            <ambientLight intensity={9.0} />
            <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
            <directionalLight position={[-5, 5, 5]} intensity={1.5} color="#ffffff" />
            <spotLight position={[0, 8, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[0, -2, 3]} intensity={1.2} color="#a855f7" />
            
            <Crown />
            
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
              target={[0, 0, -1]}  // ← Keep at [0, 0, -1]
              enableDamping={true}
              dampingFactor={0.05}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}