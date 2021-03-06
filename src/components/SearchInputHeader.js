import React from 'react'
import styled from 'styled-components/macro'
import { media } from 'styles'
import { MOCK_NAVIGATION_HEIGHT, SEARCH_HEIGHT } from 'consts'
import StickToScroll from 'components/StickToScroll'

const StyledStickToScroll = styled(StickToScroll)`
  width: 100%;
`

const SearchBg = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${SEARCH_HEIGHT}px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.header.background};
  z-index: 2;
`

const InputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;

  ${media.tabletPortraitUp`
    width: 550px;
  `}
`

const StyledTextInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin: 0;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.header.foreground};
  font-size: 16px;
  color: ${({ theme }) => theme.color.header.foreground};
  background-color: transparent;

  ::placeholder {
    color: #bebebe;
  }

  :focus {
    outline: none;
  }
`

const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

const SearchIcon = styled.div`
  width: 10px;
  height: 10px;
  border: 2px solid ${({ theme }) => theme.color.header.foreground};
  position: relative;
  border-radius: 10px;

  ::before {
    content: '';
    width: 8px;
    height: 2px;
    position: absolute;
    right: -5px;
    bottom: -3px;
    background-color: ${({ theme }) => theme.color.header.foreground};
    transform: rotate(45deg);
  }
`

const CancelIcon = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
  cursor: pointer;

  > * {
    width: 2px;
    height: 10px;
    position: absolute;
    top: 5px;
    background-color: ${({ theme }) => theme.color.header.foreground};
  }

  > :first-child {
    transform: rotate(45deg);
  }

  > :last-child {
    transform: rotate(-45deg);
  }
`

const SearchInputHeader = ({ className, setSearchStr, searchStr }) => {
  return (
    <StyledStickToScroll bound={MOCK_NAVIGATION_HEIGHT} className={className}>
      <SearchBg>
        <InputContainer>
          <StyledTextInput
            type="text"
            placeholder="Search FAQ"
            value={searchStr}
            onChange={e => setSearchStr(e.target.value)}
          />
          <IconContainer>
            {searchStr.length > 0 ? (
              <CancelIcon onClick={() => setSearchStr('')}>
                <div />
                <div />
              </CancelIcon>
            ) : (
              <SearchIcon />
            )}
          </IconContainer>
        </InputContainer>
      </SearchBg>
    </StyledStickToScroll>
  )
}

export default SearchInputHeader
