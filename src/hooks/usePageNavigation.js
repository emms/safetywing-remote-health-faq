import { useState, useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'

const usePageNavigation = (categories, scrollOffset) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0)
  const [overrideIndex, setOverrideIndex] = useState(0)
  const [useOverrideIndex, setUseOverrideIndex] = useState(false)
  const isMounted = useRef()

  const createClickHandler = elementId => e => {
    e.preventDefault()
    const el = document.querySelector(`#${elementId}`)
    if (!el) {
      return
    }
    const indexOfClickedItem = categories.findIndex(x => x.id === elementId)
    setOverrideIndex(indexOfClickedItem)
    setUseOverrideIndex(true)
    window.scrollTo({ top: el.offsetTop - scrollOffset, behavior: 'smooth' })
  }

  useEffect(
    () => {
      isMounted.current = true
      let itemsBottoms = []

      const handleScroll = throttle(() => {
        // finds the first item the bottom of which is lower than the scrollOffset
        let activeCategoryIndex = itemsBottoms.findIndex(
          bottom => bottom - window.pageYOffset > scrollOffset
        )
        if (activeCategoryIndex === -1) {
          activeCategoryIndex = categories.length - 1
        }
        if (isMounted.current) {
          setActiveLinkIndex(activeCategoryIndex)
        }
      }, 100)

      const calculateItemsBottoms = () => {
        itemsBottoms = categories.map(
          link =>
            window.pageYOffset +
            document.querySelector(`#${link.id}`).getBoundingClientRect().bottom
        )
        handleScroll()
      }

      calculateItemsBottoms()
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', calculateItemsBottoms)
      window.addEventListener('faq-item-toggle', calculateItemsBottoms)
      return () => {
        isMounted.current = false
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', calculateItemsBottoms)
        window.addEventListener('faq-item-toggle', calculateItemsBottoms)
      }
    },
    [categories, scrollOffset]
  )

  useEffect(
    () => {
      if (activeLinkIndex === overrideIndex) {
        setUseOverrideIndex(false)
      }
    },
    [overrideIndex, activeLinkIndex]
  )

  return {
    activeLinkIndex: useOverrideIndex ? overrideIndex : activeLinkIndex,
    createClickHandler
  }
}

export default usePageNavigation
