import React from 'react';
import { DiFirebase, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText><br/>
      <strong>Front-End:</strong> HTML, CSS, JavaScript, React, React Hooks, React Router, Next.js<br/><br/>
      <strong>Back-End:</strong> Java, Python, C#, C++, C<br/><br/>
      <strong>Mechatronics:</strong> ROS, Matlab, SolidWorks, LabView<br/><br/>
      <strong>OS:</strong> Windows, Linux<br/><br/>
      <strong>Cloud:</strong> Azure, AWS<br/><br/>
      <strong>IDE:</strong> Visual Studio Code.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Najczęściej używane:<br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Najczęściej używane:<br />
            Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiVisualstudio size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>IDE</ListTitle>
          <ListParagraph>
            Najczęściej używane:<br />
            Visual Studio Code
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
