import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {GoLinkExternal} from 'react-icons/go';

import { useAnimation, useCycle } from 'framer-motion';

function Projects(){

  const animation = useAnimation();
  const [handleShow, setHandleShow] = React.useState(false);

  if (handleShow) {
    animation.start({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    })
  } else {
    animation.start({
      x: '-200px',
      opacity: 0,
      transition: {
        duration: 0.8,
      }
    })
  }

  React.useEffect(() => {
    const listener = () => {
      if (window.scrollY > 150) {
        setHandleShow(true);
      } else setHandleShow(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return(
    <Section nopadding id="projects">
      <SectionDivider divider />
      <SectionTitle2 main>Projects</SectionTitle2>
      <GridContainer
        initial={{x: '-200px'}}
        animate={animation}
      >
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
            <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
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
                <ExternalLinks href={p.visit} target="_blank">Visit <GoLinkExternal size="1.3rem"/></ExternalLinks>
                {
                  p.source !== null ?  <ExternalLinks href={p.source} target="_blank">Code</ExternalLinks> : null
                }
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  )
};

export default Projects;