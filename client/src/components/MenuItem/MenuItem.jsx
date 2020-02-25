import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './MenuItemStyles';

export const MenuItem = ({ title, gradient, size, history, linkUrl, match }) => (
  <MenuItemContainer 
    size={size} 
    onClick={() => history.push(`${match.url}${linkUrl}`)} 
  >
    <BackgroundImageContainer className='background-image' gradient={gradient}/>
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
</MenuItemContainer>
)

export default withRouter(MenuItem);