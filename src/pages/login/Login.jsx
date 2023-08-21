import React, { useContext, useState } from "react";
import {
  FormContainer,
  LoginContainer,
  LoginHeader,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [user,setUser] = useState(false)
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    setUser(true);
    navigate(-1);
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <LoginHeader>Login Here</LoginHeader>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
