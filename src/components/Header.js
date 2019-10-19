import React from 'react'
import styled from 'styled-components/macro'

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colorHeaderBackground};
  padding: 30px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  color: #fff;
  text-transform: capitalize;
`

const Header = ({ title, children }) => (
  <StyledHeader>
    <Title>{title}</Title>
    {children}
  </StyledHeader>
)

export default Header
