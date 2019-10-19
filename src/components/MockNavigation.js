import React from 'react'
import styled from 'styled-components'

const MockNavigation = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.colorNavigationBackground};
`

export default () => <MockNavigation />
