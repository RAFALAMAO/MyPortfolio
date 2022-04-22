import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, ShowCase, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }} href="https://macieytm.github.io/About-Me" target="_blank">
          <DiCssdeck size="3rem" />
          <img source="https://rafalamao.github.io/assets/images/r_f_azul.png"></img>
          <ShowCase>666</ShowCase>
        </a>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About me</NavLink>
        </Link>
      </li>
      <li>
        <NavLink href="https://rafalamao.github.io" target="_blank">My blog</NavLink>
      </li>
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/MacieyTM" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/macieytm" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/MacieyTM" target="_blank">
          <AiOutlineTwitter size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/channel/UCLUrR7bodWNdt9G9YWeCIWA" target="_blank">
          <AiFillYoutube size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
