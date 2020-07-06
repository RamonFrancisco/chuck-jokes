import styled from 'styled-components';

import { COLOR_BLACK, COLOR_BLUE_LIGHT } from '../../defaults/Colors';

export const CategoryListContainer = styled.ul`
  display: grid;
  width: 80%;
  grid-row-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
  margin: 1rem;

  @media screen and (min-width: 768px) {
    max-width: 1024px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CategoryListItem = styled.li`
  text-align: center;
  border-radius: 10px;
  background-color: ${COLOR_BLACK};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  a {
    display: inline-block;
    padding: 0.5em;
    color: ${COLOR_BLUE_LIGHT};
    text-decoration: none;
    text-transform: capitalize;
    font-size: 24px;
  }
`;
