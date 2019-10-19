import React from 'react'
import styled from 'styled-components/macro'
import Header from 'components/Header'
import SearchInput from 'components/SearchInput'
import SideNav from 'components/SideNav'
import Questions from 'components/Questions'

const StyledSearchInput = styled(SearchInput)`
  padding-top: 40px;
`

const Content = styled.div`
  padding-top: 50px;
  display: flex;

  > :first-child {
    flex: 2;
  }

  > :last-child {
    flex: 3;
  }
`

const FAQPage = () => {
  return (
    <>
      <Header title="Frequently asked questions">
        <StyledSearchInput onSearch={searchStr => console.log(searchStr)} />
      </Header>
      <Content>
        <SideNav />
        <Questions />
      </Content>
    </>
  )
}

export default FAQPage
