import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_BLUE_LIGHT,
  COLOR_RED,
} from '../../defaults/Colors';

export const FooterContainer = styled.footer`
  position: fixed;
  display: flex;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${COLOR_BLACK};
  padding: 10px 0;
  text-align: center;
`;

export const FooterText = styled.p`
  color: ${COLOR_BLUE_LIGHT};
  font-size: 0.9em;

  a {
    color: ${COLOR_BLUE_LIGHT};
  }

  svg {
    color: ${COLOR_RED};
    font-size: 0.8em;
  }
`;
