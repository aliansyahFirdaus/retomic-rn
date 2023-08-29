
import React from 'react';
import {  Slider as SliderTamagui ,SliderProps as SliderTamaguiProps } from 'tamagui';

export interface SliderProps extends SliderTamaguiProps {
};

export function Slider({children, ...props}: SliderProps) {
  return (
    <SliderTamagui defaultValue={[50]} max={100} step={1} {...props}>
      <SliderTamagui.Track>
        <SliderTamagui.TrackActive />
      </SliderTamagui.Track>
      <SliderTamagui.Thumb index={0} circular elevate />
      {children}
    </SliderTamagui>
  );
}

