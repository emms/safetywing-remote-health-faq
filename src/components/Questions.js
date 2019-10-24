import React from 'react'
import styled from 'styled-components/macro'
import QAItem from 'components/QAItem'
import { media } from 'styles'
import { categories } from 'content'

const QuestionsContainer = styled.div`
  box-sizing: border-box;
  padding: 30px;
  padding-bottom: 0;

  ${media.tabletPortraitUp`
    padding: 50px;
    padding-bottom: 0;
  `}
`

const Category = styled.div`
  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.category.foreground};
  }

  :not(:last-child) {
    margin-bottom: 60px;
  }
`

const NoResults = styled.h3`
  margin: 0;
`

const Questions = ({ className, searchStr }) => {
  if (searchStr) {
    const questionsWithMatches = categories.reduce((acc, category) => {
      const matchingQuestions = category.questions.filter(
        q =>
          q.question.toLowerCase().includes(searchStr.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchStr.toLowerCase())
      )
      if (matchingQuestions.length) {
        acc = [...acc, ...matchingQuestions]
      }
      return acc
    }, [])

    return (
      <QuestionsContainer className={className}>
        {questionsWithMatches.length > 0 ? (
          questionsWithMatches.map((item, i) => (
            <QAItem
              key={i}
              searchStr={searchStr}
              question={item.question}
              answer={item.answer}
              isOpen
            />
          ))
        ) : (
          <NoResults>No Results found</NoResults>
        )}
      </QuestionsContainer>
    )
  }

  return (
    <QuestionsContainer className={className}>
      {categories.map(category => (
        <Category id={category.id} key={category.id}>
          {category.questions.map((item, i) => (
            <QAItem key={i} question={item.question} answer={item.answer} />
          ))}
        </Category>
      ))}
    </QuestionsContainer>
  )
}

export default Questions
