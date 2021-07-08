import styled from "styled-components"

styled

function Navbar({settag}) {

    const tagClick = value => () => {
        settag(value)
      };
    
    

    return (
        <div>
            <Nav>
            <Title >Home</Title>
            <Title onClick={tagClick('new')}>New</Title>
            <Title onClick={tagClick('top')}>Top</Title>
            <Title onClick={tagClick('best')}>Best</Title>
            <Title>Search</Title>

            </Nav>
        </div>
    )
}

export default Navbar

const Nav = styled.div`
height:50px;
width:1000px;
border-radius:25px;
margin: auto;
margin-top:1rem;
background-color:black;
/* background-color: transparent; */
display:flex;

 @media (max-width: 708px) {
    margin: 3rem;
  }
`;
 
const Title = styled.h3`
color:#BDEE5C;
margin:auto;
font-size: 1.5rem;
font-family: Georgia, 'Times New Roman', Times, serif;
`;


