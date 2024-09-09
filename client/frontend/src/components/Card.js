import React from "react";
import styled from "styled-components";
import { useStateValue } from "../components/StateProvider";


import {TbTicket} from 'react-icons/tb'



const Card = ({id,image,price,title,date}) => {
    const [{basket},dispatch] = useStateValue();
    const addToBasket = (e) => {
        e.preventDefault();
    
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id,
            title,
            price,
            image,
            date
            
            
          },
        });
      };
  return (
    <Container>
        <Image>
           <img src={image} alt='ocean'/>
        </Image>
        <Description>
            <h3>{title}</h3>
            <p>{date}</p>
           
            <p>{price}</p>

            
            <button onClick={addToBasket}>Add ticket to basket <TbTicket className='icon'/></button>

        </Description>
    </Container>
  )
  
}

const Container = styled.div`
 width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: lightgray;
  margin-top: 250px;
  border-radius: 10px;
  z-index: 10;
`;


const Image = styled.div`
 width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 250px;
    height: 270px;
  }
`

const Description = styled.div`
width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;
   h3 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  .icon{
    margin-bottom: -3px;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: red;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: orange;
    }
  }
`;




export default Card