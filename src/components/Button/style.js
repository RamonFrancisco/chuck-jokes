import styled from 'styled-components';
import { COLOR_BLACK, COLOR_BLUE_LIGHT } from '../../defaults/Colors';

const ButtonStyled = styled.button`
  text-align: center;
  padding: 1em 2em;
  border: 0;
  border-radius: 40px;
  background-color: ${COLOR_BLACK};
  transition: all 0.2s ease;
  cursor: pointer;
  color: ${COLOR_BLUE_LIGHT};
  text-transform: uppercase;
  font-size: 18px;
  transition: transform 0.2s ease-in-out;
  margin: 20px;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export default ButtonStyled;
