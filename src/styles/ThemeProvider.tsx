import { ThemeProvider as StyledComponentsThemeProvider } from 'solid-styled-components';
import { JSXElement } from 'solid-js';

import { GlobalStyles } from './GlobalStyles';
import { theme } from './theme';

interface ThemeProviderProps {
  children: JSXElement;
}

export const ThemeProvider = (props: ThemeProviderProps) => (
  <StyledComponentsThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {props.children}
    </>
  </StyledComponentsThemeProvider>
);
