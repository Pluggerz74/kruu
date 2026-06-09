import { faqItems } from '../../data/faq'
import { Accordion } from '../ui/Accordion'
import { Section } from '../layout/Section'

export function FAQSection() {
  return (
    <Section id="faq" variant="stone" narrow ariaLabelledBy="faq-heading">
      <header className="section-header">
        <p className="section-eyebrow">FAQ</p>
        <h2 id="faq-heading" className="section-heading">
          Questions, answered.
        </h2>
      </header>

      <Accordion items={faqItems} />
    </Section>
  )
}
