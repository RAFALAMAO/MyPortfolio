import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to my portfolio!
        </SectionTitle>
        <SectionText hero>
          Aarón (RAFALAMAO) | Mechatronic engineer, ROS, computer vision, IA and full stack developer.
        </SectionText>
        <a href="https://rafalamao.github.io/about/" target="_blank">
        <Button onClick={props.handleClick}>About Me</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
