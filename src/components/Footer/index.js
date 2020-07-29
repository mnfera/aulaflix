import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/img/linkedin.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/mikael-nilton/">
        <img className="Logo" src={LogoFooter} alt="Logo Linkedin" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
