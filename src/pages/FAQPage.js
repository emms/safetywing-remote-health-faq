import React, { useState } from 'react'
import styled from 'styled-components/macro'
import TitleHeader from 'components/TitleHeader'
import SearchInputHeader from 'components/SearchInputHeader'
import SideNav from 'components/SideNav'
import TabNav from 'components/TabNav'
import DropdownNav from 'components/DropdownNav'
import Questions from 'components/Questions'
import Contact from 'components/Contact'
import StickyContact from 'components/StickyContact'
import { media } from 'styles'
import {
  MOCK_FOOTER_HEIGHT,
  MOCK_NAVIGATION_HEIGHT,
  SIDE_NAV_WIDTH
} from 'consts'

const StyledFAQPage = styled.div`
  min-height: calc(
    100vh - ${MOCK_FOOTER_HEIGHT}px - ${MOCK_NAVIGATION_HEIGHT}px
  );
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 180px 100px 60px auto auto;
  grid-template-areas:
    'titleheader'
    'searchinputheader'
    'dropdownnav'
    'content'
    'contact';

  ${media.tabletPortraitUp`
    grid-template-rows: 120px 100px 80px auto auto;
    grid-template-areas:
      'titleheader'
      'searchinputheader'
      'tabnav'
      'content'
      'contact';
    `}

  ${media.tabletLandscapeUp`
    grid-template-columns: ${SIDE_NAV_WIDTH}px 1fr;
    grid-template-rows: 100px 100px 1fr auto;
    grid-template-areas:
        'titleheader titleheader'
        'searchinputheader searchinputheader'
        'sidenav content'
        'stickycontact content';
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

const StyledContact = styled(Contact)`
  grid-area: contact;

  ${media.tabletLandscapeUp`
    display: none;
  `}
`

const StyledStickyContact = styled(StickyContact)`
  grid-area: stickycontact;
  display: none;

  ${media.tabletLandscapeUp`
    display: block;
  `}
`

const FAQPage = () => {
  const [searchStr, setSearchStr] = useState('')

  return (
    <StyledFAQPage>
      <StyledTitleHeader title="Frequently asked questions" />
      <StyledSearchInputHeader
        setSearchStr={setSearchStr}
        searchStr={searchStr}
      />
      {searchStr.length <= 0 ? (
        <>
          <StyledSideNav />
          <StyledTabNav />
          <StyledDropdownNav />
        </>
      ) : (
        <StyledSearchingIndicator>
          <h3>{`Search results for "${searchStr}"`}</h3>
        </StyledSearchingIndicator>
      )}
      <StyledQuestions searchStr={searchStr} />
      <StyledContact />
      <StyledStickyContact />
    </StyledFAQPage>
  )
}

export default FAQPage
