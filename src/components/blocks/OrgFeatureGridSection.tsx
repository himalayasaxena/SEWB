import type { OrgFeatureGridBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function OrgFeatureGridSection({ block }: { block: OrgFeatureGridBlock }) {
  const cards = block.cards ?? []

  return (
    <section className="feature-section">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            {block.badge ? (
              <div className="lab-badge-wrapper d-flex justify-content-center">
                <div className="section-badge text-uppercase">{block.badge}</div>
              </div>
            ) : null}
            <h2 className="section-title two text-uppercase">
              {block.titlePrefix}{' '}
              {block.titleSpan ? <span>{block.titleSpan}</span> : null}
            </h2>
            {block.subtitle ? <p className="section-subtitle mb-0">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="row feature-grid-wrapper pt-4">
          <div className="feature-line"></div>
          {cards.map((card, i) => {
            const stepIcon = card?.stepIcon ? mediaUrl(card.stepIcon) : ''
            const tickImg = card?.tickImage ? mediaUrl(card.tickImage) : ''
            const timeIc = card?.timeIcon ? mediaUrl(card.timeIcon) : ''
            const dec = card?.stepDecoration ?? 'none'
            const status = card?.statusVariant ?? 'pending'
            const details = card?.detailLines ?? []

            return (
              <div key={card?.id ?? i} className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                <div className="feature-step-card">
                  <div className="step-icon-wrapper">
                    <div className="step-icon gradient-2">
                      {stepIcon ? (
                        <img src={stepIcon} width={46} height={46} loading="lazy" alt="" />
                      ) : null}
                      {dec === 'tick' && tickImg ? (
                        <div className="check-badge">
                          <img src={tickImg} loading="lazy" alt="" className="img-fluid" />
                        </div>
                      ) : null}
                      {dec === 'dot' ? <span className="dot-badge"></span> : null}
                    </div>
                  </div>
                  <h3>{card?.title}</h3>
                  <p>{card?.description}</p>
                  <div className="step-time">
                    {timeIc ? (
                      <img src={timeIc} width={24} height={24} loading="lazy" alt="" className="img-fluid" />
                    ) : null}{' '}
                    {card?.timeText}
                  </div>
                  <div className={`status-badge-custom ${status}`}>{card?.statusLabel}</div>
                  <hr className="step-divider" />
                  <ul className="step-details">
                    {details.map((d, j) =>
                      d?.text ? <li key={d.id ?? j}>{d.text}</li> : null,
                    )}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
