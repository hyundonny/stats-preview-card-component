import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-main-bg: hsl(233, 47%, 7%);
    --primary-card-bg: hsl(244, 38%, 16%);
    --primary-accent: hsl(277, 64%, 61%);
    --main-heading: hsl(0, 0%, 100%);
    --main-paragraph: hsla(0, 0%, 100%, 0.75);
    --stat-heading: hsla(0, 0%, 100%, 0.6);
  }

  *,
  *::before,
  *::after {
	  box-sizing: inherit;
	  margin: 0;
	  padding: 0;
  }

  html {
	  box-sizing: border-box;
  }

  body {
    background: var(--primary-main-bg);
  }
`;

export default GlobalStyle;
