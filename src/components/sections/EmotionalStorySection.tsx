import { emotionalStoryContent } from '../../data/content'
import { Section } from '../layout/Section'

export function EmotionalStorySection() {
  return (
    <Section id="story" variant="stone" ariaLabelledBy="story-heading">
      <div className="story-section__layout">
        <div className="story-section__media">
          <div className="media-placeholder media-placeholder--wide" data-asset="story-emotion">
            <span>Emotional photography</span>
          </div>
        </div>
        <div className="story-section__copy">
          <h2 id="story-heading" className="section-heading">
            {emotionalStoryContent.headline}
          </h2>
          <p className="section-body">{emotionalStoryContent.body}</p>
        </div>
      </div>
    </Section>
  )
}
