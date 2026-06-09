import { prefersReducedMotion } from './prefersReducedMotion'

const VISIBLE_CLASS = 'motion-reveal--visible'

type ScrollRevealOptions = {
  selector?: string
  threshold?: number
  rootMargin?: string
}

export function initScrollReveal(
  root: HTMLElement,
  options: ScrollRevealOptions = {},
): () => void {
  const {
    selector = '[data-scroll-reveal]',
    threshold = 0.12,
    rootMargin = '0px 0px -6% 0px',
  } = options

  const elements = root.querySelectorAll<HTMLElement>(selector)

  if (elements.length === 0) {
    return () => {}
  }

  if (prefersReducedMotion()) {
    elements.forEach((element) => {
      element.classList.add(VISIBLE_CLASS)
    })
    return () => {}
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        entry.target.classList.add(VISIBLE_CLASS)
        observer.unobserve(entry.target)
      })
    },
    { threshold, rootMargin },
  )

  elements.forEach((element) => {
    observer.observe(element)
  })

  return () => {
    observer.disconnect()
  }
}
