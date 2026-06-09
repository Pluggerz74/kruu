import { experienceFlowSteps } from '../../data/content'
import { Section } from '../layout/Section'

export function ExperienceFlowSection() {
  return (
    <Section id="experience" ariaLabelledBy="experience-heading">
      <header className="section-header">
        <p className="section-eyebrow">The experience</p>
        <h2 id="experience-heading" className="section-heading">
          From arrival to forever.
        </h2>
      </header>

      <ol className="flow-timeline">
        {experienceFlowSteps.map((step, index) => (
          <li key={step.id} className="flow-timeline__item">
            <span className="flow-timeline__index">{String(index + 1).padStart(2, '0')}</span>
            <span className="flow-timeline__label">{step.label}</span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
