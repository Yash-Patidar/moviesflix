import styled from 'styled-components'

const Bar = ({ movies, setmsg, tag }) => {
  const handleClick = value => () => {
    setmsg(value)
  }

  return (
    <>
      <Container>
        {movies.map(movie => (
          <Images
            src={movie.icon}
            onClick={handleClick(movie)}
            alt={movie.name}
          />
        ))}
      </Container>
    </>
  )
}

export default Bar

const Container = styled.div`
  width: 1250px;
  height: 350;
  margin: auto;
  margin-top: -2rem;
  @media (max-width: 708px) {
    width: 1000px;
    margin: 65px;
  }
`

const Images = styled.img`
  width: 150px;
  height: 200px;
  margin-left: 2.3rem;
  margin-bottom: 3.5rem;
  transition: transform 0.2s;
  color: #fff9c4;
  :hover {
    -ms-transform: scale(1.3); /* IE 9 */
    -webkit-transform: scale(1.3); /* Safari 3-8 */
    transform: scale(1.3);
  }
   @media (max-width: 708px) {
    width: 260px;
    height: 400px;
    margin: 25px;
  }
`

const Title = styled.h3`
  color: #bdee5c;
  margin: auto;
  font-size: 1.5rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
`
