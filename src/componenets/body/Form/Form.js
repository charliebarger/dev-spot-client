import styled from "styled-components";
import React from "react";

const StyledSignUpForm = styled.form`
  margin: auto;
  background: white;
  padding: 1.5rem;
  max-width: 400px;
  border-radius: 6px;
  box-shadow: 4px 5px 19px #7a7a7a;
`;

const Form = ({ children, submitFunc }) => {
  return <StyledSignUpForm onSubmit={submitFunc}>{children}</StyledSignUpForm>;
};

export default Form;
