import { finalCtaContent, siteMeta } from '../../data/content'
import { Button } from '../ui/Button'
import { Section } from '../layout/Section'

export function FinalCTASection() {
  return (
    <Section id="final-cta" variant="dark" ariaLabelledBy="final-cta-heading">
      <div className="final-cta__content">
        <h2 id="final-cta-heading" className="final-cta__headline">
          {finalCtaContent.headline}
        </h2>
        <p className="final-cta__body">{finalCtaContent.body}</p>
        <Button asLink href={siteMeta.bookingUrl} variant="primary">
          {finalCtaContent.cta}
        </Button>
      </div>
    </Section>
  )
}
