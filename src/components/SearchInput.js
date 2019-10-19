import React, { useState } from 'react'
import styled from 'styled-components'

const StyledTextInput = styled.input`
  width: 350px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #fff;
  font-size: 16px;
  background-color: transparent;
  color: #fff;

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
