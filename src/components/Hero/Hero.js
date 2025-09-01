import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = props => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle $main $principal>
          Welcome to my portfolio!
        </SectionTitle>
        <SectionText hero>
          Aarón (RAFALAMAO) | Mechatronic engineer, Full Stack, ROS, Computer Vision and IA developer.
        </SectionText>
        <Button onClick={props.handleClick}>Download CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
