type PricingPackage = {
  id: string
  name: string
  descriptor: string
  highlights: string[]
}

type PackageOverviewProps = {
  packages: PricingPackage[]
  sharedInclusions: string[]
  inclusionsLabel: string
}

export function PackageOverview({
  packages,
  sharedInclusions,
  inclusionsLabel,
}: PackageOverviewProps) {
  return (
    <>
      <div
        className="pricing-inclusions motion-reveal motion-reveal--copy"
        data-scroll-reveal
        aria-label={inclusionsLabel}
      >
        <p className="pricing-inclusions__label">{inclusionsLabel}</p>
        <ul className="pricing-inclusions__list">
          {sharedInclusions.map((inclusion) => (
            <li key={inclusion} className="pricing-inclusions__item">
              {inclusion}
            </li>
          ))}
        </ul>
      </div>

      <ul className="pricing-packages" aria-label="Available packages">
        {packages.map((pkg) => (
          <li
            key={pkg.id}
            className="pricing-package motion-reveal motion-reveal--copy"
            data-scroll-reveal
          >
            <article aria-labelledby={`package-${pkg.id}-name`}>
              <h3 id={`package-${pkg.id}-name`} className="pricing-package__name">
                {pkg.name}
              </h3>
              <p className="pricing-package__descriptor">{pkg.descriptor}</p>
              <ul className="pricing-package__highlights">
                {pkg.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </>
  )
}
