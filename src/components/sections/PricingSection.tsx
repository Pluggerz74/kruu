import { pricingContent, siteMeta } from '../../data/content'
import { Button } from '../ui/Button'
import { Section } from '../layout/Section'

export function PricingSection() {
  return (
    <Section id="booking" ariaLabelledBy="pricing-heading">
      <div className="pricing-section__content">
        <header className="section-header section-header--centered">
          <p className="section-eyebrow">Packages</p>
          <h2 id="pricing-heading" className="section-heading">
            {pricingContent.headline}
          </h2>
          <p className="section-body section-body--centered">{pricingContent.body}</p>
        </header>

        <div className="pricing-section__cta">
          <Button asLink href={siteMeta.bookingUrl} variant="primary">
            {pricingContent.cta}
          </Button>
          <p className="pricing-section__note">{pricingContent.note}</p>
        </div>
      </div>
    </Section>
  )
}
