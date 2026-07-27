import type { IndToolsBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function IndToolsSection({ block }: { block: IndToolsBlock }) {
  const cards = block.cards ?? []

  return (
    <section className="health-tools-section section">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center mb-3 mb-lg-4">
          <div className="col-lg-12">
            {block.badge ? <span className="section-badge text-uppercase">{block.badge}</span> : null}
            <h2 className="section-title two text-uppercase">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle mb-0">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="row g-4 pt-4 justify-content-center">
          {cards.map((card, i) => {
            const icon = card?.icon ? mediaUrl(card.icon) : ''
            return (
              <div key={card?.id ?? i} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="tool-card text-start">
                  <div className="tool-icon-box">
                    {icon ? <img src={icon} width={36} height={36} loading="lazy" alt="" /> : null}
                  </div>
                  <h3 className="tool-title">{card?.title}</h3>
                  <p className="tool-desc">{card?.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
