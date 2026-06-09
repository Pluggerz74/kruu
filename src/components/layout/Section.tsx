import { forwardRef, type ReactNode } from 'react'
import { Container } from './Container'

type SectionProps = {
  id: string
  children: ReactNode
  variant?: 'light' | 'stone' | 'dark'
  narrow?: boolean
  className?: string
  ariaLabelledBy?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { id, children, variant = 'light', narrow = false, className = '', ariaLabelledBy },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id}
      className={`section section--${variant} ${className}`.trim()}
      aria-labelledby={ariaLabelledBy}
    >
      <Container narrow={narrow}>{children}</Container>
    </section>
  )
})
