import React from 'react';
import { CustomButtonContainer } from './CustomButtonStyles';


export const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
)

export default CustomButton;