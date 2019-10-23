import React, { useState } from 'react'
import styled from 'styled-components/macro'
import TitleHeader from 'components/TitleHeader'
import SearchInputHeader from 'components/SearchInputHeader'
import SideNav from 'components/SideNav'
import TabNav from 'components/TabNav'
import DropdownNav from 'components/DropdownNav'
import Questions from 'components/Questions'
import Contact from 'components/Contact'
import { media } from 'styles'
import { MOCK_FOOTER_HEIGHT, MOCK_NAVIGATION_HEIGHT } from 'consts'

const StyledFAQPage = styled.div`
  min-height: calc(
    100vh - ${MOCK_FOOTER_HEIGHT}px - ${MOCK_NAVIGATION_HEIGHT}px
  );
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 180px 100px 60px auto;
  grid-template-areas:
    'titleheader'
    'searchinputheader'
    'dropdownnav'
    'content';

  ${media.tabletPortraitUp`
    grid-template-rows: 120px 100px 80px auto;
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
  display: none;

  ${media.tabletLandscapeUp`
    display: flex;
  `}
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

const StyledSearchingIndicator = styled.div`
  padding: 30px;

  > h3 {
    margin: 0;
  }

  ${media.tabletPortraitUp`
    padding: 50px;
  `}
`

const FAQPage = () => {
  const [searchStr, setSearchStr] = useState('')

  return (
    <StyledFAQPage>
      <StyledTitleHeader title="Frequently asked questions" />
      <StyledSearchInputHeader onSearch={str => setSearchStr(str)} />
      { searchStr.length <= 0 ? (
        <>
        <StyledSideNav />
        <StyledTabNav />
        <StyledDropdownNav />
        </>
      )
      : <StyledSearchingIndicator>
        <h3>{`Search results for ${searchStr}`}</h3>
        </StyledSearchingIndicator>
    }
      <StyledQuestions searchStr={searchStr} />
      {/* <Contact /> */}
    </StyledFAQPage>
  )
}

export default FAQPage
