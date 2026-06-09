import type { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
  asLink?: boolean
  href?: string
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  asLink = false,
  href,
  ...props
}: ButtonProps) {
  const classes = `button button--${variant} ${className}`.trim()

  if (asLink && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
