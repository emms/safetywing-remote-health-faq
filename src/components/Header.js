import React from 'react'
import styled from 'styled-components/macro'

const StyledHeader = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.color.header.background};
  color: ${({ theme }) => theme.color.header.foreground};
`

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  text-transform: capitalize;
`

const Header = ({ title, children }) => (
  <StyledHeader>
    <Title>{title}</Title>
    {children}
  </StyledHeader>
)

export default Header
