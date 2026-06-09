import type { ReactNode } from 'react'
import { Container } from './Container'

type SectionProps = {
  id: string
  children: ReactNode
  variant?: 'light' | 'stone' | 'dark'
  narrow?: boolean
  className?: string
  ariaLabelledBy?: string
}

export function Section({
  id,
  children,
  variant = 'light',
  narrow = false,
  className = '',
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section section--${variant} ${className}`.trim()}
      aria-labelledby={ariaLabelledBy}
    >
      <Container narrow={narrow}>{children}</Container>
    </section>
  )
}
