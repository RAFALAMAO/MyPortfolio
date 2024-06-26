import React from 'react';
import { DiJavascript1, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionTextSkills, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

import { useInView } from 'react-intersection-observer';
import { animateTitle } from '../../utils/animateTitle';

function Technologies() {
  // Hoock used for get in view element information
  const { ref, inView, entry } = useInView({ threshold: 0.2 });

  return (
    <Section id='skills'>
      <SectionDivider initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.5, inView, entry)} $divider />
      <SectionTitle initial={{ x: -100, opacity: 0 }} animate={animateTitle(0.9, inView, entry)}>
        Skills
      </SectionTitle>

      <SectionTextSkills ref={ref}>
        <br />
        <strong>Front-End:</strong> HTML, CSS, JavaScript, Typescript, React, Vue.js, Next.js, Framer Motion, Styled
        Components, Redux
        <br />
        <br />
        <strong>Back-End:</strong> JavaScript, Typescript, Node JS, Express, NestJS
        <br />
        <br />
        <strong>DB:</strong> MySQL, PostgreSQL, MongoDB, Sequelize, TypeORM
        <br />
        <br />
        <strong>Mechatronic:</strong> ROS, MATLAB, SolidWorks, LabView, Python, C++, C<br />
        <br />
        <strong>OS:</strong> Linux, Windows
        <br />
        <br />
        <strong>Cloud:</strong> Azure, AWS
        <br />
        <br />
        <strong>Data science (Python):</strong> TensorFlow, OpenCV, Pandas, NumPy, Matplotlib, Scikit-Learn
        <br />
        <br />
        <strong>IDE:</strong> Visual Studio Code, Google Colab, Jupyter notebook
        <br />
        <br />
        <strong>Git-repo:</strong> GitHub, Bitbucket
        <br />
        <br />
        <strong>Workflow:</strong> Scrum
      </SectionTextSkills>

      <List>
        <ListItem>
          <picture>
            <DiReact size='3rem' color='rgb(97,219,253)' />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Most used:
              <br />
              Next.js (TS)
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiJavascript1 size='3rem' color='rgb(49,178,232)' />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Most used:
              <br />
              NestJS (TS)
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiVisualstudio size='3rem' color='rgb(0, 137, 210)' />
          </picture>
          <ListContainer>
            <ListTitle>IDE</ListTitle>
            <ListParagraph>
              Most used:
              <br />
              VS Code
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
}

export default Technologies;
