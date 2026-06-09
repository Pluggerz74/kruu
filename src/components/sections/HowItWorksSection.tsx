import { howItWorksSteps } from '../../data/content'
import { Section } from '../layout/Section'

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" variant="stone" ariaLabelledBy="how-it-works-heading">
      <header className="section-header">
        <p className="section-eyebrow">How it works</p>
        <h2 id="how-it-works-heading" className="section-heading">
          Simple from start to finish.
        </h2>
      </header>

      <ol className="steps-grid">
        {howItWorksSteps.map((step) => (
          <li key={step.id} className="steps-grid__item">
            <span className="steps-grid__step">{step.step}</span>
            <h3 className="steps-grid__title">{step.title}</h3>
            <p className="steps-grid__description">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
