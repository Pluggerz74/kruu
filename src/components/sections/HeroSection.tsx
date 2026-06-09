import boothSilhouette from '../../assets/images/hero/booth-silhouette.svg'
import { heroContent, siteMeta, trustSignals } from '../../data/content'
import { useHeroParallax } from '../../hooks/useHeroParallax'
import { Button } from '../ui/Button'
import { Section } from '../layout/Section'

const heroTrustSignals = trustSignals.slice(0, 3)

export function HeroSection() {
  const stageRef = useHeroParallax<HTMLDivElement>()

  return (
    <Section id="hero" className="hero-section" ariaLabelledBy="hero-heading">
      <div className="hero-section__inner">
        <div className="hero-section__stage-wrapper">
          <div
            ref={stageRef}
            className="hero-section__stage"
            data-hero-3d-placeholder
            data-hero-stage
          >
            <div className="hero-section__layer hero-section__layer--ambient" aria-hidden="true" />
            <div className="hero-section__layer hero-section__layer--spotlight" aria-hidden="true" />
            <div className="hero-section__layer hero-section__layer--vignette" aria-hidden="true" />
            <div className="hero-section__layer hero-section__layer--floor" aria-hidden="true" />

            <div className="hero-section__product">
              <div
                className="hero-section__product-layer hero-section__product-layer--shadow"
                aria-hidden="true"
              />
              <div
                className="hero-section__product-layer hero-section__product-layer--base"
                data-hero-product-base
              >
                <img
                  src={boothSilhouette}
                  alt=""
                  width={320}
                  height={420}
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div
                className="hero-section__product-layer hero-section__product-layer--highlight"
                data-hero-product-highlight
                aria-hidden="true"
              />
              <div
                className="hero-section__product-layer hero-section__product-layer--reflection"
                data-hero-product-reflection
                aria-hidden="true"
              >
                <img src={boothSilhouette} alt="" width={320} height={420} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-section__content">
          <p className="hero-section__eyebrow">{heroContent.eyebrow}</p>
          <h1 id="hero-heading" className="hero-section__headline">
            {heroContent.headline}
          </h1>
          <p className="hero-section__subheadline">{heroContent.subheadline}</p>

          <div className="hero-section__actions">
            <Button
              asLink
              href={siteMeta.bookingUrl}
              variant="primary"
              className="hero-section__cta--primary"
            >
              {heroContent.ctaPrimary}
            </Button>
            <a href="#product" className="hero-section__cta--secondary">
              {heroContent.ctaSecondary}
            </a>
          </div>

          <ul className="hero-section__trust" aria-label="Trust indicators">
            {heroTrustSignals.map((signal) => (
              <li key={signal.id} className="hero-section__trust-item">
                <span className="hero-section__trust-value">{signal.value}</span>
                <span>{signal.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
