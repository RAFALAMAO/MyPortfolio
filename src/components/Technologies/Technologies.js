import React from 'react';
import { DiJavascript, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText><br/>
      <strong>Front-End:</strong> HTML, CSS, JavaScript, React, React Hooks, React Router, Next.js, Framer Motion, Styled Components<br/><br/>
      <strong>Back-End:</strong> Java, Node JS, Python, C#, C++, C<br/><br/>
      <strong>Mechatronic:</strong> ROS, Matlab, SolidWorks, LabView<br/><br/>
      <strong>OS:</strong> Windows, Linux<br/><br/>
      <strong>Cloud:</strong> Azure, AWS<br/><br/>
      <strong>Other:</strong> AI (TensorFlow), Computer Vision (OpenCV)<br/><br/>
      <strong>IDE:</strong> Visual Studio Code
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Most used:<br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Most used:<br />
            Javascript
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
            Most used:<br />
            Visual Studio Code
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    {/* <SectionDivider colorAlt /> */}
    {/* <SectionDivider section /> */}
  </Section>
);

export default Technologies;
