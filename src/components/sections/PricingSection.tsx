import {
  pricingContent,
  pricingPackages,
  pricingSharedInclusions,
  siteMeta,
} from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { PackageOverview } from '../pricing/PackageOverview'
import { Button } from '../ui/Button'
import { Section } from '../layout/Section'

export function PricingSection() {
  const revealRef = useScrollReveal<HTMLElement>()

  return (
    <Section
      ref={revealRef}
      id="booking"
      className="pricing-section section--spacious"
      ariaLabelledBy="pricing-heading"
    >
      <div className="pricing-section__content">
        <header className="section-header section-header--centered">
          <p className="section-eyebrow motion-reveal motion-reveal--intro" data-scroll-reveal>
            Packages
          </p>
          <h2
            id="pricing-heading"
            className="section-heading motion-reveal motion-reveal--intro-delayed"
            data-scroll-reveal
          >
            {pricingContent.headline}
          </h2>
          <p
            className="section-body section-body--centered motion-reveal motion-reveal--copy"
            data-scroll-reveal
          >
            {pricingContent.body}
          </p>
        </header>

        <PackageOverview
          packages={pricingPackages}
          sharedInclusions={pricingSharedInclusions}
          inclusionsLabel="Included with every package"
        />

        <div
          className="pricing-section__cta motion-reveal motion-reveal--copy"
          data-scroll-reveal
        >
          <Button asLink href={siteMeta.bookingUrl} variant="primary">
            {pricingContent.cta}
          </Button>
          <p className="pricing-section__note">{pricingContent.note}</p>
        </div>
      </div>
    </Section>
  )
}
