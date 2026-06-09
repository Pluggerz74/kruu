type TrustSignal = {
  id: string
  value: string
  label: string
  detail: string
}

type TrustStatGridProps = {
  signals: TrustSignal[]
}

export function TrustStatGrid({ signals }: TrustStatGridProps) {
  return (
    <ul className="trust-stats" aria-label="Key metrics">
      {signals.map((signal) => (
        <li key={signal.id} className="trust-stats__item">
          <span className="trust-stats__value" aria-hidden="true">
            {signal.value}
          </span>
          <span className="trust-stats__label">{signal.label}</span>
          <span className="trust-stats__detail">{signal.detail}</span>
        </li>
      ))}
    </ul>
  )
}
