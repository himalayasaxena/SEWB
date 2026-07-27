import type { OrgSecureReportsBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function OrgSecureReportsSection({ block }: { block: OrgSecureReportsBlock }) {
  const mockup = block.mockupImage ? mediaUrl(block.mockupImage) : ''
  const features = block.features ?? []

  return (
    <section className="secure-section">
      <div className="container-fluid custom-container">
        <div className="secure-block">
          <div className="row justify-content-center text-center position-relative z-2">
            <div className="col-lg-10">
              {block.badge ? (
                <div className="lab-badge-wrapper d-flex justify-content-center">
                  <span className="section-badge text-uppercase">{block.badge}</span>
                </div>
              ) : null}
              <h2 className="section-title two text-uppercase">{block.title}</h2>
              {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-4 offset-lg-1">
              <div className="secure-features-list">
                {features.map((f, i) => {
                  const icon = f?.icon ? mediaUrl(f.icon) : ''
                  const useAi = f?.iconLayout === 'aiBox'
                  return (
                    <div key={f?.id ?? i} className="secure-feature-item">
                      <div className="secure-feature-icon gradient-1">
                        {useAi ? (
                          <div className="ai-icon-box">
                            {icon ? (
                              <img src={icon} width={36} height={36} loading="lazy" alt="" />
                            ) : null}
                          </div>
                        ) : icon ? (
                          <img src={icon} width={36} height={36} loading="lazy" alt="" />
                        ) : null}
                      </div>
                      <div className="secure-feature-text">
                        <h3>{f?.title}</h3>
                        <p>{f?.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="secure-mockup-wrapper">
                <div className="main-doctor-container">
                  {mockup ? (
                    <img
                      src={mockup}
                      width={1000}
                      height={900}
                      loading="lazy"
                      alt=""
                      className="img-fluid doctor-img"
                      style={{ borderRadius: '40px' }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
