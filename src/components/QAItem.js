import React, { useState } from 'react'
import styled from 'styled-components/macro'

const StyledQAItem = styled.div`
  position: relative;
  padding-left: 30px;

  ::before {
    content: ' ';
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid
      ${props =>
        props.showAnswer
          ? props.theme.color.primary.foreground
          : props.theme.color.primary.background};
    border-top: 7px solid
      ${props =>
        props.showAnswer
          ? props.theme.color.primary.background
          : props.theme.color.primary.foreground};
    position: absolute;
    top: ${props => (props.showAnswer ? '-2px' : '5px')};
    left: 0;
  }

  > h4 {
    margin: 0;
    padding-bottom: ${props => (props.showAnswer ? '0' : '60px')};
    user-select: none;
    cursor: pointer;
  }
`

const Answer = styled.div`
  padding: 30px 0 40px 0;

  > :first-child {
    padding: 0;
    margin: 0;
  }

  > ul {
    margin-bottom: 0;

    > li {
      padding-top: 20px;
    }
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
