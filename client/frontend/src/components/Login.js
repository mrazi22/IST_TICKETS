import React ,{useState,useEffect} from 'react'
import styled from "styled-components";
import { TbTicket,TbMovie } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";

import axios from "axios";
import{useStateValue} from './StateProvider'


const Login = () => {

  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const [{}, dispatch] = useStateValue();

  const [response, setResponse] = useState(null); // To store login response

// ... other code

const login = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:5000/login", {
      email,
      password,
      role, // Assuming you're sending the role in the request body
    });
    setResponse(response); // Update response state
    if (response.data.error) {
      // Handle server-side login error (e.g., invalid credentials)
      alert(response.data.error); // Or display a more user-friendly error message
    } else {
      dispatch({
        type: "SET_USER",
        user: response.data,
      });
      localStorage.setItem("user", JSON.stringify(response.data));
    }
  } catch (error) {
    console.error("Login Error:", error);
    alert("An error occurred during login."); // Or display a more informative message
  }
};

useEffect(() => {
  if (response && response.data) { // Check for response and data
    if (response.role === 'admin') {
      navigate("/adminDashboard");
    } else {
      navigate("/home");
    }
  }
}, [response]); // Dependency on response state
  
 
  
  

  return (
    <Container>
      <Logo>
        <h3>Welcome to movie nights with the gang <TbMovie className='icon'/> </h3>
      </Logo>
      <FormContainer>
        <h3>Login <TbTicket className='icona'/></h3>

        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
           
          />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
           
          />
        </InputContainer>
        <InputContainer>
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Select Role"
      />
      </InputContainer>

        <LoginButton  onClick={login} >Login</LoginButton>

        <InfoText>
          By continuing, you agree to Waka's <span>Conditions of Use </span>
          and <span> Privacy Notice</span>
        </InfoText>
        <SignUpButton onClick={() => navigate("/signup")} >
        Create Account
      </SignUpButton>
      </FormContainer>
      
    </Container>
  )
}

const Container = styled.div`
width: 40%;
min-width: 450px;
height: fit-content;
padding: 15px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;



`

const Logo = styled.div`

.icon{
margin-bottom: -6px;

}

`

const FormContainer = styled.div`
border: 1px solid lightgray;
width: 75%;
height: 450px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px;
margin-top: 50px;

h3 {
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  align-self: flex-start;

  margin-bottom: 20px;
}

.icona{
  margin-bottom: -6px;
}

`

const InputContainer = styled.div`
width: 100%;
padding: 10px;

p {
  font-size: 14px;
  font-weight: 600;
}

input {
  width: 95%;
  height: 33px;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-top: 5px;

  &:hover {
    border: 1px solid orange;
  }
}`

const LoginButton = styled.button`
width: 70%;
height: 35px;
background-color: #FF0000;
border: none;
outline: none;
border-radius: 10px;
margin-top: 30px;
cursor: pointer;
color: white;
font-size: 14px;

&:hover {
  background-color: orange;
}
`

const InfoText = styled.div`
font-size: 12px;
width: 100%;
word-wrap: normal;
word-break: normal;
margin-top: 20px;

span {
  color: #426bc0;
  cursor: pointer;
}
`

const SignUpButton = styled.button`
width: 55%;
height: 35px;
font-size: 12px;
margin-top: 20px;
border-radius: 10px;
border: 1px solid lightgray;
cursor: pointer;

&:hover {
  background-color: #dfdfdf;
  border: 1px solid gray;
}
`


export default Login