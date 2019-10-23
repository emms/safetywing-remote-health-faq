import React from 'react'
import styled from 'styled-components'
import StickToScroll from 'components/StickToScroll'
import usePageNavigation from 'hooks/usePageNavigation'
import { MOCK_NAVIGATION_HEIGHT, SEARCH_HEIGHT, TAB_NAV_HEIGHT } from 'consts'
import { links } from 'links'

const StyledTabNav = styled.div`
  height: ${TAB_NAV_HEIGHT}px;
  margin: 0 20px;
  display: flex;
  flex-direction: row;

  > * {
    flex: 1;
  }
`

const NavLink = styled.a`
  margin: 0;
  padding: 18px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: ${props =>
    props.active
      ? props.theme.color.sideNavActive.background
      : props.theme.color.sideNav.background};
  color: ${props =>
    props.active
      ? props.theme.color.sideNavActive.foreground
      : props.theme.color.sideNav.foreground};
  font-weight: bold;
  text-decoration: none;
`

const TabNav = ({ className }) => {
  // scrollOffset is the amount that we need to adjust the scroll position to
  // take into account the elements with a fixed position and "negative space"
  // 60px is added to account for padding and 5px subtracted so that the border
  // is not visible anywhere underneath the rounded corners of the tabs
  const scrollOffset =
    MOCK_NAVIGATION_HEIGHT + SEARCH_HEIGHT + TAB_NAV_HEIGHT + 60 - 5
  const { activeLinkIndex, createClickHandler } = usePageNavigation(
    links,
    scrollOffset
  )
  return (
    <StickToScroll
      bound={MOCK_NAVIGATION_HEIGHT + SEARCH_HEIGHT}
      className={className}
    >
      <StyledTabNav className={className}>
        {links.map((link, i) => (
          <NavLink
            key={i}
            href={`#${link.id}`}
            active={i === activeLinkIndex}
            onClick={createClickHandler(link.id)}
          >
            {link.title}
          </NavLink>
        ))}
      </StyledTabNav>
    </StickToScroll>
  )
}

export default TabNav
