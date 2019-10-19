import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'styles'
import FAQPage from 'pages/FAQPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <FAQPage />
      </>
    </ThemeProvider>
  )
}

export default App
