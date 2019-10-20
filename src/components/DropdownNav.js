import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const activeStyles = css`
  background-color: ${({ theme }) => theme.color.sideNavActive.background};
  color: ${({ theme }) => theme.color.sideNavActive.foreground};
`

const StyledDropdownNav = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  z-index: 1;
`

const SelectedItem = styled.div`
  padding: 10px;
  border: 1px solid;
  border-radius: 7px;
  border-color: ${({ theme }) => theme.color.sideNavActive.foreground};
  ${activeStyles};
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

  &:last-child {
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    border-bottom: 0;
  }
`

const options = [
  'About SafetyWing and Remote Health',
  'Insurance coverage',
  'Signing up and pricing',
  'Getting treatment and making claims'
]

const DropdownNav = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])
  return (
    <StyledDropdownNav className={className}>
      {isOpen ? (
        <Dropdown>
          <div>Categories</div>
          {options.map((option, i) => (
            <Option
              key={i}
              onClick={() => {
                setSelectedOption(option)
                setIsOpen(false)
              }}
              active={selectedOption === option}
            >
              {option}
            </Option>
          ))}
        </Dropdown>
      ) : (
        <SelectedItem onClick={() => setIsOpen(true)}>
          {selectedOption}
        </SelectedItem>
      )}
    </StyledDropdownNav>
  )
}

export default DropdownNav
