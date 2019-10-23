import React, { useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div``

const Sticky = styled.div`
  z-index: 2;
`

const StickToScroll = ({ children, bound, fromBottom, className }) => {
  const ref = useRef()
  const stickyRef = useRef()

  const handleScroll = useCallback(
    () => {
      if (fromBottom) {
        // component sticks to bottom
        if (
          document.body.scrollHeight - window.innerHeight - bound >
          window.pageYOffset
        ) {
          stickyRef.current.style.position = 'fixed'
          stickyRef.current.style.bottom = 0
        } else {
          stickyRef.current.style.position = ''
          stickyRef.current.style.bottom = ''
        }
      } else {
        // component sticks to top
        const { top } = ref.current.getBoundingClientRect()
        if (top < bound) {
          stickyRef.current.style.position = 'fixed'
          stickyRef.current.style.top = `${bound}px`
        } else {
          stickyRef.current.style.position = ''
        }
      }
    },
    [ref, stickyRef, bound, fromBottom]
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
