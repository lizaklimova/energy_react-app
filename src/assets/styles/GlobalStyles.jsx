import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'NeueMontreal';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/NeueMontreal-Regular.woff2') format('woff2'),
    url('./assets/fonts/NeueMontreal-Regular.woff') format('woff');
}

@font-face {
  font-family: 'NeueMontreal';
  font-style: italic;
  font-weight: 400;
  src: url('./assets/fonts/NeueMontreal-Italic.woff2') format('woff2'),
    url('./assets/fonts/NeueMontreal-Italic.woff') format('woff');
}

@font-face {
  font-family: 'NeueMontreal';
  font-style: normal;
  font-weight: 500;
  src: url('./assets/fonts/NeueMontreal-Medium.woff2') format('woff2'),
    url('./assets/fonts/NeueMontreal-Medium.woff') format('woff');
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

 body {
  font-family: 'Neue Montreal', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  margin: 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

transition: ${({ theme }) =>
  `background-color ${theme.eased}, color ${theme.eased}`};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}


input {
  font-family: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

svg {
  fill: currentColor;
}

::-webkit-scrollbar {
  width: 12px; 
}


::-webkit-scrollbar-track {
  background-color: #bbbbbb; 
}


::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.text}; 
  border-radius: 6px; 
}

* {
  scrollbar-width: thin; 
  scrollbar-color:${({ theme }) => `#bbbbbb ${theme.text}`};  
}

`;
