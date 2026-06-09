import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Section } from '../layout/Section'

type ProductChapter = {
  id: string
  eyebrow: string
  headline: string
  body: string
  detail: string
  layout: 'cinematic' | 'split' | 'split-reverse' | 'immersive'
  surface: 'ivory' | 'linen' | 'stone' | 'dark'
  visual: 'hero' | 'wide' | 'portrait' | 'square'
  asset: string
  visualLabel: string
}

const productChapters: ProductChapter[] = [
  {
    id: 'camera',
    eyebrow: 'Camera',
    headline: 'A camera that captures more than a picture.',
    body: 'Genuine expression. Real connection. Every frame feels like it belongs.',
    detail: 'Studio-grade optics. Effortless for every guest.',
    layout: 'cinematic',
    surface: 'ivory',
    visual: 'hero',
    asset: 'product-camera',
    visualLabel: 'Camera detail',
  },
  {
    id: 'lighting',
    eyebrow: 'Lighting',
    headline: 'Beautiful light. Day or night.',
    body: 'Soft, even illumination that flatters in any setting.',
    detail: 'Refined open-air design. Confidence in every environment.',
    layout: 'split-reverse',
    surface: 'linen',
    visual: 'wide',
    asset: 'product-lighting',
    visualLabel: 'Lighting environment',
  },
  {
    id: 'prints',
    eyebrow: 'Prints',
    headline: 'Printed memories, ready in seconds.',
    body: 'Tangible keepsakes your guests can hold before the night ends.',
    detail: 'High-quality prints. Delivered on site.',
    layout: 'immersive',
    surface: 'stone',
    visual: 'portrait',
    asset: 'product-prints',
    visualLabel: 'Instant prints',
  },
  {
    id: 'gallery',
    eyebrow: 'Gallery',
    headline: 'Every photo. Preserved.',
    body: 'A private event gallery — curated, accessible, yours to keep.',
    detail: 'Modern. Seamless. Always growing.',
    layout: 'split',
    surface: 'ivory',
    visual: 'wide',
    asset: 'product-gallery',
    visualLabel: 'Digital gallery',
  },
  {
    id: 'sharing',
    eyebrow: 'Sharing',
    headline: 'Memories, shared instantly.',
    body: 'QR access. No apps. No friction.',
    detail: 'Download, share, relive — together.',
    layout: 'cinematic',
    surface: 'dark',
    visual: 'hero',
    asset: 'product-sharing',
    visualLabel: 'Effortless sharing',
  },
]

function ProductChapterBlock({ chapter }: { chapter: ProductChapter }) {
  const chapterClass = [
    'product-chapter',
    `product-chapter--${chapter.id}`,
    `product-chapter--${chapter.layout}`,
    `product-chapter--${chapter.surface}`,
  ].join(' ')

  const visualClass = [
    'media-placeholder',
    `product-chapter__visual-media`,
    `product-chapter__visual-media--${chapter.visual}`,
  ].join(' ')

  return (
    <article
      className={chapterClass}
      data-product-chapter={chapter.id}
      aria-labelledby={`product-chapter-${chapter.id}-heading`}
    >
      <div className="product-chapter__inner" data-product-chapter-inner>
        <div
          className="product-chapter__copy motion-reveal motion-reveal--copy"
          data-product-copy
          data-scroll-reveal
        >
          <div className="product-chapter__copy-inner">
            <p className="product-chapter__eyebrow">{chapter.eyebrow}</p>
            <h3 id={`product-chapter-${chapter.id}-heading`} className="product-chapter__headline">
              {chapter.headline}
            </h3>
            <p className="product-chapter__body">{chapter.body}</p>
            <p className="product-chapter__detail">{chapter.detail}</p>
          </div>
        </div>

        <div
          className="product-chapter__visual motion-reveal motion-reveal--visual"
          data-product-visual
          data-scroll-reveal
        >
          <div className="product-chapter__visual-frame">
            <div className="product-chapter__visual-stage">
              <div
                className={visualClass}
                data-asset={chapter.asset}
                role="img"
                aria-label={chapter.visualLabel}
              />
              <span className="product-chapter__visual-caption">{chapter.visualLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function ProductRevealSection() {
  const revealRef = useScrollReveal<HTMLElement>()

  return (
    <Section
      ref={revealRef}
      id="product"
      className="product-reveal-section section--spacious"
      ariaLabelledBy="product-heading"
    >
      <header className="product-reveal__intro">
        <p className="section-eyebrow motion-reveal motion-reveal--intro" data-scroll-reveal>
          The product
        </p>
        <h2
          id="product-heading"
          className="product-reveal__intro-heading motion-reveal motion-reveal--intro-delayed"
          data-scroll-reveal
        >
          Crafted to be remembered.
        </h2>
      </header>

      <div className="product-reveal__chapters">
        {productChapters.map((chapter) => (
          <ProductChapterBlock key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </Section>
  )
}
