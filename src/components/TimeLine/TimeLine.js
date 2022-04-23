import React, { useState, useRef, useEffect } from 'react';

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
  GothicLink,
} from './TimeLineStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id='about'>
      <SectionDivider divider />
      <SectionTitle>About</SectionTitle>
      <SectionText>
        <br />
        Aarón&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RAFALAMAO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26
        yo
        <br />
        <br />
        I’m a Mechatronic Engineer at UPIITA from México, I love development, music and graphical design.
        <br />
        <br />
        I started with C / C ++, then Matlab, LabView, JavaScript, Python, C #, Java. Currently I am programming mainly in React technology.
        <br />
        <br />
        I can work stationary, hybrid and remotely (preferably), both full-time and part-time.
        <br />
        <br />
      </SectionText>
      <SectionDivider />
      <SectionTitle>
        <br />
        What else?
      </SectionTitle>
      <SectionText>
        <br />- Creator of guitar tabs ({' '}
          <GothicLink href='https://www.ultimate-guitar.com/contribution/11629152-perroconpelos/tabs' target='_blank'>
            my tabs
          </GothicLink>
        ) (2016-present)
        <br />
        <br />- Work as freelance for Intevolution in a computer vision project ({' '}
        <GothicLink href='https://intevolution.ai' target='_blank'>
          Intevolution page
        </GothicLink>){' '}
        (2021)
        <br />
        <br />- YouTube content creator (simulations, guitar covers, etc.) ({' '}
        <GothicLink href='https://www.youtube.com/channel/UCURD3N9TC9OJn0BWRf2J8oA' target='_blank'>
        channel
        </GothicLink>
        ) (2014-present)
        <br />
        <br />
        - English language: B1<br />
        <br />
        -
        Interests:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Science&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Graphics design
        <br />
        <br />
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
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
                        <stop
                          offset='0.79478'
                          stopColor='white'
                          stopOpacity='0'
                        />
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
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type='button'
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
      {/* <SectionDivider /> */}
    </Section>
  );
};

export default Timeline;
