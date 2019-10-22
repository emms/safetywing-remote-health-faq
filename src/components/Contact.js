import React from 'react'
import styled from 'styled-components/macro'

const StyledContact = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50px;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.link.foreground};
  }
`

const Contact = () => (
  <StyledContact>
    Can't find what you're looking for? <a href="/">Contact us</a>
  </StyledContact>
)

export default Contact
