import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;

`;


const Logo = styled.img`
    height: 3rem;
`;

const List = styled.ul`
    display: flex;
    gap: 2rem;
    list-style: none;

`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Icon = styled.img`
    width: 1.5rem;
    cursor: pointer;
`;
const Button = styled.button`

`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="https://res.cloudinary.com/db2sa2bxv/image/upload/v1676456828/logoCFC_yswlhx.svg" />
                    <List>
                       <ListItem>Home</ListItem>
                       <ListItem>Studio</ListItem>
                       <ListItem>Works</ListItem>
                       <ListItem>Contact</ListItem>
                    </List>
            </Links>
            <Icons>
                <Icon src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/search.png" />
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar