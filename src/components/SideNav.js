import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  width: 100%;
`

const StyledSideNav = styled.div`
  position: fixed;
  padding-left: 50px;
`

const NavLink = styled.h3`
  margin: 0;
  padding: 10px 10px 10px 0;
  background-color: ${props =>
    props.active ? props.theme.colorLinkBackground : 'transparent'}

  &:not(:first-child) {
    margin-top: 30px;
  }
`

const Contact = styled.div`
  padding-top: 80px;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colorLinks};
  }
`

const SideNav = () => {
  return (
    <Container>
      <StyledSideNav>
        <NavLink active>About SafetyWing and Remote Health</NavLink>
        <NavLink>Insurance coverage</NavLink>
        <NavLink>Signing up and pricing</NavLink>
        <NavLink>Getting treatment and making claims</NavLink>
        <Contact>
          Can't find what you're looking for? <a href="/">Contact us</a>
        </Contact>
      </StyledSideNav>
    </Container>
  )
}

export default SideNav
