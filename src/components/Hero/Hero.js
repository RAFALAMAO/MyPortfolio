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
        <SectionText>
        Aarón (RAFALAMAO) | Mechatronics engenier, ROS and fullstack web apps developer with technologies like JavaScript/React.
        </SectionText>
        <a href="https://macieytm.github.io/About-Me" target="_blank">
        <Button onClick={props.handleClick}>About Me</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
