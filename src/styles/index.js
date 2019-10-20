import { css, createGlobalStyle } from 'styled-components'

export const sizes = {
  largeDesktopUp: 1400,
  desktopUp: 1024,
  tabletLandscapeUp: 900,
  tabletPortraitUp: 600
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const theme = {
  color: {
    header: {
      background: '#333377',
      foreground: '#FFF'
    },
    navigation: {
      background: '#ebebf2',
      foreground: '#273C49'
    },
    footer: {
      background: '#273C49',
      foreground: '#FFF'
    },
    sideNav: {
      background: '#FFF',
      foreground: '#BEBEBE'
    },
    sideNavActive: {
      background: '#F0F0FF',
      foreground: '#5656C2'
    },
    link: {
      background: 'transparent',
      foreground: '#7ADDB6'
    },
    category: {
      background: 'transparent',
      foreground: '#5656C2'
    },
    primary: {
      background: 'transparent',
      foreground: '#273C49'
    }
  },
  fontFamily: 'Helvetica'
}

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.color.primary.foreground};
    background-color: ${({ theme }) => theme.color.primary.background};
  }

  #root {
    width: 100%;
    height: 100%;
  }
`
