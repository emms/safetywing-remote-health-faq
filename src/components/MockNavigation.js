import React from 'react'
import styled from 'styled-components/macro'
import { MOCK_NAVIGATION_HEIGHT } from 'consts'

const MockNavigation = styled.div`
  height: ${MOCK_NAVIGATION_HEIGHT}px;
`

const MockNavigationContent = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.navigation.background};
  z-index: 2;
`

export default () => (
  <MockNavigation>
    <MockNavigationContent />
  </MockNavigation>
)
