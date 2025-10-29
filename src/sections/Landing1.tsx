// import { Suspense, useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';

// // 3D Crown Model Component
// function Crown({ onRotationChange, controlsRef }: { onRotationChange: (rotation: { azimuth: number; polar: number }) => void; controlsRef: React.RefObject<any> })  {
//   const crownRef = useRef<any>(null);
//   const { scene } = useGLTF('/crown.glb');
//   const [animationPhase, setAnimationPhase] = useState<'entering' | 'rotating' | 'shrinking' | 'floating'>('entering');
//   const animationProgress = useRef(0);
  
//   const ENTER_DURATION = 1.2;
//   const ROTATE_DURATION = 1.5;
//   const SHRINK_DURATION = 1.0;
  
//   useEffect(() => {
//     const enterTimer = setTimeout(() => setAnimationPhase('rotating'), ENTER_DURATION * 1000);
//     return () => clearTimeout(enterTimer);
//   }, []);

//   useEffect(() => {
//     if (animationPhase === 'rotating') {
//       const rotateTimer = setTimeout(() => {
//         setAnimationPhase('shrinking');
//         animationProgress.current = 0;
//       }, ROTATE_DURATION * 1000);
//       return () => clearTimeout(rotateTimer);
//     }
//   }, [animationPhase]);

//   useEffect(() => {
//     if (animationPhase === 'shrinking') {
//       const shrinkTimer = setTimeout(() => {
//         setAnimationPhase('floating');
//         animationProgress.current = 0;
//       }, SHRINK_DURATION * 1000);
//       return () => clearTimeout(shrinkTimer);
//     }
//   }, [animationPhase]);
  
//   useFrame((state, delta) => {
//     if (crownRef.current) {
//       crownRef.current.traverse((child: any) => {
//         if (child.isMesh) {
//           child.material.emissiveIntensity = 1.5;
//           child.material.metalness = 0.8;
//           child.material.roughness = 0.2;
//         }
//       });

//       const floatY = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;

//       if (animationPhase === 'entering') {
//         animationProgress.current += delta / ENTER_DURATION;
//         const progress = Math.min(animationProgress.current, 1);
//         const eased = 1 - Math.pow(1 - progress, 3);
        
//         crownRef.current.position.y = 5 - (eased * 4.5) + floatY;
//         crownRef.current.position.x = 0;
//         crownRef.current.position.z = 0;
//         crownRef.current.rotation.set(0, 0, 0);
//         crownRef.current.scale.set(3.5, 3.5, 3.5);
        
//       } else if (animationPhase === 'rotating') {
//         crownRef.current.rotation.y += delta * 2;
//         crownRef.current.rotation.x = 0;
//         crownRef.current.rotation.z = 0;
//         crownRef.current.position.set(0, 0.5 + floatY, 0);
//         crownRef.current.scale.set(3.5, 3.5, 3.5);
        
//       } else if (animationPhase === 'shrinking') {
//         animationProgress.current += delta / SHRINK_DURATION;
//         const progress = Math.min(animationProgress.current, 1);
//         const eased = progress * progress * (3 - 2 * progress);
        
//         const startScale = 3.5;
//         const endScale = 2.5;
//         const currentScale = startScale - (eased * (startScale - endScale));
//         crownRef.current.scale.set(currentScale, currentScale, currentScale);
//         crownRef.current.position.set(0, 0.5 + floatY, 0);
        
//       } else if (animationPhase === 'floating') {
//         crownRef.current.position.set(0, 0.5 + floatY, 0);
//         crownRef.current.scale.set(2.5, 2.5, 2.5);
//       }

//       // Send camera rotation to parent for title movement (only in floating phase)
//       if (onRotationChange && animationPhase === 'floating' && controlsRef?.current) {
//         const azimuth = controlsRef.current.getAzimuthalAngle();
//         const polar = controlsRef.current.getPolarAngle();
//         onRotationChange({ azimuth, polar });
//       }
//     }
//   });
  
//   // Reset any built-in rotation from the model
//   useEffect(() => {
//     if (scene) {
//       scene.rotation.set(0, 0, 0);
//     }
//   }, [scene]);
  
//   return <primitive ref={crownRef} object={scene} scale={3.5} position={[0, 5, 0]} rotation={[0, 0, 0]} />;
// }

// export default function Landing() {
//   const [titleOpacity, setTitleOpacity] = useState(0);
//   const [titlePosition, setTitlePosition] = useState({ x: 0, y: 0 });
//   const lastRotation = useRef({ azimuth: 0, polar: Math.PI / 2 });
//   const [isInteractive, setIsInteractive] = useState(false);
//   const controlsRef = useRef<any>(null);

//   useEffect(() => {
//     // Title fades in AFTER all animations complete (enter + rotate + shrink)
//     const titleTimer = setTimeout(() => {
//       setTitleOpacity(1);
//       setIsInteractive(true);
//     }, 3700); // 1.2 + 1.5 + 1.0 = 3.7s
//     return () => clearTimeout(titleTimer);
//   }, []);

//   const handleRotationChange = (rotation: { azimuth: number; polar: number }) => {
//     if (!isInteractive) return;
    
//     // Calculate delta rotation
//     const deltaAzimuth = rotation.azimuth - lastRotation.current.azimuth;
//     const deltaPolar = rotation.polar - lastRotation.current.polar;
    
//     // Opposite direction movement
//     // Azimuth (left/right) - opposite horizontal movement
//     // Polar (up/down) - opposite vertical movement
//     const moveX = -deltaAzimuth * 150;
//     const moveY = -deltaPolar * 150;
    
//     setTitlePosition(prev => ({
//       x: prev.x + moveX,
//       y: prev.y + moveY
//     }));
    
//     lastRotation.current = { azimuth: rotation.azimuth, polar: rotation.polar };
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden " style={{
//     backgroundImage: 'url(/bg5.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat'
//   }}>
  
//       {/* Title Background */}
//       <div 
//         className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
//         style={{
//           opacity: titleOpacity,
//           transition: 'opacity 1.5s ease-in-out',
//           zIndex: 1
//         }}
//       >
//         <div
//           style={{
//             transform: `translate(${titlePosition.x}px, ${titlePosition.y}px)`,
//             transition: 'transform 0.2s ease-out',
//             fontSize: '7rem',
//             fontWeight: '900',
//             letterSpacing: '0.02em',
//             fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
//             opacity: 0.30,
//             lineHeight: 0.9,
//             textAlign: 'center',
            
//           }}
//         >
//           <div>
//             <span style={{ color: '#888888' }}>PURPLE</span>
//           </div>
//           <div>
//             <span style={{ color: '#7B337E' }}>SKY</span>
//           </div>
//           <div>
//             <span style={{ color: '#888888' }}>TRADE</span>
//           </div>
//         </div>
//       </div>

//       {/* 3D Crown Canvas */}
//       <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 2 }}>
//         <Canvas>
//           <Suspense fallback={null}>
//             <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            
//             <ambientLight intensity={1.2} />
//             <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
//             <directionalLight position={[-5, 5, 5]} intensity={1.5} color="#ffffff" />
//             <spotLight position={[0, 8, 5]} intensity={2} color="#ffffff" />
//             <pointLight position={[0, -2, 3]} intensity={1.2} color="#a855f7" />
            
//             <Crown onRotationChange={handleRotationChange} controlsRef={controlsRef} />
            
//             <OrbitControls 
//               ref={controlsRef}
//               enableZoom={false}
//               enablePan={false}
//               minPolarAngle={Math.PI / 2.5}
//               maxPolarAngle={Math.PI / 1.8}
//               minAzimuthAngle={-Math.PI / 3}
//               maxAzimuthAngle={Math.PI / 3}
//               target={[0, 0.5, 0]}
//               enableDamping={true}
//               dampingFactor={0.05}
//             />
//           </Suspense>
//         </Canvas>
//       </div>
//     </div>
//   );
// }