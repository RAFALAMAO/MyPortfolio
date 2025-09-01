import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, ShowCase, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <a style={{ display: 'flex', alignItems: 'center', color: 'white' }} href='https://rafalamao.github.io/about/#'>
        <Image src={'/images/letters/r.png'} width={20} height={40.6} alt='Picture' />
        <ShowCase style={{ color: 'rgb(49,165,202)' }}>AFALAMAO</ShowCase>
      </a>
    </Div1>
    <Div2>
      <li>
        <NavLink href='#projects'>Proyects</NavLink>
      </li>
      <li>
        <NavLink href='#skills'>Skills</NavLink>
      </li>
      <li>
        <NavLink href='#about'>About</NavLink>
      </li>
      <li>
        <NavLink href='#acomplishments'>Experience</NavLink>
      </li>
      <li>
        <NavLink href='https://rafalamao.github.io' target='_blank'>
          My blog
        </NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/RAFALAMAO' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/aar%C3%B3n-ju%C3%A1rez-aa42361ab' target='_blank'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.youtube.com/channel/UCURD3N9TC9OJn0BWRf2J8oA' target='_blank'>
        <AiFillYoutube size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
