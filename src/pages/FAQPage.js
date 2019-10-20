import React from 'react'
import styled from 'styled-components/macro'
import TitleHeader from 'components/TitleHeader'
import SearchInputHeader from 'components/SearchInputHeader'
import SideNav from 'components/SideNav'
import TabNav from 'components/TabNav'
import DropdownNav from 'components/DropdownNav'
import Questions from 'components/Questions'
import { media } from 'styles'

const StyledFAQPage = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 180px 90px 80px auto;
  grid-template-areas:
    'titleheader'
    'searchinputheader'
    'dropdownnav'
    'content';

  ${media.tabletPortraitUp`
    grid-template-rows: 120px 90px 80px auto;
    grid-template-areas:
      'titleheader'
      'searchinputheader'
      'tabnav'
      'content';
    `}

  ${media.tabletLandscapeUp`
    grid-template-columns: 400px 1fr;
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
  display: block;

  ${media.tabletPortraitUp`
    display: none;
  `}
`
const StyledTabNav = styled(TabNav)`
  grid-area: tabnav;
  display: none;

  ${media.tabletPortraitUp`
    display: flex;
  `}

  ${media.tabletLandscapeUp`
    display: none;
  `}
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
