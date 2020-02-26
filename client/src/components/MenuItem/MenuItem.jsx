import React from 'react';
import { withRouter } from 'react-router-dom';

import { ReactComponent as Summer } from '../../assets/minimalist-summer.svg';
import { ReactComponent as Autumn } from '../../assets/minimalist-autumn.svg';
import { ReactComponent as Winter } from '../../assets/minimalist-winter.svg';
import { ReactComponent as Spring } from '../../assets/minimalist-spring.svg';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  IconContainer,
  // ContentContainer,
  // ContentTitle,
  // ContentSubtitle
} from './MenuItemStyles';

export const MenuItem = ({ title, gradient, size, history, linkUrl, match }) => (
  <MenuItemContainer 
    size={size} 
    onClick={() => history.push(`${match.url}${linkUrl}`)} 
  >
    <BackgroundImageContainer className='background-image' gradient={gradient}/>
    <IconContainer>
      {title === 'summer' 
        ? <Summer className='icon'/>
        : title === 'autumn'
          ? <Autumn className='icon'/>
          : title === 'winter'
            ? <Winter className='icon'/>
            : <Spring className='icon'/>
        }
    </IconContainer>
    {/* <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer> */}
</MenuItemContainer>
)

export default withRouter(MenuItem);