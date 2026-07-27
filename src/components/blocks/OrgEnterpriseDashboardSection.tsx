import type { OrgEnterpriseDashboardBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function OrgEnterpriseDashboardSection({ block }: { block: OrgEnterpriseDashboardBlock }) {
  const dash = block.dashboardImage ? mediaUrl(block.dashboardImage) : ''
  const quick = block.quickInsightsBadge ? mediaUrl(block.quickInsightsBadge) : ''
  const ai = block.aiInsightsBadge ? mediaUrl(block.aiInsightsBadge) : ''

  return (
    <section className="smart-dashboard-section section pb-0">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            {block.badge ? <span className="section-badge text-uppercase">{block.badge}</span> : null}
            <h2 className="section-title two text-uppercase">{block.title}</h2>
            {block.subtitle ? (
              <p className="section-subtitle text-white">{block.subtitle}</p>
            ) : null}
          </div>
        </div>
        <div className="dashboard-img-wrapper">
          {quick ? (
            <div className="insight-badge quick">
              <img src={quick} width={500} height={300} loading="lazy" alt="" className="dash-badge" />
            </div>
          ) : null}
          {ai ? (
            <div className="insight-badge ai">
              <img src={ai} loading="lazy" alt="" className="dash-badge" />
            </div>
          ) : null}
          {dash ? (
            <img
              src={dash}
              loading="lazy"
              alt=""
              className="dashboard-main-img"
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
