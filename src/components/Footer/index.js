import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logop.png';

function Footer() {
  return (
    <FooterBase >
      <a href="/">
        <img src={Logo} alt="MarcoFlix Logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
          Imersão React da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
