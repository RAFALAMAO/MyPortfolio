import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, ShowCase, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }} href="https://rafalamao.github.io/about/#">
          {/* <DiCssdeck size="3rem" /> */}
          <img style={{position:"relative", width:"2rem", height:"auto"}} src="./images/r/r.png" ></img>
          <ShowCase style={{color: 'rgb(49,165,202)' }}>AFALAMAO</ShowCase>
        </a>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <NavLink href="https://rafalamao.github.io" target="_blank">My blog</NavLink>
      </li>
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/RAFALAMAO" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/aar%C3%B3n-ju%C3%A1rez-aa42361ab" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        {/* <SocialIcons href="https://twitter.com/MacieyTM" target="_blank">
          <AiOutlineTwitter size="3rem"/>
        </SocialIcons> */}
        <SocialIcons href="https://www.youtube.com/channel/UCURD3N9TC9OJn0BWRf2J8oA" target="_blank">
          <AiFillYoutube size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
