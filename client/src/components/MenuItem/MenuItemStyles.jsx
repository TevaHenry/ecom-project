import styled from 'styled-components';

// const autumn = 'linear-gradient(to bottom, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)'
// const spring = 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)'

export const MenuItemContainer = styled.div`
	height: 75vh;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
  
	&:hover {
		cursor: pointer;
		/* & .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    } */
    
		& .content {
			opacity: 0.9;
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
  &:hover {
    opacity: 1;
    transition: opacity 0.8s ease-out;
  }
`;

BackgroundImageContainer.displayName = 'BackgroundImageContainer';

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;