import { productFeatures } from '../../data/content'
import { Section } from '../layout/Section'

export function ProductRevealSection() {
  return (
    <Section id="product" ariaLabelledBy="product-heading">
      <header className="section-header">
        <p className="section-eyebrow">The product</p>
        <h2 id="product-heading" className="section-heading">
          Designed for the spotlight.
        </h2>
        <p className="section-body section-body--centered">
          Every detail of the KRUU booth is intentional — from the camera to the final print.
        </p>
      </header>

      <div className="product-reveal__showcase">
        <div className="media-placeholder media-placeholder--tall" data-asset="product-hero">
          <span>Product showcase</span>
        </div>
      </div>

      <ul className="product-reveal__features">
        {productFeatures.map((feature) => (
          <li key={feature.id} className="product-reveal__feature">
            <h3 className="product-reveal__feature-title">{feature.title}</h3>
            <p className="product-reveal__feature-description">{feature.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
