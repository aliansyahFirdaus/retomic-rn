import React from 'react';

import { TamaguiProvider } from 'tamagui';
import { Slider } from './slider';
import { appConfig } from './config';

export const BasicSlider2 = () => (
  <TamaguiProvider config={appConfig} defaultTheme='light'>
    <Slider />
  </TamaguiProvider>
);
