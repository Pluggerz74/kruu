import { useState, type ReactNode } from 'react'

export type AccordionItem = {
  id: string
  question: string
  answer: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className = '' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className={`accordion ${className}`.trim()} role="region" aria-label="Frequently asked questions">
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div key={item.id} className="accordion__item">
            <h3>
              <button
                type="button"
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                id={`accordion-trigger-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <span className="accordion__icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              className={`accordion__panel ${isOpen ? 'accordion__panel--open' : ''}`}
              hidden={!isOpen}
            >
              <div className="accordion__content">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
