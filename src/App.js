import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'styles'
import FAQPage from 'pages/FAQPage'
import MockNavigation from 'components/MockNavigation'
import MockFooter from 'components/MockFooter'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MockNavigation />
        <FAQPage />
        <MockFooter />
      </>
    </ThemeProvider>
  )
}

export default App
