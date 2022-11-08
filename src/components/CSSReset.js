import { createGlobalStyle } from "styled-components";
import config from "../../config.json"

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${config.themes.dark.textColorBase}
  }
  body {
    font-family: sans-serif;
    overflow-x: hidden;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }

  .comp {
    @media only screen and (min-width: 1650px) {
      padding-left :7vw !important;
      padding-right :7vw !important;
    } 
  }

`;