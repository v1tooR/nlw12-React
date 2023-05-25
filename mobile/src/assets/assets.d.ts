declare module '*.png'
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
//declara apenas em script TS a permissão de todo aquivo .png