import { trustQuotes, trustSignals } from '../../data/content'
import { Section } from '../layout/Section'

export function TrustSection() {
  return (
    <Section id="trust" variant="stone" ariaLabelledBy="trust-heading">
      <header className="section-header">
        <p className="section-eyebrow">Trust</p>
        <h2 id="trust-heading" className="section-heading">
          Celebrations across the nation.
        </h2>
      </header>

      <ul className="trust-stats">
        {trustSignals.map((signal) => (
          <li key={signal.id} className="trust-stats__item">
            <span className="trust-stats__value">{signal.value}</span>
            <span className="trust-stats__label">{signal.label}</span>
          </li>
        ))}
      </ul>

      <ul className="trust-quotes">
        {trustQuotes.map((quote) => (
          <li key={quote.id} className="trust-quotes__item">
            <blockquote>
              <p className="trust-quotes__text">&ldquo;{quote.text}&rdquo;</p>
              <footer className="trust-quotes__attribution">— {quote.attribution}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </Section>
  )
}
