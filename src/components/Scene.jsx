import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const AnimatedShape = () => {
  const meshRef = useRef()
  
  useFrame((state) => {
    const { clock, mouse } = state
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.3
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.3
      // Subtle mouse interaction
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.5, 0.1)
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.5, 0.1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#00f2ff"
          speed={2}
          distort={0.4}
          radius={1}
          emissive="#00f2ff"
          emissiveIntensity={0.5}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </Float>
  )
}

const Scene = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="#9d00ff" intensity={1} />
        <AnimatedShape />
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
    </div>
  )
}

export default Scene
