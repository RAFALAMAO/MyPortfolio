import React, { useEffect, useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, FlyShip } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {GoLinkExternal} from 'react-icons/go';
import {HiOutlineMinus} from 'react-icons/hi';

import { useInView } from 'react-intersection-observer';
import { animateTitle } from '../../utils/animateTitle';

function Projects(){
  const [ ref, inView, entry ] = useInView({threshold: .05});

  return(
    <Section nopadding id="projects">
      <SectionDivider initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.6, inView, entry)} $divider/>
      <SectionTitle2 initial={{ x: -100, opacity: 0 }} animate={animateTitle(1, inView, entry)} $main>Projects</SectionTitle2>
      <div ref={ref}>
        <GridContainer
        >
          {
            projects.map((p, i) => {
              return (
                <BlogCard key={i}>
                  <Img src={p.image} />
                  <TitleContent>
                    <HeaderThree $title>{p.title}</HeaderThree>
                    <FlyShip>
                      <HiOutlineMinus style={{
                        width:'100px',
                        marginTop:'5px',
                        marginRight:'500px',
                        color: 'rgba(52, 164, 235, .75)',
                        fontSize: '40px'
                      }}/>
                    </FlyShip>
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <div>
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