import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import styled from "styled-components"

const Container = styled.div`
height : 100vh;
background-color : yellow;
`
const Hero = styled.div`
height : 100vh;
background-color : red;
`
const Hero = styled.div`
height : 100vh;
background-color : red;
`
const Hero = styled.div`
height : 100vh;
background-color : red;
`

function App() {

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App