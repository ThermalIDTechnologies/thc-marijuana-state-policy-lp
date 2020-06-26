import React from "react"
import { FormAuthProvider } from "./src/context/FormAuthContext"
import GlobalStyles from "./src/components/styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "./src/components/theme"

export const wrapRootElement = ({ element }) => (
  <FormAuthProvider>
    <ThemeProvider theme={theme}>
      {element}
      <GlobalStyles />
    </ThemeProvider>
  </FormAuthProvider>
)
