import React from 'react';
import { DownloadButton } from './index';

const Button = props => (
  <DownloadButton alt={props.alt} onClick={props.onClick} disabled={props.disabled}>
    <span>{props.children}</span>
  </DownloadButton>
);

export default Button;
