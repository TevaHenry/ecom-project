import styled from 'styled-components';

export const ContactFormContainer = styled.form`
  width: 50%;

  textarea {
    resize: none;
    margin: 30px;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 6px;
    margin: 25px 0;
    box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #fff;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;

    &:focus {
      box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px #fff;
      outline: none;
    }
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;