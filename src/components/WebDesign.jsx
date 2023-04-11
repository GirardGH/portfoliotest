import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Chair from './Chair'

const WebDesign = () => {
  return (
    <Canvas>
      <Chair />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default WebDesign