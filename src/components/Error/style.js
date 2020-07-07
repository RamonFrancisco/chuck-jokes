import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLOR_BLACK } from '../../defaults/Colors'

export const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleError = styled.h2`
  color: ${COLOR_BLACK};
  text-transform: uppercase;
  font-size: 1.2em;
  padding-bottom: 20px;
`;

export const MessageError = styled.p`
  color: ${COLOR_BLACK};
  font-size: .9em;
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  color: ${COLOR_BLACK};
  text-transform: uppercase;
  padding: 20px;
`;
