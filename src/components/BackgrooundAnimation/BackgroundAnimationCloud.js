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

const cloudProps = {
  id: 'stable-id-for-csr-ssr',
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 40,
      // marginRight: 20 * 2,
    },
  },
  canvasProps: {
    style: {
      maxWidth: '100%',
    },
  },
  options: {
    reverse: true,
    // depth: 1,
    wheelZoom: false,
    imageScale: 1.5,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.015, -0.015],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
  },
}

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
    <Cloud {...cloudProps}>
      <h1>hi</h1>
      {icons}
    </Cloud>
  </Div>
);

export default BackgroundAnimationCloud;