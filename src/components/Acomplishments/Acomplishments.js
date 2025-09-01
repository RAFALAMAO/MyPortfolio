import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, BoxNum, BoxText, Boxes } from './AcomplishmentsStyles';

import { useInView } from 'react-intersection-observer';
import { animateTitle } from '../../utils/animateTitle';

import { ACOMPLISHMENTS_DATA } from '../../constants/';

function Acomplishments() {
  // Hoock used for get in view element information
  const [ref, inView, entry] = useInView({ threshold: 0.2 });

  return (
    <Section>
      <SectionDivider initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.5, inView, entry)} $divider />
      <SectionTitle initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.9, inView, entry)}>
        Experience
      </SectionTitle>
      <div ref={ref}>
        <Boxes>
          {ACOMPLISHMENTS_DATA.map((card, index) => (
            <Box key={index}>
              <BoxNum>{`${card.year}`}</BoxNum>
              <BoxText>2 years</BoxText>
              <BoxText>{card.text}</BoxText>
            </Box>
          ))}
        </Boxes>
      </div>
    </Section>
  );
}

export default Acomplishments;
