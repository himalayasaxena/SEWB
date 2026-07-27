import type { HealthProPatientControlBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function HealthProPatientControlSection({ block }: { block: HealthProPatientControlBlock }) {
  const colImg = block.columnImage ? mediaUrl(block.columnImage) : ''
  const features = block.features ?? []

  return (
    <section className="patient-control-section section">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            {block.badge ? <span className="section-badge">{block.badge}</span> : null}
            <h2 className="section-title">
              {block.titleBeforeHighlight}
              {block.titleHighlight ? (
                <>
                  {' '}
                  <span className="highlight-pink">{block.titleHighlight}</span>
                </>
              ) : null}
            </h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="row align-items-center position-relative z-1 g-4">
          <div className="col-lg-5">
            {colImg ? (
              <img
                src={colImg}
                loading="lazy"
                alt="Health professional digital management"
                className="img-fluid w-100"
              />
            ) : null}
          </div>
          <div className="col-lg-7">
            <div>
              <div className="feature-grid">
                {features.map((f, i) => {
                  const icon = f?.icon ? mediaUrl(f.icon) : ''
                  return (
                    <div key={f?.id ?? i} className="benefit-item g-30">
                      <div className="benefit-icon-box">
                        {icon ? <img src={icon} width={36} height={36} loading="lazy" alt="" /> : null}
                      </div>
                      <div className="benefit-content">
                        <h3 className="card-title text-primary">{f?.title}</h3>
                        <p className="card-desc">{f?.description}</p>
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
