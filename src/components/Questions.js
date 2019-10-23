import React from 'react'
import styled from 'styled-components/macro'
import Highlighter from 'react-highlight-words'
import QAItem from 'components/QAItem'
import { media } from 'styles'
import { CATEGORIES } from 'consts'

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
  const placeholderAnswerEl = (
    <p>
      <Highlighter
        searchWords={[searchStr]}
        textToHighlight="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
      />
    </p>
  )

  const questions = [
    {
      category: CATEGORIES.ABOUT,
      question:
        'What is the difference between SafetyWing Nomad insurance and SafetyWing Remote Health?'
    },
    {
      category: CATEGORIES.ABOUT,
      question:
        'What is the difference in coverage between Remote Health for Teams and Remote Health for Individuals?',
      answer:
        'The insurance product is the same. For teams, some additional perks are available, for example:' +
        ' There is a discount based on the size of the company There is a discount based on the size of ' +
        'the company If the company is 5+ employees, we disregard any medical history of the team members. ' +
        'This means that we will not ask questions about pre-existing conditions, and that your employees ' +
        'will be covered regardless of any such conditions. The option to add wellness coverage',
      answerEl: (
        <>
          <p>
            <Highlighter
              searchWords={[searchStr]}
              textToHighlight="The insurance product is the same. For teams, some additional perks are available, for example:"
            />
          </p>
          <ul>
            <li>
              <Highlighter
                searchWords={[searchStr]}
                textToHighlight="There is a discount based on the size of the company"
              />
            </li>
            <li>
              <Highlighter
                searchWords={[searchStr]}
                textToHighlight="If the company is 5+ employees, we disregard any medical history of the team members. This means that we will not ask questions about pre-existing conditions, and that your employees will be covered regardless of any such conditions."
              />
            </li>
            <li>
              <Highlighter
                searchWords={[searchStr]}
                textToHighlight="The option to add wellness coverage"
              />
            </li>
          </ul>
        </>
      )
    },
    {
      category: CATEGORIES.ABOUT,
      question:
        'Why does my coverage have “Now Health” on it and why am I logging into a “Now Health” portal for claims?'
    },
    {
      category: CATEGORIES.ABOUT,
      question: 'How long can I buy the insurance for?'
    },
    {
      category: CATEGORIES.ABOUT,
      question: 'How do I add people to the policy?'
    },
    {
      category: CATEGORIES.ABOUT,
      question: 'Can I use Remote Health for Visa application?'
    },
    {
      category: CATEGORIES.ABOUT,
      question: 'Can I use Remote Health for Visa application?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question:
        'Who can buy SafetyWing Remote Health? (Age, country, company minimum limit, etc.)'
    },
    {
      category: CATEGORIES.COVERAGE,
      question: 'Where can I use the insurance? (Hospitals, doctors, etc.)'
    },
    {
      category: CATEGORIES.COVERAGE,
      question: 'Can I add family members (dependants) to my coverage?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question: 'Does remote health cover pre-existing conditions?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question: 'How do I check if a condition or treatment is covered?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question: 'How do “addons” work?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question: 'Is Dental/Vision covered?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question: 'Where can I use the insurance? (Countries covered)'
    },
    {
      category: CATEGORIES.COVERAGE,
      question:
        'Are there any countries excluded from the coverage if someone ' +
        'is travelling there; Here I am thinking about high risk countries, e.g ' +
        'Venezuela, Somalia, Mali, etc. Or countries with trade sanctions to them, ' +
        'such as Iran, Cuba, etc.?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question:
        'Up to what age can my children/dependants stay on the insurance plan?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question: 'Does Remote Health cover prescriptions?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question: 'What if I or an employee doesn’t have one single home-base?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question:
        'What if my employee has access to free health care through the government. Is the policy still relevant for them?'
    },
    {
      category: CATEGORIES.COVERAGE,
      question: 'What kind of sports are excluded under the plan?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question: 'Could I just buy the insurance directly through your carrier?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question: 'How much does the insurance cost?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question: 'How does the price change as our company grows?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question: 'What kind of sports are excluded under the plan?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question: 'How do you calculate my premium?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question: 'Do I need to add all my employees to the policy?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question:
        'Can I allow my employees to choose whether they join the policy?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question:
        'What happens if my team is already covered by another provider?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question: 'Can I sign up my whole family?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question:
        'Does everyone in my company have to be covered, or can I pick and choose?'
    },
    {
      category: CATEGORIES.SIGNUP_AND_PRICING,
      question: 'What employee information do I need to sign up our company?'
    },
    {
      category: CATEGORIES.TREATMENT_AND_CLAIMS,
      question:
        'How does the claims process work for treatments I’ve already paid for?'
    },
    {
      category: CATEGORIES.TREATMENT_AND_CLAIMS,
      question: 'What to do in an emergency?'
    },
    {
      category: CATEGORIES.TREATMENT_AND_CLAIMS,
      question: 'How long does the claims process normally take?'
    },
    {
      category: CATEGORIES.TREATMENT_AND_CLAIMS,
      question:
        'Do I have to pay for treatment in advance / how do I do direct billing?'
    },
    {
      category: CATEGORIES.TREATMENT_AND_CLAIMS,
      question: 'How do I find a hospital?'
    },
    {
      category: CATEGORIES.TREATMENT_AND_CLAIMS,
      question: 'How can I check on the status of a filed claim?'
    },
    {
      category: CATEGORIES.TREATMENT_AND_CLAIMS,
      question: 'How does the NOW Health Insurance online portal work?'
    }
  ]

  if (searchStr) {
    const questionsWithMatches = questions.filter(q => {
      if (q.answer) {
        return (
          q.question.toLowerCase().includes(searchStr.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchStr.toLowerCase())
        )
      }
      return q.question.toLowerCase().includes(searchStr.toLowerCase())
    })

    return (
      <QuestionsContainer className={className}>
        {questionsWithMatches.length > 0 ? (
          questionsWithMatches.map((item, i) => (
            <QAItem
              key={i}
              searchStr={searchStr}
              question={item.question}
              isOpen
            >
              {item.answerEl ? item.answerEl : placeholderAnswerEl}
            </QAItem>
          ))
        ) : (
          <NoResults>No Results found</NoResults>
        )}
      </QuestionsContainer>
    )
  }

  return (
    <QuestionsContainer className={className}>
      {Object.keys(CATEGORIES).map(category => (
        <Category id={CATEGORIES[category]} key={CATEGORIES[category]}>
          {questions
            .filter(q => q.category === CATEGORIES[category])
            .map((item, i) => (
              <QAItem key={i} question={item.question}>
                {item.answerEl ? item.answerEl : placeholderAnswerEl}
              </QAItem>
            ))}
        </Category>
      ))}
    </QuestionsContainer>
  )
}

export default Questions
