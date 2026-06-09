import { trustContent, trustQuotes, trustSignals } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { TrustReviews } from '../trust/TrustReviews'
import { TrustStatGrid } from '../trust/TrustStatGrid'
import { Section } from '../layout/Section'

export function TrustSection() {
  const revealRef = useScrollReveal<HTMLElement>()

  return (
    <Section
      ref={revealRef}
      id="trust"
      variant="stone"
      className="trust-section section--spacious"
      ariaLabelledBy="trust-heading"
    >
      <header className="trust-section__header section-header section-header--left">
        <p className="section-eyebrow motion-reveal motion-reveal--intro" data-scroll-reveal>
          {trustContent.eyebrow}
        </p>
        <h2
          id="trust-heading"
          className="section-heading motion-reveal motion-reveal--intro-delayed"
          data-scroll-reveal
        >
          {trustContent.headline}
        </h2>
        <p className="trust-section__lede motion-reveal motion-reveal--copy" data-scroll-reveal>
          {trustContent.lede}
        </p>
      </header>

      <div className="motion-reveal motion-reveal--copy" data-scroll-reveal>
        <TrustStatGrid signals={trustSignals} />
      </div>

      <hr className="trust-section__divider divider divider--subtle" aria-hidden="true" />

      <div className="motion-reveal motion-reveal--copy" data-scroll-reveal>
        <TrustReviews quotes={trustQuotes} label="From our hosts" />
      </div>
    </Section>
  )
}
