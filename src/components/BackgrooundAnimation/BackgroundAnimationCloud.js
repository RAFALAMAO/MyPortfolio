import React from 'react';
import styled from 'styled-components';
import {Cloud, renderSimpleIcon} from 'react-icon-cloud'
import * as Allicons from 'simple-icons';

const Div = styled.div`
  @media ${(props) => (props.theme.breakpoints.sm) } {
    margin-left: -40%;
    width: 40%;
  }
`;

const iconNames = [
  'siReact',
  'siJavascript',
  'siTypescript',
  'siVuedotjs',
  'siCss3',
  'siPython',
  'siRos',
  'siOpencv',
  'siTensorflow',
  'siTmux',
  'siMysql',
  'siDocker',
  'siPostgresql',
  'siStyledcomponents',
  'siNestjs',
  'siAmazonaws',
  'siAzuredevops',
  'siVisualstudiocode',
  'siLabview',
  'siHtml5',
  'siLinux',
]

const icons = iconNames.map((icon) => {
  return renderSimpleIcon({
    icon: Allicons[icon],
    size: 42,
    aProps: {
      onClick: (e) => e.preventDefault()
    }
  })
})

const BackgroundAnimationCloud = () => (
  <Div>
    <Cloud>
      {icons}
    </Cloud>
  </Div>
);

export default BackgroundAnimationCloud;