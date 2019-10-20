import React from 'react'
import styled from 'styled-components'

const StyledTabNav = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;

  > * {
    flex: 1;
  }
`

const NavLink = styled.h4`
  margin: 0;
  padding: 18px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props =>
    props.active
      ? props.theme.color.sideNavActive.background
      : props.theme.color.sideNav.background};
  color: ${props =>
    props.active
      ? props.theme.color.sideNavActive.foreground
      : props.theme.color.sideNav.foreground};
`

const TabNav = ({ className }) => (
  <StyledTabNav className={className}>
    <NavLink active>About SafetyWing and Remote Health</NavLink>
    <NavLink active={false}>Insurance coverage</NavLink>
    <NavLink active={false}>Signing up and pricing</NavLink>
    <NavLink active={false}>Getting treatment and making claims</NavLink>
  </StyledTabNav>
)

export default TabNav
