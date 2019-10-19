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
  colorNavigation: '#626c8b29',
  colorFooter: '#273C49',
  colorHeaderBackground: '#333377',
  colorText: '#273C49',
  colorLinks: '#7ADDB6',
  colorLinkBackground: '#F0F0FF',
  colorCategory: '#5656C2',
  fontFamily: 'Helvetica'
}

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.colorText};
  }

  #root {
    width: 100%;
    height: 100%;
  }
`
