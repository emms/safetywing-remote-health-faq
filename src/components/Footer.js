import React from 'react'
import styled from 'styled-components/macro'

const Footer = styled.div`
  height: 150px;
  background-color: ${({ theme }) => theme.color.footer.background};
`

export default () => <Footer />
