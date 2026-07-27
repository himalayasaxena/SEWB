import type { IndAllInOneBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function IndAllInOneSection({ block }: { block: IndAllInOneBlock }) {
  const side = block.sideImage ? mediaUrl(block.sideImage) : ''
  const cards = block.cards ?? []

  return (
    <section className="all-in-one-section section">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center mb-md-5 mb-2  z-1 position-relative">
          <div className="col-lg-12">
            {block.badge ? <span className="section-badge text-uppercase">{block.badge}</span> : null}
            <h2 className="section-title two text-uppercase">{block.title.replace(/\s+/g, ' ').trim()}</h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 col-xl-8 z-1 position-relative">
            <div className="row g-4">
              {cards.map((card, i) => {
                const decor = card?.decorImage ? mediaUrl(card.decorImage) : ''
                const icon = card?.icon ? mediaUrl(card.icon) : ''
                const arrow = card?.learnMoreArrowImage ? mediaUrl(card.learnMoreArrowImage) : ''
                const items = card?.listItems ?? []
                return (
                  <div key={card?.id ?? i} className="col-sm-6 col-md-4">
                    <div className="all-card">
                      {decor ? (
                        <img src={decor} loading="lazy" alt="" className="card-decor" />
                      ) : null}
                      <div className="benefit-icon-box">
                        {icon ? (
                          <img src={icon} width={36} height={36} loading="lazy" alt="" />
                        ) : null}
                      </div>
                      <h3 className="card-title text-uppercase">{card?.title}</h3>
                      <p className="card-desc">{card?.description}</p>
                      <ul className="card-list">
                        {items.map((li, j) =>
                          li?.text ? (
                            <li key={li.id ?? j} className="card-desc">
                              {li.text}
                            </li>
                          ) : null,
                        )}
                      </ul>
                      <a href={card?.learnMoreHref ?? '#'} className="learn-more">
                        Learn More{' '}
                        {arrow ? <img src={arrow} loading="lazy" alt="" /> : null}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-xl-4">
            <div className="all-in-one-img-wrapper mt-4 mt-lg-0">
              {side ? <img src={side} loading="lazy" alt="" className="img-fluid" /> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
