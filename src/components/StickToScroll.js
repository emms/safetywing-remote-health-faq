import React, { useRef, useLayoutEffect, useCallback } from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div``

const Sticky = styled.div`
  z-index: 2;
`

const StickToScroll = ({ children, topBound, className }) => {
  const ref = useRef()
  const stickyRef = useRef()

  const handleScroll = useCallback(
    () => {
      const { top } = ref.current.getBoundingClientRect()
      if (top < topBound) {
        stickyRef.current.style.position = 'fixed'
        stickyRef.current.style.top = `${topBound}px`
      } else {
        stickyRef.current.style.position = 'static'
      }
    },
    [ref, stickyRef, topBound]
  )

  useLayoutEffect(
    () => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    [handleScroll]
  )

  return (
    <Wrapper ref={ref} className={className}>
      <Sticky ref={stickyRef} className={className}>
        {children}
      </Sticky>
    </Wrapper>
  )
}

export default StickToScroll
