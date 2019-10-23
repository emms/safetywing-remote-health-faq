import React, { useRef, useEffect, useCallback } from 'react'
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
        stickyRef.current.style.position = ''
      }
    },
    [ref, stickyRef, topBound]
  )

  useEffect(
    () => {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)
      handleScroll()
      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
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
