import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;