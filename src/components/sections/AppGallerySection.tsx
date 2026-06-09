import { appFeatures } from '../../data/content'
import { Section } from '../layout/Section'

export function AppGallerySection() {
  return (
    <Section id="app" ariaLabelledBy="app-heading">
      <div className="app-section__layout">
        <div className="app-section__copy">
          <header className="section-header section-header--left">
            <p className="section-eyebrow">KRUU app</p>
            <h2 id="app-heading" className="section-heading">
              Your gallery, always within reach.
            </h2>
            <p className="section-body">
              Every capture from your event flows into a private digital gallery. Browse, download,
              and share — long after the lights go down.
            </p>
          </header>

          <ul className="app-section__features">
            {appFeatures.map((feature) => (
              <li key={feature.id} className="app-section__feature">
                <h3 className="app-section__feature-title">{feature.title}</h3>
                <p className="app-section__feature-description">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="app-section__media">
          <div className="media-placeholder media-placeholder--app" data-asset="app-gallery">
            <span>App & gallery preview</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
