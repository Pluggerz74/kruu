import { finalCtaContent, siteMeta } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Button } from '../ui/Button'
import { Section } from '../layout/Section'

export function FinalCTASection() {
  const revealRef = useScrollReveal<HTMLElement>()

  return (
    <Section
      ref={revealRef}
      id="final-cta"
      variant="dark"
      className="final-cta section--spacious"
      ariaLabelledBy="final-cta-heading"
    >
      <div className="final-cta__content">
        <p className="section-eyebrow motion-reveal motion-reveal--intro" data-scroll-reveal>
          {finalCtaContent.eyebrow}
        </p>
        <h2
          id="final-cta-heading"
          className="final-cta__headline motion-reveal motion-reveal--intro-delayed"
          data-scroll-reveal
        >
          {finalCtaContent.headline}
        </h2>
        <p className="final-cta__body motion-reveal motion-reveal--copy" data-scroll-reveal>
          {finalCtaContent.body}
        </p>
        <div className="final-cta__action motion-reveal motion-reveal--copy" data-scroll-reveal>
          <Button asLink href={siteMeta.bookingUrl} variant="primary">
            {finalCtaContent.cta}
          </Button>
          <p className="final-cta__reassurance">{finalCtaContent.reassurance}</p>
        </div>
      </div>
    </Section>
  )
}
