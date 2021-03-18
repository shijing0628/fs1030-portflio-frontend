import styled from "styled-components";
import background from "../../images/login-bg.jpg";
import { Link } from "react-router-dom";

// login page style
export const colors = {
  primary: "#fff",
  theme: "#50248F",
  light1: "#f3f4f6",
  light2: "#e5e7eb",
  dark1: "#1f2937",
  dark2: "#4b5563",
  dark3: "#9ca3af",
  red: "#ED6347",
  orange: "#FFC48B",
};

// components
export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-item: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${background});
  background-size: cover;
  background-attachment: fixed;
`;

//input field
export const StyledTextInput = styled.input`
  width: 280px;
  padding: 15px;
  padding-left: 50px;
  font-size: 16px;
  letting-spacing: 1px;
  color: ${colors.dark1};
  background-color: ${colors.light2};
  border: 0;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;
  outline: 0;
  ${(props) =>
    props.invalid &&
    `background-color:${colors.orange}; color:${colors.primary};`}

  &:focus {
    background-color: #fff;
    color: ${colors.dark1};
  }
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: bold;
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || colors.primary};
  text-align: center;
  padding: 40px 40px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  border-radius: 10px;
  color: ${colors.theme};
  text-align: center;
  transition: ease-in-out 0.5s;
  outline: 0;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

// login page icons
export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 21px;
  top: 35px;

  ${(props) => props.right && `right:15px;`};
  ${(props) => !props.right && `left:15px;`};
`;

//display yup invalidate messge
export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${colors.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

//sign up link style
export const ExtraText = styled.p`
font-size:${(props) => props.size}px;
text-align:center;
color${(props) => (props.color ? props.color : colors.dark2)};
padding:2px;
margin-top:10px;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
    color: ${colors.red};
  }
`;

export const CopyrightText = styled.p`
  padding: 5px;
  margin: 20px;
  text-align: center;
  color: ${colors.theme};
`;
