import type { HealthProBenefitsBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function HealthProBenefitsSection({ block }: { block: HealthProBenefitsBlock }) {
  const cards = block.cards ?? []

  return (
    <section className="doctor-benefits-section section">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center mb-2 mb-lg-3">
          <div className="col-lg-10">
            {block.badge ? <span className="section-badge">{block.badge}</span> : null}
            <h2 className="section-title">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="row g-4">
          {cards.map((card, i) => {
            const src = card?.image ? mediaUrl(card.image) : ''
            return (
              <div key={card?.id ?? i} className="col-lg-4 col-sm-6">
                <div className="benefit-card">
                  {src ? (
                    <img
                      src={src}
                      width={500}
                      height={400}
                      loading="lazy"
                      alt={card?.title ?? ''}
                      className="card-img"
                    />
                  ) : null}
                  <div className="benefit-content">
                    <h3 className="card-title">{card?.title}</h3>
                    <p className="card-desc">{card?.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
