import styled, { css } from 'styled-components';

const buttonStyles = css`
  /* background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  } */
  border: none;
  border-radius: 6px;
  color: ${props => props.isGoogleSignIn ? '#4285F4' : '#61677C'};
  font-weight: bold;
  box-shadow: -5px -5px 10px #fff,  5px 5px 10px #BABECC;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #BABECC;
  }
  &:focus {
    outline: none;
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #BABECC;
  }
`;

// const invertedButtonStyles = css`
//   background-color: white;
//   color: black;
//   border: 1px solid black;

//   &:hover {
//     background-color: black;
//     color: white;
//     border: none;
//   }
// `;

// const googleSignInStyles = css`
//   color: #4285F4;
//   border: none;

//   &:hover {
//     color: #357AE8;
//   }
// `;

// const getButtonStyles = props => {
//   if (props.isGoogleSignIn) {
//     return googleSignInStyles;
//   }

//   return props.inverted ? invertedButtonStyles : buttonStyles; 
// };

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${buttonStyles}
`;