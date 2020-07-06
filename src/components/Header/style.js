import styled from 'styled-components';
import { COLOR_BLACK, COLOR_BLUE_LIGHT } from '../../defaults/Colors';

export const HeaderContent = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${COLOR_BLACK};
  padding: 10px 0;
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  a {
    text-transform: uppercase;
    color: ${COLOR_BLUE_LIGHT};
    text-decoration: none;
  }
`;
