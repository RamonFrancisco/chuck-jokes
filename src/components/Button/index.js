import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './style';

const Button = ({ children, onClick }) => (
  <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
