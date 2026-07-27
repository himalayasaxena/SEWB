import type { OrgLabSolutionsBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function OrgLabSolutionsSection({ block }: { block: OrgLabSolutionsBlock }) {
  const cards = block.cards ?? []

  return (
    <section className="lab-solutions">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-xl-6">
            {block.badge ? (
              <div className="lab-badge-wrapper d-flex justify-content-center">
                <span className="section-badge text-uppercase">{block.badge}</span>
              </div>
            ) : null}
            <h2 className="section-title two text-uppercase">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle mb-0">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="row mt-md-4 mt-2 justify-content-around lab-process-row gx-xl-2 gy-4">
          {cards.map((card, i) => {
            const icon = card?.icon ? mediaUrl(card.icon) : ''
            return (
              <div key={card?.id ?? i} className="col-lg-4 col-xl-3 col-md-6">
                <div className="lab-process-card">
                  <div className="lab-step-icon">
                    {icon ? (
                      <img src={icon} width={36} height={36} loading="lazy" alt="" className="img-fluid" />
                    ) : null}
                  </div>
                  <h3>{card?.title}</h3>
                  <p>{card?.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
