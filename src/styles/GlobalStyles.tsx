import { createGlobalStyles } from 'solid-styled-components';

import RobotoRegular from '../assets/Roboto-Regular.ttf';

export const GlobalStyles = () => {
  const Styles = createGlobalStyles`
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: local('Roboto'), local('Roboto-Regular'), url(${RobotoRegular}) format('truetype');
    }

    html,
    body {
      margin: 0;    
      padding: 0;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      font-family: 'Roboto';
    }  

  `;

  return <Styles />;
};
