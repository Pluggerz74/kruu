type TrustQuote = {
  id: string
  text: string
  attribution: string
  event: string
}

type TrustReviewsProps = {
  quotes: TrustQuote[]
  label: string
}

export function TrustReviews({ quotes, label }: TrustReviewsProps) {
  return (
    <div className="trust-reviews">
      <p className="trust-reviews__label">{label}</p>
      <ul className="trust-reviews__list">
        {quotes.map((quote) => (
          <li key={quote.id} className="trust-reviews__item">
            <blockquote>
              <p className="trust-reviews__text">{quote.text}</p>
              <footer className="trust-reviews__meta">
                <cite className="trust-reviews__attribution">{quote.attribution}</cite>
                <span className="trust-reviews__separator" aria-hidden="true">
                  ·
                </span>
                <span className="trust-reviews__event">{quote.event}</span>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
