import React from 'react'
import styled from "styled-components";
import {TbSearch,TbTicket,TbBasket} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Navbar = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
   
    
    

    
    
    
    
   
  
    const signOut = () => {
      dispatch({
        type: "SET_USER",
        user: null,
      });
  
      localStorage.removeItem("user");
      navigate("/");
    };

  return (
    <Container>
        <Inner>
        <Logo>
            <h1 onClick={()=>navigate('/home')}>Night Movie.ke😎🍿 </h1>
           
        </Logo>
        <SearchBar>
            <input type='text' placeholder='search...'/>
            <SearchIcon >
                <TbSearch/>
            </SearchIcon>
        </SearchBar>
        <RightContainer>
        <NavButton  >
            <p>Hello,</p>
            {user ? ( // Check if user exists before accessing email
              <>
               
                <p>{user.email}</p>
              </>
            ) : (
              <p>Not Logged In</p>
            )}
            
          </NavButton>
          
          <NavButton onClick={() => signOut()}>
            <button>Log Out</button>
          </NavButton>
          <BasketButton onClick={() => navigate("/checkout")} >
            < TbBasket  className='icon'/>
            <p>{basket?.length}</p>
           
          </BasketButton>
            
        </RightContainer>
        </Inner>
    </Container>
   
  )
}

const Container = styled.div`
width: 100%;
  height: 60px;
  background-color: red;
  display: flex;
  align-items: center;
  position: relative;
 
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
margin-left: 20px;
  cursor: pointer;
  h1{
    color: white;
    font-weight: 500;
    font-size: 20px;
  }

`

const SearchBar = styled.div`
 height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 5px;
    }
  }
`

const SearchIcon = styled.div`
 background-color: #f6f6f6;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
    cursor: pointer;
  }
`

const RightContainer = styled.div`
display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
  margin-right: 20px;
`

const NavButton = styled.div`
color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;

  p {
    &:nth-child(1) {
      font-size: 12px;
      
    }

    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
      margin-top: -0.3px;
    }
  }

  button {
    width: 120%;
    border: none;
    background-color: orange;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: #dfdfdf;
      border: 1px solid gray;
    }
  }
`

const BasketButton = styled.div`
display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  margin-left: 25px;

  .icon {
  font-size: 30px;
  color: #fff;
  margin-left: 5px;
  
  }

 

  p {
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    margin-top:3px;
  }
`



export default Navbar