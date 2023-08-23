import { DefaultTheme } from 'solid-styled-components';

import { colors, common } from './colors';
import { typography } from './typography';

export const theme: DefaultTheme = {
  colors: {
    common: {
      white: common.white,
      black: common.black,
    },
    ...colors,
  },
  typography: {
    ...typography,
  },
};
