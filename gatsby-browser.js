import React from "react"
import GlobalStyles from "./src/components/styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "./src/components/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    {element}
    <GlobalStyles />
  </ThemeProvider>
)

require("typeface-raleway")