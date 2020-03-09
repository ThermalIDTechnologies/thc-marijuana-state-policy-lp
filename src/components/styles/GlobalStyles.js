import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Raleway, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${'' /* font-family: 'Oswald', sans-serif;  */}
    font-weight: 600;
  }

  td {
    font-size: 90%;
  }

  @media screen and (min-width: 480px) {
  td {
    font-size: 100%;
  }
}
`

export default GlobalStyle
