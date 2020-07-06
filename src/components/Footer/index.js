import React from 'react';
import { BsHeartFill } from 'react-icons/bs';

import { FooterContainer, FooterText } from './style';

const Footer = () => (
  <FooterContainer>
    <FooterText>
      Feito com <BsHeartFill /> por{' '}
      <a
        href="https://github.com/RamonFrancisco"
        title="Link para o repositorio do github"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ramon Francisco
      </a>
    </FooterText>
  </FooterContainer>
);

export default Footer;
