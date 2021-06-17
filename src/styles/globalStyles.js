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
    height: 100%;
	  box-sizing: border-box;
  }

  body {
    min-height: 100%;
    background: var(--primary-main-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export default GlobalStyle;
