import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Card from './Card'
import banner from '../assets/mike.jpg'
import Boom from '../assets/BOOMERANG.jpg'
import ceaser from '../assets/ceaser.jpg'
import friday from '../assets/friday.jpg'
import home from '../assets/home.jpg'
import money from '../assets/money.jpg'
import poet from '../assets/poet.jpg'
import set from '../assets/set.jpg'
import morgan from '../assets/morgan.jpg'




const Home = () => {
  return (
    <Container>
        <Navbar/>
        <Banner>

            <img src={banner} alt="banner"/>
            <p className='banner-text'>Welcome to the night life 🌶️</p>
            <p className='banner-text2'>Buy your tickets now!!</p>

        </Banner>
        <Main>
            <Card 
            image={home}
            price={600}
            date="Aired on:01/15/2025"
            title="Coffy watch the black queen in action"
           
            />

            <Card
            image={set}
            price={600}
            title="Set it off one of the classics"
            date="Aired on:12/15/2024"
            />

            <Card
            image={money}
            price={600}
            title="The money is in the bank"
            date="Aired on:02/15/2025"
            />

            <Card
            image={poet}
            price={800}
            title="The poet and the prince"
            date="Aired on:11/15/2024"
            />

            <Card
            image={ceaser}
            price={800}
            title="The GodFather of harlem"
            date="Aired on:10/15/2024"
            />

            <Card
            image={friday}
            price={800}
            date="Aired on:09/15/2024"
            title="Friday night lights"
            />

            <Card
            image={Boom}
            price={800}
            date="Aired on:08/15/2024"
            title="BOOMERANG"
            />
            <Card
            image={morgan}
            price={800}
            date="Aired on:08/15/2024"
            title="Morgan"
            />

          



      </Main>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgb(250, 251, 268);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;
const Banner = styled.div`
  width: 100%;
  position: relative;
  img {
  
    width: 100%;
    height: 300px;
    -webkit-mask-image: linear-gradient(
      to bottom,
     rgba(255, 0, 0, 0.2),
rgba(255, 0, 0, 0.4),
rgba(255, 0, 0, 0.6),
rgba(255, 0, 0, 0.8),
rgba(255, 0, 0, 1)
    );
    

    &:nth-child(2) {
      display: none;
    }

   

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
     .banner-text {
    position: absolute;
    top: 50px; /* Adjust top position as needed */
    right: 20px; /* Adjust right position as needed */
    color: red; /* Adjust color as needed */
    font-weight: bold;
    font-size: 40px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
    .banner-text2 {
    position: absolute;
    top: 100px; /* Adjust top position as needed */
    right: 20px; /* Adjust right position as needed */
    color:black; /* Adjust color as needed */
    font-weight: bold;
    font-size: 40px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

`;
const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;

export default Home
