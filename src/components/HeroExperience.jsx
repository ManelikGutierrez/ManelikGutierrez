import { OrbitControls, PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import React, { useState } from 'react'
import { Room } from './Room.jsx'
import { HeroLights } from './HeroLights.jsx'

export const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // State for dynamic DPR (pixel density)
  const [dpr, setDpr] = useState(1)

  return (
    <Canvas camera={{ position: [10, 5, 15], fov: 45 }} dpr={dpr}>
      {/* Dynamically adjust dpr based on performance */}
      <PerformanceMonitor
        onDecline={() => setDpr(0.5)} // Lower quality on low FPS
        onIncline={() => setDpr(1)}   // Restore quality on good FPS
      />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />

      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      

      <Room />
    </Canvas>
  )
}
