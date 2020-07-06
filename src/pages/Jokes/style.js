import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR_BLACK } from '../../defaults/Colors';

export const Content = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackCategories = styled(Link)`
  color: ${COLOR_BLACK};
  text-decoration: none;
  text-transform: uppercase;
  align-self: flex-start;
`;

export const JokeContent = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  max-width: 800px;
  display: flex;

  div {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const JokeImage = styled.img`
  max-width: 60px;
  max-height: 60px;
`;

export const JokeText = styled.p`
  font-size: 20px;
  margin-bottom: 0.8em;
`;

export const JokeSmallText = styled.small`
  font-size: 14px;
  text-align: right;
`;
