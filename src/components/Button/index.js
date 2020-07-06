import React from 'react';
import ButtonStyled from './style';

const Button = ({ children, onClick }) => (
  <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
);

export default Button;
