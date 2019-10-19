import React from 'react'
import styled from 'styled-components/macro'
import MockNavigation from 'components/MockNavigation'
import Header from 'components/Header'
import SearchInput from 'components/SearchInput'

const StyledSearchInput = styled(SearchInput)`
  padding-top: 3em;
`

const FAQPage = () => {
  return (
    <>
      <MockNavigation />
      <Header title="Frequently asked questions">
        <StyledSearchInput onSearch={searchStr => console.log(searchStr)} />
      </Header>
    </>
  )
}

export default FAQPage
