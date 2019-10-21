import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import styled from 'styled-components/macro'
import { media } from 'styles'
import { MOCK_NAVIGATION_HEIGHT } from 'consts'

const StyledTextInputHeader = styled.div`
  position: relative;
  width: 100%;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.header.background};
  z-index: 2;
`

const StyledTextInput = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.header.foreground};
  font-size: 16px;
  color: ${({ theme }) => theme.color.header.foreground};
  background-color: transparent;

  ::placeholder {
    color: #bebebe;
  }

  &:focus {
    outline: none;
  }

  ${media.tabletPortraitUp`
    width: 350px;
  `}
`

const SearchInputHeader = ({ className, onSearch }) => {
  const [inputValue, setInputValue] = useState('')
  const relativeRef = useRef()
  const stickyRef = useRef()

  const handleScroll = useCallback(
    () => {
      const { top } = relativeRef.current.getBoundingClientRect()
      if (top < MOCK_NAVIGATION_HEIGHT) {
        stickyRef.current.style.position = 'fixed'
        stickyRef.current.style.top = `${MOCK_NAVIGATION_HEIGHT}px`
      } else {
        stickyRef.current.style.position = 'static'
      }
    },
    [relativeRef, stickyRef]
  )

  useLayoutEffect(
    () => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    [handleScroll]
  )

  return (
    <StyledTextInputHeader className={className} ref={relativeRef}>
      <Wrapper ref={stickyRef}>
        <form
          onSubmit={e => {
            e.preventDefault()
            onSearch(inputValue)
          }}
        >
          <StyledTextInput
            type="text"
            placeholder="Search FAQ"
            onChange={e => setInputValue(e.target.value)}
          />
        </form>
      </Wrapper>
    </StyledTextInputHeader>
  )
}

export default SearchInputHeader
