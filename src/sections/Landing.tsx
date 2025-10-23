import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';

// 3D Crown Model Component
function Crown() {
  const crownRef = useRef<any>(null);
  const { scene } = useGLTF('/crown.glb');
  
  // Floating animation and brighten the crown
  useFrame((state) => {
    if (crownRef.current) {
      crownRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
      
      // Make crown brighter by adjusting materials
      crownRef.current.traverse((child: any) => {
        if (child.isMesh) {
          // Brighten the material
          child.material.emissiveIntensity = 1.5; // Brightness boost
          child.material.metalness = 0.8; // More reflective
          child.material.roughness = 0.2; // Smoother/shinier
        }
      });
    }
  });
  
  return <primitive ref={crownRef} object={scene} scale={3} position={[0, 0.5, 0]} rotation={[0.2, -0.3, 0]} />;
}

export default function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 3D Crown Canvas - Full Screen */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            
            {/* Lighting - Brightened for visibility */}
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
            <directionalLight position={[-5, 5, 5]} intensity={1.5} color="#ffffff" />
            <spotLight position={[0, 8, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[0, -2, 3]} intensity={1.2} color="#a855f7" />
            
            {/* Crown Model */}
            <Crown />
            
            {/* Orbit Controls for mouse rotation */}
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Amethyst Shadow Below - Small Oval */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-[300px] h-[60px] pointer-events-none">
        <div 
          className="w-full h-full rounded-full blur-2xl opacity-50"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.8) 0%, rgba(168, 85, 247, 0.5) 40%, transparent 70%)',
            transform: 'scaleY(0.3)'
          }}
        />
      </div>
    </div>
  );
}