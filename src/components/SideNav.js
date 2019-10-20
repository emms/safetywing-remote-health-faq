import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  width: 100%;
`

const StyledSideNav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
`

const NavLink = styled.h3`
  margin: 0;
  padding: 10px 10px 10px 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${props =>
    props.active
      ? props.theme.color.sideNavActive.background
      : props.theme.color.sideNav.background};
  color: ${props =>
    props.active
      ? props.theme.color.sideNavActive.foreground
      : props.theme.color.sideNav.foreground};

  &:not(:first-child) {
    margin-top: 30px;
  }
`

const Contact = styled.div`
  padding: 80px 0 0 50px;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.link.foreground};
  }
`

const SideNav = () => {
  return (
    <Container>
      <StyledSideNav>
        <NavLink active>About SafetyWing and Remote Health</NavLink>
        <NavLink active={false}>Insurance coverage</NavLink>
        <NavLink active={false}>Signing up and pricing</NavLink>
        <NavLink active={false}>Getting treatment and making claims</NavLink>
        <Contact>
          Can't find what you're looking for? <a href="/">Contact us</a>
        </Contact>
      </StyledSideNav>
    </Container>
  )
}

export default SideNav
