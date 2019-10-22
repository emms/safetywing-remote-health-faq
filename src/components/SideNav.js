import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components/macro'
import StickToScroll from 'components/StickToScroll'
import { MOCK_NAVIGATION_HEIGHT, SEARCH_HEIGHT } from 'consts'
import { links } from 'links'

const StyledStickToScroll = styled(StickToScroll)`
  height: 100%;
`

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
`

const StyledSideNav = styled.div`
  display: flex;
  flex-direction: column;
`

const NavLink = styled.a`
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
  cursor: pointer;
  font-size: 1.17em;
  font-weight: bold;
  text-decoration: none;

  &:not(:first-child) {
    margin-top: 30px;
  }
`

const SideNav = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = elementId => {
    const el = document.querySelector(`#${elementId}`)
    if (!el) {
      return
    }
    // scrollOffset is the amount that we need to adjust the scroll position to
    // take into account the elements with a fixed position and "negative space"
    // 60px is added to account for padding and 1px subtracted for border
    const scrollOffset = MOCK_NAVIGATION_HEIGHT + SEARCH_HEIGHT + 60 - 1
    window.scrollTo({ top: el.offsetTop - scrollOffset, behavior: 'smooth' })
  }

  const getElementPositions = useCallback(() => {
    return links.map(link => {
      const el = document.querySelector(`#${link.id}`)
      return el.offsetTop
    })
  }, [])

  const handleScroll = useCallback(
    positions => {
      const activeCategoryIndex = positions.findIndex(x => x > window.scrollY)
      if (activeCategoryIndex !== activeIndex) {
        setActiveIndex(activeCategoryIndex)
      }
    },
    [activeIndex]
  )

  useEffect(
    () => {
      const elPositions = getElementPositions()
      const scrollHandler = () => handleScroll(elPositions)
      window.addEventListener('scroll', scrollHandler)
      return () => {
        window.removeEventListener('scroll', scrollHandler)
      }
    },
    [handleScroll, getElementPositions]
  )

  return (
    <StyledStickToScroll
      topBound={MOCK_NAVIGATION_HEIGHT + SEARCH_HEIGHT}
      className={className}
    >
      <Container>
        <StyledSideNav>
          {links.map((link, i) => (
            <NavLink
              key={i}
              active={i === activeIndex}
              onClick={() => handleClick(link.id)}
            >
              {link.title}
            </NavLink>
          ))}
        </StyledSideNav>
      </Container>
    </StyledStickToScroll>
  )
}

export default SideNav
