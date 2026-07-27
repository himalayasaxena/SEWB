import type { HomePrivacyBlock } from '@/payload-types'

import { mediaUrl } from '@/lib/mediaUrl'

export function HomePrivacySection({ block }: { block: HomePrivacyBlock }) {
  const side = block.sideImage ? mediaUrl(block.sideImage) : ''
  const features = block.features ?? []

  return (
    <section className="privacy-security-section">
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
        <div className="privacy-content mt-0">
          <div className="row align-items-center g-4 justify-content-center">
            <div className="col-lg-5 privacy-col_one">
              <div className="privacy-visual">
                {side ? (
                  <img
                    src={side}
                    width={350}
                    height={390}
                    loading="lazy"
                    alt=""
                    className="privacy-main-image"
                  />
                ) : null}
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="privacy-features">
                {features.map((f, i) => {
                  const ic = f.icon ? mediaUrl(f.icon) : ''
                  return (
                    <div key={f.id ?? i} className="privacy-feature-item">
                      <div className="feature-icon">
                        {ic ? <img src={ic} width={30} height={30} loading="lazy" alt="" /> : null}
                      </div>
                      <div className="feature-details">
                        <h3 className="feature-title">{f.title}</h3>
                        {f.description ? (
                          <p className="feature-description">{f.description}</p>
                        ) : null}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
