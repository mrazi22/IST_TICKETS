import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Successful = () => {
  


  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue(); // Access basket state and dispatch

  const handleReturnToHome = () => {
    // Clear the cart by dispatching an action
    dispatch({
      type: 'EMPTY_BASKET',
    });

    navigate('/home'); // Navigate back to the home page
  };
  return (
    <Container>
      <Main>
        <SuccessMessage>
          <CheckmarkIcon>✅</CheckmarkIcon>
          <h2>Order Placed Successfully!</h2>
          <p>Your will receive the tickets in your email.</p>
        </SuccessMessage>
        <ButtonContainer>
          <button onClick={handleReturnToHome}>Return Home</button>
        </ButtonContainer>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  background-color: rgb(234, 237, 237);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Main = styled.div`
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
`;

const SuccessMessage = styled.div`
  padding: 30px;
  h2 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;

const CheckmarkIcon = styled.span`
  font-size: 72px;
  color: #33cc33;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;

  button {
    background-color: #ffd814;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: orange;
    }
  }
`;

export default Successful;