import React from "react";
import {
  StyledContainer,
  StyledSubTitle,
  Styledtitle,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "./style.js";
import Logo from "../../images/logo.png";

function RegisterUser() {
  return (
    <>
      <StyledContainer>
        <div
          style={{
            position: "absolute",
            top: "150px",
            left: "0px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            zIndex: "10",
          }}
        >
          <Avatar image={Logo} />
        </div>
        <Styledtitle size={65}>Login to Dashboard</Styledtitle>
        <StyledSubTitle size={27}>Feel Free to Register</StyledSubTitle>
        <ButtonGroup>
          <StyledButton to="/auth">Login</StyledButton>
          <StyledButton to="/users">SignUp</StyledButton>
        </ButtonGroup>
      </StyledContainer>
    </>
  );
}

export default RegisterUser;
