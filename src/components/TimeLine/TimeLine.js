import React, { useEffect, useRef, useState } from 'react';

import { TIME_LINE_DATA } from '../../constants';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
  GothicLink
} from './TimeLineStyles';

import { useInView } from 'react-intersection-observer';
import { animateTitle } from '../../utils/animateTitle';

const TOTAL_CAROUSEL_COUNT = TIME_LINE_DATA.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // Hoock used for get in view element information
  const [refAbout, inViewAbout, entryAbout] = useInView({ threshold: 0.2 });
  const [refElse, inViewElse, entryElse] = useInView({ threshold: 0.2 });

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TIME_LINE_DATA.length
      );

      setActiveItem(index);
    }
  };

  // Snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id='about'>
      <SectionDivider initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.5, inViewAbout, entryAbout)} $divider />
      <SectionTitle initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.9, inViewAbout, entryAbout)}>
        About
      </SectionTitle>
      <div ref={refAbout}>
        <SectionText>
          <br />
          Aarón&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RAFALAMAO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28
          yo
          <br />
          <br />
          I’m a Mechatronic Engineer graduated from UPIITA of IPN México, I love development, music and graphical
          design.
          <br />
          <br />
          I started with C / C ++, then Matlab, LabView, Python, JavaScript and Typescript. Currently I am programming
          mainly in Next.js (TS) and NestJS (TS) technologies.
          <br />
          <br />
          I worked one year and a half at Intevolution developing intelligent bots with Javascript, Azure services and
          programing simple front-end interfaces. I made my social service and engineering final work at CINVESTAV
          Zacatenco developing with ROS some computer vision and mobile robot control projects.
          <br />
          <br />
          I'm currently working for a Mexican company called&nbsp;
          <GothicLink href='https://therocketcode.com/' target='_blank'>
            The Rocket Code
          </GothicLink>
          &nbsp;as a full stack developer.
          <br />
          <br />
          I can work stationary, hybrid and remotely (preferably), both full-time and part-time.
          <br />
          <br />
        </SectionText>
      </div>
      <SectionDivider initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.5, inViewElse, entryElse)} />
      <SectionTitle initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.9, inViewElse, entryElse)}>
        <br />
        What else?
      </SectionTitle>
      <div ref={refElse}>
        <SectionText>
          <br />- Creator of guitar tabs (
          <GothicLink href='https://www.ultimate-guitar.com/contribution/72518755-RAFALAMAO/tabs' target='_blank'>
            My tabs
          </GothicLink>
          &nbsp;or&nbsp;
          <GothicLink href='https://www.ultimate-guitar.com/u/RAFALAMAO' target='_blank'>
            UG profile
          </GothicLink>
          ) (2016-present)
          <br />
          <br />- Project as freelance with Intevolution in a computer vision project (
          <GothicLink href='https://intevolution.ai' target='_blank'>
            Intevolution
          </GothicLink>
          ) (2021)
          <br />
          <br />- YouTube content creator (ROS simulations, guitar covers, etc.) (
          <GothicLink href='https://www.youtube.com/channel/UCURD3N9TC9OJn0BWRf2J8oA' target='_blank'>
            Channel
          </GothicLink>
          ) (2014-present)
          <br />
          <br />
          - Languages:&nbsp;&nbsp;English (B1)&nbsp;&nbsp;|&nbsp;&nbsp;Spanish (Native)
          <br />
          <br />
          - Strengths: &nbsp;Ingenuity &nbsp;|&nbsp; Ambitiony &nbsp;|&nbsp; Responsibility &nbsp;|&nbsp; Punctuality
          <br />
          <br />
          - Interests:&nbsp;&nbsp;AI&nbsp;&nbsp;|&nbsp;&nbsp;Music&nbsp;&nbsp;|&nbsp;&nbsp;Graphic
          design&nbsp;&nbsp;|&nbsp;&nbsp;Technological development&nbsp;&nbsp;|&nbsp;&nbsp;Science
          <br />
          <br />
        </SectionText>
      </div>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TIME_LINE_DATA.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={e => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width='208'
                    height='6'
                    viewBox='0 0 208 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
                      fill='url(#paint0_linear)'
                      fillOpacity='0.33'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear'
                        x1='-4.30412e-10'
                        y1='0.5'
                        x2='208'
                        y2='0.500295'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='white' />
                        <stop offset='0.79478' stopColor='white' stopOpacity='0' />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TIME_LINE_DATA.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={e => handleClick(e, index)}
              type='button'
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
