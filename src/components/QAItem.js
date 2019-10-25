import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import styled, { keyframes } from 'styled-components/macro'
import ReactMarkdown from 'react-markdown'
import { uniq } from 'ramda'

const StyledQAItem = styled.div`
  position: relative;
  padding-left: 30px;

  .highlight {
    display: inline-block;
    position: relative;

    ::before {
      content: ' ';
      position: absolute;
      top: 0;
      left: -2px;
      right: -2px;
      bottom: 0;
      background-color: #c7c7ff;
      z-index: -1;
    }
  }

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
    top: ${props => (props.showAnswer ? 0 : '10px')};
    left: 0;
  }

  > h4 {
    margin: 0;
    padding-bottom: ${props => (props.showAnswer ? '0' : '60px')};
    user-select: none;
    cursor: pointer;
    font-size: 18px;
    line-height: 1.6;
  }
`

const Answer = styled.div`
  padding: 30px 0 40px 0;
  line-height: 1.6;
  animation-name: ${keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `};
  animation-duration: 200ms;
  animation-timing-function: ease-in-out;

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

const QAItem = ({ question, searchStr, answer, isOpen }) => {
  const [showAnswer, setShowAnswer] = useState(isOpen || false)
  const ref = useRef()

  useLayoutEffect(
    () => {
      const highlightSearchStr = el => {
        if (!el) {
          return
        }
        ;[...el.children].forEach(highlightSearchStr)

        if (!el.children.length) {
          const matches = uniq(
            el.innerHTML.match(new RegExp(searchStr, 'ig')) || []
          )
          const nextInnerHTML = matches.reduce((acc, match) => {
            return acc.replace(new RegExp(match, 'g'), `<!--${match}-->`)
          }, el.innerHTML)
          el.innerHTML = nextInnerHTML
            .replace(/<!--/g, '<span class="highlight">')
            .replace(/-->/g, '</span>')
        }
      }

      if (searchStr) {
        highlightSearchStr(ref.current)
      }
    },
    [searchStr, showAnswer]
  )

  useEffect(
    () => {
      window.dispatchEvent(new Event('faq-item-toggle'))
    },
    [showAnswer]
  )

  return (
    <StyledQAItem showAnswer={showAnswer} ref={ref} key={searchStr}>
      <h4 onClick={() => setShowAnswer(!showAnswer)}>{question}</h4>
      {showAnswer && (
        <Answer>
          <ReactMarkdown>{answer}</ReactMarkdown>
        </Answer>
      )}
    </StyledQAItem>
  )
}

export default QAItem
