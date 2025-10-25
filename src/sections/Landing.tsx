import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
// import './styles.scss';

// 3D Crown Model Component
function Crown() {
  const crownRef = useRef<any>(null);
  const { scene } = useGLTF('/crown.glb');
  const [animationPhase, setAnimationPhase] = useState<'intro' | 'moving' | 'floating'>('intro');
  const animationProgress = useRef(0);
  
  // TIMING CONTROL: Adjust these values to change animation duration
  const INTRO_DURATION = 1.5; // seconds (intro rotation phase)
  const MOVE_DURATION = 2.0;   // seconds (moving to right phase)
  
  useEffect(() => {
    const introTimer = setTimeout(() => {
      setAnimationPhase('moving');
    }, INTRO_DURATION * 1000);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (animationPhase === 'moving') {
      const moveTimer = setTimeout(() => {
        setAnimationPhase('floating');
      }, MOVE_DURATION * 1000);
      return () => clearTimeout(moveTimer);
    }
  }, [animationPhase]);
  
  useFrame((state, delta) => {
    if (crownRef.current) {
      // Brighten materials (done once per frame, simple operation)
      crownRef.current.traverse((child: any) => {
        if (child.isMesh) {
          child.material.emissiveIntensity = 1.5;
          child.material.metalness = 0.8;
          child.material.roughness = 0.2;
        }
      });

      // Floating effect (applies to all phases)
      const floatY = 0.5 + Math.sin(state.clock.elapsedTime * 0.6) * 0.2;

      if (animationPhase === 'intro') {
        // INTRO PHASE: Fast rotation in center
        // ROTATION SPEED: delta * 2.5 (adjust multiplier for faster/slower)
        crownRef.current.rotation.y += delta * 4;
        crownRef.current.position.set(0, floatY, 0);
        crownRef.current.scale.set(3, 3, 3); // Full size
        
      }  else if (animationPhase === 'moving') {
  // MOVING PHASE: Transition to right while scaling down
  animationProgress.current += delta / MOVE_DURATION;
  const progress = Math.min(animationProgress.current, 1);
  const eased = progress * progress * (3 - 2 * progress); // Smoothstep easing
  
  // POSITION: Moves from x=0 to x=4 (adjust final value to move more/less right)
  crownRef.current.position.x = eased * 4;
  crownRef.current.position.y = floatY;
  
  // SCALE: Reduces from 3 to 2 (adjust these values for size change)
  const startScale = 3;
  const endScale = 2;
  const currentScale = startScale - (eased * (startScale - endScale));
  crownRef.current.scale.set(currentScale, currentScale, currentScale);
  
  // ROTATION: Smoothly transition ALL axes to final rotation angles
  const targetRotationX = 0.3;
  const targetRotationY = 2.0;
  const targetRotationZ = 0;
  
  // Interpolate factor increases as animation progresses
  const lerpFactor = eased * 0.15; // Adjust 0.15 for faster/slower transition
  
  // Smoothly interpolate ALL rotation axes towards target
  crownRef.current.rotation.x += (targetRotationX - crownRef.current.rotation.x) * lerpFactor;
  crownRef.current.rotation.y += (targetRotationY - crownRef.current.rotation.y) * lerpFactor;
  crownRef.current.rotation.z += (targetRotationZ - crownRef.current.rotation.z) * lerpFactor;
  
} else if (animationPhase === 'floating') {
        // FLOATING PHASE: Stay on right, NO rotation - just float
        // ADJUST POSITION: Change x value (4) to move left/right, y for up/down, z for forward/back
        crownRef.current.position.set(4, floatY, 0);
        crownRef.current.scale.set(2, 2, 2); // Final size
        crownRef.current.rotation.set(0.3, 2.0, 0);
        
      }
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

      {/* Glass Cards Container - COMMENTED FOR NOW */}
      {/* <div className="glass-cards-container">
        <div className="glass-card about-card">
          <h2 className="glass-card-title">About Us</h2>
          <p className="glass-card-text">
            We are dedicated to crafting exceptional experiences that blend 
            tradition with innovation. Our passion lies in creating timeless 
            pieces that tell stories and celebrate excellence. Every creation 
            reflects our commitment to quality and artistic mastery.
          </p>
        </div>

        <div className="glass-card products-card">
          <h2 className="glass-card-title">Our Products</h2>
          <p className="glass-card-text">
            Discover our exquisite collection of handcrafted masterpieces. 
            Each piece is meticulously designed to perfection, combining 
            elegance with functionality. Explore a world where craftsmanship 
            meets contemporary design.
          </p>
          <button className="products-button">
            See Our Products
          </button>
        </div>
      </div> */}

      {/* Amethyst Shadow Below - Small Oval */}
      {/* <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-[300px] h-[60px] pointer-events-none">
        <div 
          className="w-full h-full rounded-full blur-2xl opacity-50"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.8) 0%, rgba(168, 85, 247, 0.5) 40%, transparent 70%)',
            transform: 'scaleY(0.3)'
          }}
        />
      </div> */}
    </div>
  );
}