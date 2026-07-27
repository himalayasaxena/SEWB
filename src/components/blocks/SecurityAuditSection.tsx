import type { SecurityAuditBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function SecurityAuditSection({ block }: { block: SecurityAuditBlock }) {
  const main = block.image ? mediaUrl(block.image) : ''
  const loggingItems = block.loggingItems ?? []
  const stats = block.stats ?? []
  const arrow = block.ctaArrowIcon ? mediaUrl(block.ctaArrowIcon) : ''

  return (
    <section className="audit-tracking">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10 col-xl-10">
            <div className="section-header text-center">
              {block.badge ? (
                <span className="section-badge text-uppercase">{block.badge}</span>
              ) : null}
              <h2 className="section-title two text-uppercase">{block.title}</h2>
              {block.subtitle ? <p className="section-subtitle mb-0">{block.subtitle}</p> : null}
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="audit-image-wrapper">
              {main ? (
                <img
                  src={main}
                  width={676}
                  height={442}
                  loading="lazy"
                  alt=""
                  className="img-fluid audit-main-img"
                />
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="audit-content">
              <div className="logging-box">
                {block.loggingTitle ? <h3>{block.loggingTitle}</h3> : null}
                <ul>
                  {loggingItems.map((li, i) =>
                    li?.text ? <li key={li.id ?? i}>{li.text}</li> : null,
                  )}
                </ul>
              </div>
              <div className="audit-stats-row d-flex justify-content-between">
                {stats.map((s, i) => {
                  const centered = s?.alignVariant === 'centered'
                  return (
                    <div
                      key={s?.id ?? i}
                      className={`stat-card${centered ? ' d-flex flex-column align-items-center justify-content-center' : ''}`}
                    >
                      <h3 className={centered ? 'mt-2' : undefined}>{s?.value}</h3>
                      <p>{s?.label}</p>
                    </div>
                  )
                })}
              </div>
              {block.ctaLabel ? (
                <a href={block.ctaHref ?? '#'} className="primary-btn">
                  {block.ctaLabel}{' '}
                  {arrow ? (
                    <img src={arrow} width={14} height={14} alt="" />
                  ) : null}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
