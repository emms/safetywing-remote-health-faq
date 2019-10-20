import React from 'react'
import styled from 'styled-components/macro'

const StyledTitleHeader = styled.div`
  box-sizing: border-box;
  padding: 30px 0 0 30px;
  background-color: ${({ theme }) => theme.color.header.background};
  color: ${({ theme }) => theme.color.header.foreground};
`

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  text-transform: capitalize;
`

const TitleHeader = ({ className, title, children }) => (
  <StyledTitleHeader className={className}>
    <Title>{title}</Title>
    {children}
  </StyledTitleHeader>
)

export default TitleHeader
