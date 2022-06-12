import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { useInView } from 'react-intersection-observer';
import { animateTitle } from '../../utils/animateTitle';

const data = [
  { number: 2021, text: 'Mechatronic eng. graduation'},
  { number: 2020, text: 'Working at Intevolution'}
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
            </Box>
          ))}
        </Boxes>
      </div>
    </Section>
  );
}

export default Acomplishments;
