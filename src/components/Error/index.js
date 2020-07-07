import React from 'react';
import PropTypes from 'prop-types';

import { ErrorContent, LinkStyled, MessageError, TitleError } from './style'

const Error = ({ title, text, route }) => (
  <ErrorContent>
    <TitleError>{title}</TitleError>
    <MessageError>{text}</MessageError>
    <LinkStyled to={route}>Try again</LinkStyled>
  </ErrorContent>
);

Error.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default Error;
