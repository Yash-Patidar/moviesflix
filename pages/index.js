import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Bar from '../components/Bar'
import client from './api/apollo-client'
import { gql } from '@apollo/client'
import { useState } from 'react'


const Home = ({ movies }) => {
  const [msg, setmsg] = useState(movies[0])
  const [tag, settag] = useState('top')
  console.log(tag)

  return (
    <>
      <Navbar settag={settag} />
      <Main msg={msg} />
      <Bar movies={movies} setmsg={setmsg} tag={tag} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query all_movies{
        allmovies{
         id
         name
         Stream
         imdb
         description
         play
         icon
         poster
        }
      }
    `,
  });

  return {
    props: {
      movies: data.allmovies
    },
  };
}

export default Home

