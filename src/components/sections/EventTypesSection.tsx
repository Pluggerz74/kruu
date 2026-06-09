import { eventTypes } from '../../data/content'
import { Section } from '../layout/Section'

export function EventTypesSection() {
  return (
    <Section id="events" variant="stone" ariaLabelledBy="events-heading">
      <header className="section-header">
        <p className="section-eyebrow">Event types</p>
        <h2 id="events-heading" className="section-heading">
          Made for every celebration.
        </h2>
      </header>

      <ul className="event-grid">
        {eventTypes.map((event) => (
          <li key={event.id} className="event-grid__item">
            <div className="media-placeholder media-placeholder--card" data-asset={`event-${event.id}`}>
              <span>{event.title}</span>
            </div>
            <h3 className="event-grid__title">{event.title}</h3>
            <p className="event-grid__description">{event.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
