import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import StickToScroll from 'components/StickToScroll'
import usePageNavigation from 'hooks/usePageNavigation'
import {
  MOCK_NAVIGATION_HEIGHT,
  SEARCH_HEIGHT,
  DROPDOWN_NAV_HEIGHT
} from 'consts'
import { links } from 'links'

const activeStyles = css`
  background-color: ${({ theme }) => theme.color.sideNavActive.background};
  color: ${({ theme }) => theme.color.sideNavActive.foreground};
`

const StyledStickToScroll = styled(StickToScroll)`
  width: 100%;
`

const StyledDropdownNav = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  position: relative;
  font-weight: bold;
  background-color: ${({ theme }) => theme.color.sideNav.background};
  z-index: 1;
`

const SelectedItem = styled.div`
  padding: 10px;
  border: 1px solid;
  border-radius: 7px;
  border-color: ${({ theme }) => theme.color.sideNavActive.foreground};
  position: relative;
  ${activeStyles};
  cursor: pointer;

  ::before {
    content: ' ';
    position: absolute;
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid ${({ theme }) => theme.color.primary.foreground};
  }
`

const Dropdown = styled.div`
  border: 1px solid;
  border-radius: 7px;
  border-color: ${({ theme }) => theme.color.sideNavActive.foreground};
  background-color: ${({ theme }) => theme.color.sideNav.background};

  > * {
    padding: 10px;
  }
`

const Option = styled.div`
  color: ${({ theme }) => theme.color.sideNav.foreground};
  ${props => props.active && activeStyles};
  border-top: ${props => (props.active ? '1px solid' : 'none')};
  border-bottom: ${props => (props.active ? '1px solid' : 'none')};
  border-color: ${({ theme }) => theme.color.sideNavActive.foreground};
  cursor: pointer;

  &:last-child {
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    border-bottom: 0;
  }
`

const DropdownTitle = styled.div`
  position: relative;

  ::before {
    content: ' ';
    position: absolute;
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid ${({ theme }) => theme.color.primary.foreground};
  }
`

const DropdownNav = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef()

  const handleClick = e => {
    // close dropdown if user clicks outside of it
    if (dropdownRef.current.contains(e.target)) return
    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const scrollOffset =
    MOCK_NAVIGATION_HEIGHT + SEARCH_HEIGHT + DROPDOWN_NAV_HEIGHT + 60 - 1
  const { activeLinkIndex, createClickHandler } = usePageNavigation(
    links,
    scrollOffset
  )

  return (
    <StyledStickToScroll
      topBound={MOCK_NAVIGATION_HEIGHT + SEARCH_HEIGHT - 1}
      className={className}
    >
      <StyledDropdownNav className={className} ref={dropdownRef}>
        {isOpen ? (
          <Dropdown>
            <DropdownTitle onClick={() => setIsOpen(false)}>
              Categories
            </DropdownTitle>
            {links.map((link, i) => (
              <Option
                key={i}
                href={`#${link.id}`}
                active={i === activeLinkIndex}
                onClick={e => {
                  createClickHandler(link.id)(e)
                  setIsOpen(false)
                }}
              >
                {link.title}
              </Option>
            ))}
          </Dropdown>
        ) : (
          <SelectedItem onClick={() => setIsOpen(true)}>
            {links[activeLinkIndex].title}
          </SelectedItem>
        )}
      </StyledDropdownNav>
    </StyledStickToScroll>
  )
}

export default DropdownNav
