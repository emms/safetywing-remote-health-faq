import React from 'react'
import styled from 'styled-components/macro'
import StickToScroll from 'components/StickToScroll'
import Contact from 'components/Contact'
import { MOCK_FOOTER_HEIGHT, SIDE_NAV_WIDTH } from 'consts'

const StyledStickToScroll = styled(StickToScroll)`
  width: ${SIDE_NAV_WIDTH}px;
`

const StickyContact = ({ className }) => {
  return (
    <StyledStickToScroll
      bound={MOCK_FOOTER_HEIGHT}
      fromBottom
      className={className}
    >
      <Contact />
    </StyledStickToScroll>
  )
}

export default StickyContact
