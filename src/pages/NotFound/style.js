import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLOR_BLACK } from '../../defaults/Colors';

export const Image = styled.img`
  max-width: 250px;
  width: 100%;
`;

export const NotFoundText = styled.h2`
  padding-top: 20px;
  color: ${COLOR_BLACK};
  text-transform: uppercase;
  font-size: 1.2em;
`;

export const LinkStyled = styled(Link)`
  color: ${COLOR_BLACK};
  text-transform: uppercase;
  padding: 20px;
`;
