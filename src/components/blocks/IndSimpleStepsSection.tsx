import type { IndSimpleStepsBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function IndSimpleStepsSection({ block }: { block: IndSimpleStepsBlock }) {
  const steps = block.steps ?? []

  return (
    <section className="simple-process-section section">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            {block.badge ? <span className="section-badge text-uppercase">{block.badge}</span> : null}
            <h2 className="section-title two text-uppercase">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="process-step-wrapper justify-content-center" style={{ gap: '50px' }}>
          <div className="process-divider"></div>
          {steps.map((step, i) => {
            const num = step?.stepNumberImage ? mediaUrl(step.stepNumberImage) : ''
            const icon = step?.icon ? mediaUrl(step.icon) : ''
            const iw = step?.iconWidth ?? 110
            const ih = step?.iconHeight ?? 110
            const cls = step?.stepNumberImageClass?.trim()
            return (
              <div key={step?.id ?? i} className="process-step-item">
                <div className="process-circle">
                  <div className="step-number">
                    {num ? <img src={num} loading="lazy" alt="" className={cls || undefined} /> : null}
                  </div>
                  <div className="icon">
                    {icon ? (
                      <img src={icon} width={iw} height={ih} loading="lazy" alt="" />
                    ) : null}
                  </div>
                </div>
                <h3 className="process-title text-uppercase">{step?.title}</h3>
                <p className="process-desc">
                  {step?.descriptionLine1}
                  {step?.descriptionLine2 ? (
                    <>
                      <br /> {step.descriptionLine2}
                    </>
                  ) : null}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
