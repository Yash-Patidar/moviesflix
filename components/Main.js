import styled from 'styled-components'
import Image from 'next/image'

const Main = ({ msg }) => {
  return (
    <>
      <Container>
        <M_img>
          <Images src={msg.poster} />
        </M_img>
        <Details>
          <Headers>
            <Title>{msg.Stream}</Title>
            <Title>IMDB {msg.imdb}</Title>
          </Headers>
          <Name> {msg.name}</Name>
          <Bio> {msg.description}</Bio>
          <Buttons>
            <a href={msg.play} target='_blank'>
              <Button>Play</Button>
            </a>
            <Button>More</Button>
          </Buttons>
        </Details>
      </Container>
    </>
  )
}

export default Main

const Container = styled.div`
  width: 1000px;
  height: 400px;
  margin: auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;

  font-family: Georgia, 'Times New Roman', Times, serif;

  @media (max-width: 708px) {
    width: 300px;
    height: 800px;
    flex-direction: column;
  }
`

const Images = styled.img`
  width: 450px;
  height: 300px;
  margin-left: 1rem;
  margin-top: 3rem;
  transition: transform 0.2s;
  color: #fff9c4;
  :hover {
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: scale(1.1);
  }
  @media (max-width: 708px) {
    width: 800px;
    height: 500px;
  }
`
const M_img = styled.div`
  border-radius: 25px;
  margin-left: 10rem;
`

const Details = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  color: #bdee5c;
  margin: 2rem;
  @media (max-width: 708px) {
    width: 800px;
    margin: 7rem;
  }
`

const Headers = styled.div`
  display: flex;
`

const Title = styled.h3`
  color: #bdee5c;
  margin: auto;
  font-size: 1.5rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
`

const Name = styled.h2`
  color: white;
  margin-left: auto;
  margin-right: auto;
  font-size: 3rem;
`

const Bio = styled.div`
  color: yellow;
  font-size: 2rem;
`

const Buttons = styled.div`
  margin: auto;
`

const Button = styled.button`
  color: black;
  background-color: #bdee5c;
  margin: 2rem;
  border-radius: 25px;
  width: 100px;
  height: 45px;
  border: 2px solid red;

  :hover {
    background: black;
    color: white;
  }
`
