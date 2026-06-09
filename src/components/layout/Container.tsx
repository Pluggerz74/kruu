import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  narrow?: boolean
  className?: string
}

export function Container({ children, narrow = false, className = '' }: ContainerProps) {
  const widthClass = narrow ? 'container container--narrow' : 'container'
  return <div className={`${widthClass} ${className}`.trim()}>{children}</div>
}
