import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  box-sizing: border-box;
}

:root {
  --light-dark: #33353C;
  --medium-dark: #15191D;
  --medium: #253962;
  --light: #F8EEDE;
  --light-gray: #E0D9CC;
  --orange: #EF6404;

}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--light-dark)
  }

  main {
    padding: 5vw;
    max-width: 900px;
    margin: auto;
    margin-bottom: 60px;
  }

  h1,h2,h3,h4,h5,h6 {
    color: var(--light)
  }

  p {
    color: var(--light-gray)
  }
`;
