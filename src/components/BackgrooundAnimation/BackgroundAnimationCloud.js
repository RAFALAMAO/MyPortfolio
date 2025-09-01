import { useEffect, useState } from 'react';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import * as Allicons from 'simple-icons';
import styled from 'styled-components';

const Div = styled.div`
  margin: auto 0px;
  @media ${props => props.theme.breakpoints.sm} {
    margin: 0px auto;
  }
  z-index: 1;
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
  'siNodedotjs',
  'siNumpy',
  'siGithub',
  'siBitbucket',
  'siAngular',
  'siFastapi'
];

const icons = iconNames.map(icon => {
  return renderSimpleIcon({
    icon: Allicons[icon],
    size: 42,
    aProps: {
      onClick: e => e.preventDefault()
    }
  });
});

const BackgroundAnimationCloud = () => {
  const [dinamicSettings, setDinamicSettings] = useState({
    velocity: [0, 0],
    noMouse: false
  });

  const cloudProps = {
    id: 'stable-id-for-csr-ssr',
    containerProps: {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    canvasProps: {
      style: {
        maxWidth: '100%'
      }
    },
    options: {
      reverse: false,
      activeCursor: 'default',
      dragControl: true,
      noMouse: dinamicSettings.noMouse,
      dragThreshold: 0.01,
      shape: 'hring',
      outlineColour: '#3a82e0',
      outlineMethod: 'colour',
      shadow: '#fff',
      wheelZoom: false,
      imageScale: 1.5,
      tooltip: 'native',
      initial: dinamicSettings.velocity,
      clickToFront: 500,
      tooltipDelay: 0
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setDinamicSettings({ velocity: [0.09, -0.09], noMouse: true });
    } else {
      setDinamicSettings({ velocity: [0.015, -0.015], noMouse: false });
    }
  }, []);

  return (
    <Div>
      <Cloud {...cloudProps}>{icons}</Cloud>
    </Div>
  );
};

export default BackgroundAnimationCloud;
