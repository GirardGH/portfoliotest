import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



const Cube = () => {
  const textRef = useRef();
  useFrame(state=> (textRef.current.position.x = Math.sin(state.clock.getElapsedTime)));

  return (
    <group>
    <mesh>
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial>
          <RenderTexture attach={"map"}>
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
            <color attach="background" args={["aqua"]}/>
            <Text ref={textRef} fontSize={1} color="black">
            hello
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
    </mesh> 
    </group> 
    
    )
}

export default Cube