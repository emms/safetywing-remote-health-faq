import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import StickToScroll from 'components/StickToScroll'
import usePageNavigation from 'hooks/usePageNavigation'
import {
  MOCK_NAVIGATION_HEIGHT,
  SEARCH_HEIGHT,
  DROPDOWN_NAV_HEIGHT
} from 'consts'
import { categories } from 'content'

const activeStyles = css`
  background-color: ${({ theme }) => theme.color.sideNavActive.background};
  color: ${({ theme }) => theme.color.sideNavActive.foreground};
`

const StyledStickToScroll = styled(StickToScroll)`
  width: 100%;
`

const DropdownNavWrapper = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.sideNav.background};
`

const StyledDropdownNav = styled.div`
  position: relative;
  font-weight: bold;
  z-index: 1;
  perspective: 400px;
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
    top: 16px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid ${props => props.theme.color.sideNavActive.foreground};
  }

  opacity: 0;
  pointer-events: none;
  transform-origin: 50% 0;
  transform: rotate3d(1, 0, 0, 90deg);
  transition-property: opacity transform;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: rotate3d(1, 0, 0, 0);
    `};

  > * {
    padding: 10px;
  }
`

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border: 1px solid;
  border-radius: 7px;
  border-color: ${({ theme }) => theme.color.sideNavActive.foreground};
  background-color: ${({ theme }) => theme.color.sideNav.background};

  opacity: 0;
  pointer-events: none;
  transform-origin: 50% 0;
  transform: translate3d(0, 40px, 0) rotate3d(1, 0, 0, -90deg);
  transition-property: opacity transform;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: translate3d(0, 0, 0) rotate3d(1, 0, 0, 0);
    `};

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
    categories,
    scrollOffset
  )

  return (
    <StyledStickToScroll
      bound={MOCK_NAVIGATION_HEIGHT + SEARCH_HEIGHT - 1}
      className={className}
    >
      <DropdownNavWrapper>
        <StyledDropdownNav className={className} ref={dropdownRef}>
          <SelectedItem onClick={() => setIsOpen(true)} isOpen={isOpen}>
            {categories[activeLinkIndex].title}
          </SelectedItem>
          <Dropdown isOpen={isOpen}>
            <DropdownTitle onClick={() => setIsOpen(false)}>
              Categories
            </DropdownTitle>
            {categories.map((link, i) => (
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
        </StyledDropdownNav>
      </DropdownNavWrapper>
    </StyledStickToScroll>
  )
}

export default DropdownNav
