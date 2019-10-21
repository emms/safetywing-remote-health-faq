import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { media } from 'styles'
import { MOCK_NAVIGATION_HEIGHT } from 'consts'
import ScrollToSticky from 'components/ScrollToSticky'

const StyledScrollToSticky = styled(ScrollToSticky)`
  width: 100%;
`

const SearchBg = styled.div`
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

  return (
    <StyledScrollToSticky stickY={MOCK_NAVIGATION_HEIGHT} className={className}>
      <SearchBg
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
      </SearchBg>
    </StyledScrollToSticky>
  )
}

export default SearchInputHeader
