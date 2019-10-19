import React, { useState } from 'react'
import styled from 'styled-components/macro'

const StyledQAItem = styled.div`
  > h4 {
    margin: 0;
    padding-bottom: ${props => (props.showAnswer ? '0' : '60px')};
    user-select: none;
  }
`

const Answer = styled.div`
  padding: 30px 0 40px 0;

  > :first-child {
    padding: 0;
    margin: 0;
  }
`

const QAItem = ({ question, children }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  const renderAnswer = () => {
    if (children) {
      return <Answer>{children}</Answer>
    }
    return (
      <Answer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Answer>
    )
  }

  return (
    <StyledQAItem showAnswer={showAnswer}>
      <h4 onClick={() => setShowAnswer(!showAnswer)}>{question}</h4>
      {showAnswer && renderAnswer()}
    </StyledQAItem>
  )
}

export default QAItem
