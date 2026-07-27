import type { HealthProSecurityBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function HealthProSecuritySection({ block }: { block: HealthProSecurityBlock }) {
  const cards = block.cards ?? []

  return (
    <section className="security-section two section">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center mb-3 mb-lg-0">
          <div className="col-lg-10">
            {block.badge ? <span className="section-badge">{block.badge}</span> : null}
            <h2 className="section-title">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="row g-lg-4 g-3 justify-content-center">
          {cards.map((card, i) => {
            const icon = card?.icon ? mediaUrl(card.icon) : ''
            return (
              <div key={card?.id ?? i} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="security-card">
                  <div className="benefit-icon-box">
                    {icon ? <img src={icon} width={36} height={36} loading="lazy" alt="" /> : null}
                  </div>
                  <h3 className="card-title">{card?.title}</h3>
                  <p className="card-desc">{card?.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
