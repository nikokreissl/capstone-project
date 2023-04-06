import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  box-sizing: border-box;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }

  main {
    margin-bottom: 60px;
  }
`;
