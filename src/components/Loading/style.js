import styled from 'styled-components';

const Circle = styled.div`
  margin: 0 auto;
  position: relative;
  background-color: transparent;
  width: 70px;
  height: 70px;
  border: 4px solid transparent;
  border-top: 4px solid #000;
  border-radius: 50%;
  animation: loading 1.5s infinite linear;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Circle;
