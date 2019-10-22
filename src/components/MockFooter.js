import React from 'react'
import styled from 'styled-components/macro'
import { MOCK_FOOTER_HEIGHT } from 'consts'

const MockFooter = styled.div`
  height: ${MOCK_FOOTER_HEIGHT}px;
  background-color: ${({ theme }) => theme.color.MockFooter.background};
`

export default () => <MockFooter />
