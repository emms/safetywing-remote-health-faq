import React from 'react'
import styled from 'styled-components/macro'
import { media } from 'styles'
import TitleHeader from 'components/TitleHeader'
import SearchInputHeader from 'components/SearchInputHeader'
import SideNav from 'components/SideNav'
import TabNav from 'components/TabNav'
import DropdownNav from 'components/DropdownNav'
import Questions from 'components/Questions'

const StyledFAQPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 90px 80px 1fr;
  grid-template-areas:
    'titleheader'
    'searchinputheader'
    'dropdownnav'
    'content';

  ${media.tabletPortraitUp`
    grid-template-areas:
      'titleheader titleheader'
      'searchinputheader searchinputheader'
      'tabnav'
      'content';
    `}

  ${media.tabletLandscapeUp`
    grid-template-columns: minmax(400px, 1fr) 2fr;
    grid-template-rows: 100px 100px 1fr;
    grid-template-areas:
      'titleheader titleheader'
      'searchinputheader searchinputheader'
      'sidenav content';
    `}
`

const StyledTitleHeader = styled(TitleHeader)`
  grid-area: titleheader;
`
const StyledSearchInputHeader = styled(SearchInputHeader)`
  grid-area: searchinputheader;
`

const StyledSideNav = styled(SideNav)`
  grid-area: sidenav;
`

const StyledDropdownNav = styled(DropdownNav)`
  grid-area: dropdownnav;
`
const StyledTabNav = styled(TabNav)`
  grid-area: tabnav;
`

const StyledQuestions = styled(Questions)`
  grid-area: content;
`

const FAQPage = () => {
  return (
    <StyledFAQPage>
      <StyledTitleHeader title="Frequently asked questions" />
      <StyledSearchInputHeader onSearch={searchStr => console.log(searchStr)} />
      <StyledSideNav />
      <StyledTabNav />
      <StyledDropdownNav />
      <StyledQuestions />
    </StyledFAQPage>
  )
}

export default FAQPage
