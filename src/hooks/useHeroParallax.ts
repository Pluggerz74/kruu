import { useEffect, useRef } from 'react'
import { initHeroParallax } from '../lib/motion/heroParallax'

export function useHeroParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const stage = ref.current
    if (!stage) return

    return initHeroParallax(stage)
  }, [])

  return ref
}
