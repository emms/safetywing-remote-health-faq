import React from 'react'
import styled from 'styled-components/macro'
import { media } from 'styles'
import { MOCK_NAVIGATION_HEIGHT } from 'consts'
import StickToScroll from 'components/StickToScroll'

const StyledStickToScroll = styled(StickToScroll)`
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

const SearchInputHeader = ({ className, value, onSearch, searchStr }) => {
  return (
    <StyledStickToScroll
      topBound={MOCK_NAVIGATION_HEIGHT}
      className={className}
    >
      <SearchBg>
        <StyledTextInput
          type="text"
          placeholder="Search FAQ"
          value={searchStr}
          onChange={e => onSearch(e.target.value)}
        />
      </SearchBg>
    </StyledStickToScroll>
  )
}

export default SearchInputHeader
