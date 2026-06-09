import { useEffect, useRef } from 'react'
import { initScrollReveal } from '../lib/motion/scrollReveal'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    return initScrollReveal(root)
  }, [])

  return ref
}
