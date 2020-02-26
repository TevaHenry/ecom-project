import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  text-shadow: 1px 1px 1px #fff;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  text-transform: uppercase;
  font-size: 2.5em;


  /* @media screen and (max-width: 800px) {
    width: 50px;
  } */
`;

export const OptionsContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 50px;

  @media screen and (max-width: 800px) {
    margin-right: 10px;
  }
`;

OptionLink.displayName = 'OptionLink';

export const CartIconContainer = styled.div`
  border-radius: 50%;
  background: #e4eef3;
  box-shadow: ${({ pressed }) => pressed ? '10px 10px 15px #cbd4d8, -10px -10px 15px #fdffff' : 'inset 10px 10px 15px #cbd4d8, inset -10px -10px 15px #fdffff'};
`;