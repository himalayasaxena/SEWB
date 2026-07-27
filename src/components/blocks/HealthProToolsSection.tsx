import type { HealthProToolsBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function HealthProToolsSection({ block }: { block: HealthProToolsBlock }) {
  const decor = block.cardDecor ? mediaUrl(block.cardDecor) : ''
  const cards = block.cards ?? []

  return (
    <section className="health-tools-section section doctor">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center mb-3 mb-lg-3">
          <div className="col-lg-10 col-xl-10">
            {block.badge ? <span className="section-badge">{block.badge}</span> : null}
            <h2 className="section-title">{block.title}</h2>
          </div>
          <div className="col-lg-10 col-xl-8">
            {block.subtitle ? <p className="section-subtitle mb-0">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="row g-4 pt-4 justify-content-center">
          {cards.map((card, i) => {
            const icon = card?.icon ? mediaUrl(card.icon) : ''
            return (
              <div key={card?.id ?? i} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="tool-card text-start">
                  {decor ? (
                    <img src={decor} loading="lazy" alt="Card Decor" className="card-decor" />
                  ) : null}
                  <div className="tool-icon-box">
                    {icon ? <img src={icon} width={36} height={36} loading="lazy" alt="" /> : null}
                  </div>
                  <h3 className="card-title">{card?.title}</h3>
                  <p className="tool-desc mb-0">{card?.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
