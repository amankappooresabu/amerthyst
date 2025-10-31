import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera, Center } from '@react-three/drei';
import Herocard from './components/Herocard/Herocard';


// 3D Crown Model Component
function Crown({ scale = 2.5 }) {
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
      groupRef.current.position.set(0, floatY +0.4, -1);
    }
  });
  
  return (
    <group ref={groupRef}>
      <Center>
        <primitive 
          object={scene} 
          scale={[scale, scale, scale]}
        />
      </Center>
    </group>
  );
}

export default function Landing() {

  const [scale, setScale] = useState(2.5);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 500) setScale(0.8);
      else if (width < 768) setScale(1.0);        // mobile - adjust this value later
      else if (width < 1024) setScale(1.4);  // tablet - adjust this value later
      else setScale(1.1);                     // desktop - current default
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);
  return (
    <div 
      id="home"
      className="relative w-full h-[1200px] lg:h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/bg6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    > <div className='flex flex-col lg:flex-row items-center relative w-full top-20 h-full'>
        <div className="w-full flex justify-center items-center mt-25 lg:w-auto lg:mt-0 lg:absolute lg:left-20 lg:top-3/8  lg:-translate-y-1/2 lg:justify-start px-4 lg:px-0 pt-10 lg:pt-0" style={{ zIndex: 1 }}>
  <Herocard />
</div>
      {/* 3D Crown Canvas - Position the container instead */}
      <div 
        className="flex-1 w-full  h-[60vh] lg:absolute lg:top-0 lg:h-full lg:w-[50%]" 
        style={{ 
          zIndex: 2,
          left: window.innerWidth >= 1024 ? '58%' : 'auto'   // ← Adjust width as needed
        }}
      >
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 3]} />
            
            {/* Lighting stays same */}
            <ambientLight intensity={9.0} />
            <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
            <directionalLight position={[-5, 5, 5]} intensity={1.5} color="#ffffff" />
            <spotLight position={[0, 8, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[0, -2, 3]} intensity={1.2} color="#a855f7" />
            
             <Crown scale={scale} />
            
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
      <div 
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: '170px', // Adjust height for gradient spread
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.8) 70%, #000000 100%)',
          zIndex: 4
        }}
      />
    </div>
  );
}