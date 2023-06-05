import React, { useEffect, useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, FlyShip } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {GoLinkExternal} from 'react-icons/go';
import {HiOutlineMinus} from 'react-icons/hi';

import { useInView } from 'react-intersection-observer';
import { animateTitle } from '../../utils/animateTitle';

function Projects(){

  // const animation = useAnimation();
  // const [handleShow, setHandleShow] = React.useState(false);

  // if (handleShow) {
  //   animation.start({
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.8
  //     }
  //   })
  // } else {
  //   animation.start({
  //     x: '-200px',
  //     opacity: 0,
  //     transition: {
  //       duration: 0.8,
  //     }
  //   })
  // }

  // React.useEffect(() => {
  //   const listener = () => {
  //     if (window.scrollY > 150) {
  //       setHandleShow(true);
  //     } else setHandleShow(false);
  //   };
  //   window.addEventListener("scroll", listener);

  //   return () => {
  //     window.removeEventListener("scroll", listener);
  //   };
  // }, []);
  // Hoock used for get in view element information
  const [ ref, inView, entry ] = useInView({threshold: .05});

  const [randomColors, setrandomColors] = useState('')

  // useEffect(() => {
  //   let randColors = []
  //   projects.forEach(element => {
  //     randColors.push(`${Math.random()*200}, ${Math.random()*255}, ${Math.random()*255}`)
  //   });
  //   setrandomColors(randColors)
  // }, [])

  useEffect(() => {
    let randColors = []
    projects.forEach(element => {
      // randColors.push(`${Math.random()*10}, ${Math.random()*0}, ${Math.random()*0}`)
      randColors.push(`92, 10, 255`)
    });
    setrandomColors(randColors)
  }, [])

  return(
    <Section nopadding id="projects">
      <SectionDivider initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.6, inView, entry)} $divider/>
      <SectionTitle2 initial={{ x: -100, opacity: 0 }} animate={animateTitle(1, inView, entry)} $main>Projects</SectionTitle2>
      <div ref={ref}>
        <GridContainer
          // initial={{x: '-200px'}}
          // animate={animation}
        >
          {
            projects.map((p, i) => {
              return (
                <BlogCard key={i} $color = {randomColors[i]}>
                  <Img src={p.image} />
                  <TitleContent>
                  <HeaderThree $title>{p.title}</HeaderThree>
                    <FlyShip>
                      <HiOutlineMinus style={{
                        width:'100px',
                        marginTop:'5px',
                        // marginBottom:'10px',
                        marginRight:'500px',
                        color:`rgb(${randomColors[i]})`,
                        fontSize: '40px'
                      }}/>
                    </FlyShip>
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
                    {/* <TitleContent>Technologie</TitleContent> */}
                    <TagList>
                      {p.tags.map((t, i) => {
                        return <Tag key={i}>{t}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <UtilityList>
                    {
                      p.visit !== null ?  <ExternalLinks href={p.visit} target="_blank">Visit <GoLinkExternal size="1.3rem"/></ExternalLinks> : null
                    }
                    {
                      p.source !== null ?  <ExternalLinks href={p.source} target="_blank">Code</ExternalLinks> : null
                    }
                  </UtilityList>
                </BlogCard>
              );
            })
          }
        </GridContainer>
      </div>
    </Section>
  )
};

export default Projects;