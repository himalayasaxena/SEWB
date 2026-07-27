import type { SecurityBackupBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

import { ParagraphWithBreaks } from '@/components/blocks/securityParagraph'

export function SecurityBackupSection({ block }: { block: SecurityBackupBlock }) {
  const steps = block.steps ?? []

  return (
    <section className="backup-recovery">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xl-10">
            <div className="section-header text-center">
              {block.badge ? (
                <span className="section-badge text-uppercase">{block.badge}</span>
              ) : null}
              <h2 className="section-title two text-uppercase">{block.title}</h2>
              {block.subtitle ? (
                <p className="section-subtitle text-white ">{block.subtitle}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="backup-elements-wrapper">
          <div className="backup-line-svg">
            <svg
              width="100%"
              height="300"
              viewBox="0 0 1200 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C4E0FD" />
                  <stop offset="100%" stopColor="#5EADFF" />
                </linearGradient>
              </defs>
              <path
                d="M150 82 L450 202 L750 82 L1050 202"
                stroke="url(#lineGradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="row g-4 justify-content-between">
            {steps.map((step, i) => {
              const ic = step?.icon ? mediaUrl(step.icon) : ''
              const down = step?.layoutVariant === 'itemDown'
              return (
                <div key={step?.id ?? i} className="col-lg-3 col-md-6">
                  <div className={`backup-item${down ? ' item-down' : ''}`}>
                    <div className="backup-icon-circle">
                      {ic ? (
                        <img src={ic} width={90} height={90} loading="lazy" alt="" className="img-fluid" />
                      ) : null}
                      <span className="step-badge">{step?.stepBadge ?? '1'}</span>
                    </div>
                    <div className="backup-text text-center text-white">
                      <h3>{step?.title}</h3>
                      {step?.description ? <ParagraphWithBreaks text={step.description} /> : null}
                    </div>
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
