import { createGlobalStyle } from 'styled-components';
require('typeface-corben');
require('typeface-play');
require('typeface-lobster');

const GlobalStyle = createGlobalStyle`

  :root {
    --dark-blue: #3a0ca3;
    --purple: #7209b7;
    --bright-blue: #4361ee;
    --bright-pink: #f72585;
    --light-blue: #4cc9f0;

    --font-cursive: 'Corben';
    --font-sans: 'Play';
    --font-hero: 'Lobster';

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --fz-hero: 72px;
    --fz-hero-huge: 420px;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: var(--dark-blue);
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
`;

export default GlobalStyle;