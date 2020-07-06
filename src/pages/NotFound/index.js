import React from 'react';
import { ROUTE_HOME } from '../../defaults/Routes';

import ChuckImage from '../../assets/chuck-norris-not-found.png';

import Container from '../../components/Container';

import { LinkStyled, NotFoundText, Image } from './style';

const NotFound = () => (
  <Container>
    <Image src={ChuckImage} alt="Chuck norris está te olhando" />
    <NotFoundText>Page not found</NotFoundText>
    <LinkStyled to={ROUTE_HOME}>go to home</LinkStyled>
  </Container>
);

export default NotFound;
