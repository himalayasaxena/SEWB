import type { HealthProOnboardingBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function HealthProOnboardingSection({ block }: { block: HealthProOnboardingBlock }) {
  const steps = block.steps ?? []

  return (
    <section className="doctor-onboarding-section section">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center mb-3 mb-sm-5 mb-lg-5">
          <div className="col-lg-12 col-xl-10">
            {block.badge ? <span className="section-badge">{block.badge}</span> : null}
            <h2 className="section-title">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="position-relative">
          <div className="process-divider d-none d-lg-block"></div>
          <div className="row g-4 position-relative z-1 text-center justify-content-center">
            {steps.map((step, i) => {
              const num = step?.stepNumberImage ? mediaUrl(step.stepNumberImage) : ''
              const icon = step?.icon ? mediaUrl(step.icon) : ''
              return (
                <div key={step?.id ?? i} className="col-lg-3 col-md-6 custom-col">
                  <div className="onboarding-card">
                    <div className="step-number">
                      {num ? (
                        <img
                          src={num}
                          loading="lazy"
                          alt={`${i + 1}`}
                          className={i === 0 ? 'one' : undefined}
                        />
                      ) : null}
                    </div>
                    <div className="benefit-icon-box">
                      {icon ? <img src={icon} width={36} height={36} loading="lazy" alt="" /> : null}
                    </div>
                    <h3 className="card-title">{step?.title}</h3>
                    <p className="card-desc">{step?.description}</p>
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
