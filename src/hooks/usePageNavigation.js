import { useState, useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'

const usePageNavigation = (links, scrollOffset) => {
  const [activeLinkIndex, setActiveIndex] = useState(0)
  const [doNotHandleScroll, setDoNotHandleScroll] = useState(false)
  const isMounted = useRef(false)
  const timeoutRef = useRef()

  const createClickHandler = elementId => e => {
    e.preventDefault()
    const el = document.querySelector(`#${elementId}`)
    if (!el) {
      return
    }
    setDoNotHandleScroll(true)
    setActiveIndex(links.findIndex(x => x.id === elementId))
    window.scrollTo({ top: el.offsetTop - scrollOffset, behavior: 'smooth' })
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (isMounted.current) {
        setDoNotHandleScroll(false)
      }
    }, 1000)
  }

  useEffect(
    () => {
      isMounted.current = true
      let itemsBottoms = []

      const handleScroll = throttle(() => {
        if (!doNotHandleScroll) {
          let activeCategoryIndex = itemsBottoms.findIndex(
            bottom => bottom - window.pageYOffset > window.innerHeight / 2
          )
          if (activeCategoryIndex === -1) {
            activeCategoryIndex = links.length - 1
          }
          setActiveIndex(activeCategoryIndex)
        }
      }, 100)

      const handleResize = () => {
        itemsBottoms = links.map(
          link =>
            window.scrollY +
            document.querySelector(`#${link.id}`).getBoundingClientRect().bottom
        )
        handleScroll()
      }

      handleResize()
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
        isMounted.current = false
      }
    },
    [doNotHandleScroll, links]
  )

  return { activeLinkIndex, createClickHandler }
}

export default usePageNavigation
