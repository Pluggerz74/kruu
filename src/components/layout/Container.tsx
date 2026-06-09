import type { ReactNode } from 'react'

type ContainerSize = 'default' | 'narrow' | 'wide' | 'content' | 'prose'

type ContainerProps = {
  children: ReactNode
  narrow?: boolean
  size?: ContainerSize
  className?: string
}

const sizeClasses: Record<ContainerSize, string> = {
  default: 'container',
  narrow: 'container container--narrow',
  wide: 'container container--wide',
  content: 'container container--content',
  prose: 'container container--prose',
}

export function Container({
  children,
  narrow = false,
  size,
  className = '',
}: ContainerProps) {
  const resolvedSize = size ?? (narrow ? 'narrow' : 'default')
  const widthClass = sizeClasses[resolvedSize]

  return <div className={`${widthClass} ${className}`.trim()}>{children}</div>
}
