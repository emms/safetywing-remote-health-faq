import React from 'react'
import styled from 'styled-components/macro'

const MockNavigation = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.colorNavigation};
`

export default () => <MockNavigation />
