import React from 'react'
import styled from 'styled-components/macro'

const MockNavigation = styled.div`
  height: 50px;
`

const MockNavigationContent = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.navigation.background};
  z-index: 1;
`

export default () => (
  <MockNavigation>
    <MockNavigationContent />
  </MockNavigation>
)
