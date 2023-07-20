import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { useInView } from 'react-intersection-observer';
import { animateTitle } from '../../utils/animateTitle';

const data = [
  { number: 2022, text: 'Hiring on The Rocket Code'},
  { number: 2021, text: 'Mechatronic eng. graduation'},
  { number: 2020, text: 'Hiring on Intevolution'},
];

function Acomplishments() {
  // Hoock used for get in view element information
  const [ ref, inView, entry ] = useInView({threshold: .2});

  return (
    <Section>
      <SectionDivider initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.6, inView, entry)} $divider />
      <SectionTitle initial={{ x: -100, opacity: 0 }} animate={animateTitle(1, inView, entry)}>Achievements</SectionTitle>
      <div ref={ref}>
        <Boxes>
          {data.map((card, index) => (
            <Box key={index}>
              <BoxNum>{`${card.number}`}</BoxNum>
              <BoxText>{card.text}</BoxText>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(28, 69, 97, .5)" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,176C672,181,768,235,864,224C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </Box>
          ))}
        </Boxes>
      </div>
    </Section>
  );
}

export default Acomplishments;
