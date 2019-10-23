import React from 'react'
import styled from 'styled-components/macro'

const StyledContact = styled.div`
  padding: 60px 50px;
  font-size: 14px;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.link.foreground};
  }
`

const Contact = ({ className }) => (
  <StyledContact className={className}>
    Can't find what you're looking for? <a href="/">Contact us</a>
  </StyledContact>
)

export default Contact
