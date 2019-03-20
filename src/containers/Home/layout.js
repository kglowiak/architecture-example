import React from 'react';

import { Button } from 'components/Button';

export const HomeLayout = ({ buttons, onButtonClick }) => (
  <div>
    <h2>HOME</h2>
    {buttons.map(button => (
      <Button {...button} onClick={onButtonClick}/>
    ))}
  </div>
);
