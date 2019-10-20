import React, { useState } from 'react'
import styled from 'styled-components/macro'

const StyledTextInputHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px 0 0 30px;
  color: ${({ theme }) => theme.color.header.foreground};
  background-color: ${({ theme }) => theme.color.header.background};
`

const StyledTextInput = styled.input`
  width: 350px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.header.foreground};
  font-size: 16px;
  background-color: transparent;

  ::placeholder {
    color: #bebebe;
  }

  &:focus {
    outline: none;
  }
`

const SearchInputHeader = ({ className, onSearch }) => {
  const [inputValue, setInputValue] = useState('')
  return (
    <StyledTextInputHeader className={className}>
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
    </StyledTextInputHeader>
  )
}

export default SearchInputHeader
