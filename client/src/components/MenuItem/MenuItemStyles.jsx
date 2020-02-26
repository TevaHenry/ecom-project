import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: 75vh;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
  border-radius: 12px;
	border: 1px solid rgba(255,255,255,0.20);
  box-shadow:
    -6px -6px 26px #ffffff,
    6px 6px 16px #dedede;
	margin: 0 7.5px 15px;
	overflow: hidden;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  
	&:hover {
		cursor: pointer;
		& .background-image {
			opacity: 1;
      transition: opacity 0.8s ease-out;
    }
    
		& .icon {
      opacity: 1;
      transition: opacity 0.8s ease-out;
		}
  }
  
	&:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 40vh;
    min-width: 40%;
  }
`;

MenuItemContainer.displayName = 'MenuItemContainer';

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ gradient }) => gradient};
  opacity: 0;
  transition: opacity 0.8s ease-out;
`;

BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export const IconContainer = styled.div`
  opacity: 0.4;
  position: absolute;
  margin: auto;
  width: 150px;

  @media screen and (max-width: 800px) {
    width: 100px;
    padding: 0;
  }
`;

// export const ContentContainer = styled.div`
//   height: 90px;
//   padding: 0 25px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   background-color: white;
//   opacity: 0.7;
//   position: absolute;
// `;

// export const ContentTitle = styled.span`
//   font-weight: bold;
//   margin-bottom: 6px;
//   font-size: 22px;
//   color: #4a4a4a;
// `;

// export const ContentSubtitle = styled.span`
//   font-weight: lighter;
//   font-size: 16px;
// `;