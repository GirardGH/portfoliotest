import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'


const Section = styled.div`
height : 100vh;
scroll-snap-align : center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
height: 100vh;
scroll-snap-align : center;
width: 1400px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;

`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`


const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Img = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  Left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`;



const Hero = () => {


  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think, bla bla bla</Title>
          <WhatWeDo>
            <Line src="https://raw.githubusercontent.com/safak/youtube23/3d-portfolio/public/img/line.png" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>we enjoy the description</Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial 
              color="#3d1c56" 
              attach="material" 
              distort={0.5} 
              speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="https://raw.githubusercontent.com/safak/youtube23/3d-portfolio/public/img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero