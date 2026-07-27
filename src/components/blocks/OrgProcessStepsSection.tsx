import type { OrgProcessStepsBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function OrgProcessStepsSection({ block }: { block: OrgProcessStepsBlock }) {
  const steps = block.steps ?? []

  return (
    <section className="process-section">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center text-center mb-3">
          <div className="col-lg-8">
            {block.badge ? (
              <div className="lab-badge-wrapper d-flex justify-content-center">
                <div className="section-badge text-uppercase">{block.badge}</div>
              </div>
            ) : null}
            <h2 className="section-title two text-uppercase">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="process-flow-wrapper">
          <div className="process-line"></div>
          <div className="row">
            {steps.map((step, i) => {
              const icon = step?.icon ? mediaUrl(step.icon) : ''
              return (
                <div key={step?.id ?? i} className="col-lg-4 col-md-6 mb-5">
                  <div className="process-step">
                    <div className="process-icon-box">
                      {icon ? (
                        <img src={icon} width={90} height={90} loading="lazy" alt="" className="img-fluid" />
                      ) : null}
                    </div>
                    <h3>{step?.title}</h3>
                    <p>{step?.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
