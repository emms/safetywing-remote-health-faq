import React, { useState } from 'react'
import styled from 'styled-components/macro'

const StyledTextInput = styled.input`
  width: 350px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.header.foreground};
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.header.foreground};

  ::placeholder {
    color: #bebebe;
  }

  &:focus {
    outline: none;
  }
`

const SearchInput = ({ className, onSearch }) => {
  const [inputValue, setInputValue] = useState('')
  return (
    <form
      className={className}
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
  )
}

export default SearchInput
