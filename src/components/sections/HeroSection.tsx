import { heroContent, siteMeta } from '../../data/content'
import { Button } from '../ui/Button'
import { Section } from '../layout/Section'

export function HeroSection() {
  return (
    <Section id="hero" className="hero-section" ariaLabelledBy="hero-heading">
      <div className="hero-section__grid">
        <div className="hero-section__copy">
          <p className="hero-section__eyebrow">{heroContent.eyebrow}</p>
          <h1 id="hero-heading" className="hero-section__headline">
            {heroContent.headline}
          </h1>
          <p className="hero-section__subheadline">{heroContent.subheadline}</p>
          <div className="hero-section__actions">
            <Button asLink href={siteMeta.bookingUrl} variant="primary">
              {heroContent.ctaPrimary}
            </Button>
            <Button asLink href="#product" variant="secondary">
              {heroContent.ctaSecondary}
            </Button>
          </div>
        </div>

        <div className="hero-section__visual" aria-hidden="true">
          <div className="hero-section__stage" data-hero-3d-placeholder>
            <div className="hero-section__product-placeholder">
              <span className="hero-section__placeholder-label">Product hero</span>
              <span className="hero-section__placeholder-note">3D scene placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
