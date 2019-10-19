import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'styles'
import FAQPage from 'pages/FAQPage'
import MockNavigation from 'components/MockNavigation'
import Footer from 'components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MockNavigation />
        <FAQPage />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
