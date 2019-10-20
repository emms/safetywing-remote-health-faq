import React from 'react'
import styled from 'styled-components/macro'
import QAItem from 'components/QAItem'
import { media } from 'styles'

const QuestionsContainer = styled.div`
  padding: 30px;
  padding-bottom: 0;

  ${media.tabletPortraitUp`
    padding: 50px;
    padding-bottom: 0;
  `}
`

const Category = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.category.foreground};
  }

  &:not(:first-child) {
    padding-top: 60px;
  }
`

const List = styled.ul`
  margin-bottom: 0;
`

const ListItem = styled.li`
  padding-top: 20px;
`

const Questions = ({ className }) => {
  return (
    <QuestionsContainer className={className}>
      <Category>
        <QAItem question="What is the difference between SafetyWing Nomad insurance and SafetyWing Remote Health?" />
        <QAItem question="What is the difference in coverage between Remote Health for Teams and Remote Health for Individuals?">
          <p>
            The insurance product is the same. For teams, some additional perks
            are available, for example:
          </p>
          <List>
            <ListItem>
              There is a discount based on the size of the company
            </ListItem>
            <ListItem>
              If the company is 5+ employees, we disregard any medical history
              of the team members. This means that we will not ask questions
              about pre-existing conditions, and that your employees will be
              covered regardless of any such conditions.
            </ListItem>
            <ListItem>The option to add wellness coverage</ListItem>
          </List>
        </QAItem>
        <QAItem question="Why does my coverage have “Now Health” on it and why am I logging into a “Now Health” portal for claims?" />
        <QAItem question="How long can I buy the insurance for?" />
        <QAItem question="How do I add people to the policy?" />
        <QAItem question="Can I use Remote Health for Visa application?" />
        <QAItem question="How can I edit or cancel my insurance (remove people, edit company coverage, etc)?" />
        <QAItem question="What happens if a company reduces employees taking them from one discount bracket to another (eg. from 11 to 9)?" />
        <QAItem question="How do you handle the privacy of policy holders’ personal information?" />
        <QAItem question="Do you have any case studies or examples of current companies you insure?" />
        <QAItem question="What happens with our insurance if something happens to SafetyWing as a company?" />
        <QAItem question="How do you plan to improve the insurance product in the future?" />
      </Category>
      <Category>
        <QAItem question="Who can buy SafetyWing Remote Health? (Age, country, company minimum limit, etc.)" />
        <QAItem question="Where can I use the insurance? (Hospitals, doctors, etc.)" />
        <QAItem question="Can I add family members (dependants) to my coverage?" />
        <QAItem question="Does remote health cover pre-existing conditions?" />
        <QAItem question="How do I check if a condition or treatment is covered?" />
        <QAItem question="How do “addons” work?" />
        <QAItem question="Is Dental/Vision covered?" />
        <QAItem question="Where can I use the insurance? (Countries covered)" />
        <QAItem question="Are there any countries excluded from the coverage if someone is travelling there; Here I am thinking about high risk countries, e.g Venezuela, Somalia, Mali, etc. Or countries with trade sanctions to them, such as Iran, Cuba, etc.?" />
        <QAItem question="Up to what age can my children/dependants stay on the insurance plan?" />
        <QAItem question="Does Remote Health cover prescriptions?" />
        <QAItem question="What if I or an employee doesn’t have one single home-base?" />
        <QAItem question="What if my employee has access to free health care through the government. Is the policy still relevant for them?" />
        <QAItem question="What kind of sports are excluded under the plan?" />
      </Category>
      <Category>
        <QAItem question="Could I just buy the insurance directly through your carrier?" />
        <QAItem question="How much does the insurance cost?" />
        <QAItem question="How does the price change as our company grows?" />
        <QAItem question="What kind of sports are excluded under the plan?" />
        <QAItem question="How do you calculate my premium?" />
        <QAItem question="Do I need to add all my employees to the policy?" />
        <QAItem question="Can I allow my employees to choose whether they join the policy?" />
        <QAItem question="What happens if my team is already covered by another provider?" />
        <QAItem question="Can I sign up my whole family?" />
        <QAItem question="Does everyone in my company have to be covered, or can I pick and choose?" />
        <QAItem question="What employee information do I need to sign up our company?" />
      </Category>
      <Category>
        <QAItem question="How does the claims process work for treatments I’ve already paid for?" />
        <QAItem question="What to do in an emergency?" />
        <QAItem question="How long does the claims process normally take?" />
        <QAItem question="Do I have to pay for treatment in advance / how do I do direct billing?" />
        <QAItem question="How do I find a hospital?" />
        <QAItem question="How can I check on the status of a filed claim?" />
        <QAItem question="How does the NOW Health Insurance online portal work?" />
      </Category>
    </QuestionsContainer>
  )
}

export default Questions
