import type { HomeHighlightsBlock } from '@/payload-types'

import { mediaUrl } from '@/lib/mediaUrl'

export function HomeHighlightsSection({ block }: { block: HomeHighlightsBlock }) {
  const items = block.items ?? []
  return (
    <section className="ai-highlights-section">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-header text-center">
              {block.badge ? <span className="section-badge">{block.badge}</span> : null}
              <h2 className="section-title">{block.title}</h2>
              {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
            </div>
          </div>
        </div>
        <div className="highlights-grid ">
          {items.map((item, idx) => {
            if (!item) return null
            const iconSrc = item.icon ? mediaUrl(item.icon) : ''
            return (
              <div key={item.id ?? idx} className="highlight-item">
                <div className="highlight-card-ai">
                  <div className="highlight-icon">
                    {iconSrc ? (
                      <img src={iconSrc} width={30} height={30} loading="lazy" alt="" />
                    ) : null}
                  </div>
                  <div className="highlight-content">
                    <h3 className="highlight-title">
                      {item.titleTop}
                      {item.titleBottom ? (
                        <>
                          <br />
                          {item.titleBottom}
                        </>
                      ) : null}
                    </h3>
                    {item.description ? (
                      <p className="highlight-description">{item.description}</p>
                    ) : null}
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
