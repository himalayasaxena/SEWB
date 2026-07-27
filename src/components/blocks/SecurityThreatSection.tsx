import type { SecurityThreatBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

import { ParagraphWithBreaks } from '@/components/blocks/securityParagraph'

export function SecurityThreatSection({ block }: { block: SecurityThreatBlock }) {
  const bg = block.backgroundImage ? mediaUrl(block.backgroundImage) : ''
  const center = block.centerImage ? mediaUrl(block.centerImage) : ''
  const alertIc = block.alertIcon ? mediaUrl(block.alertIcon) : ''
  const items = block.items ?? []

  return (
    <section className="real-time-threat">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-11 col-xl-10">
            <div className="section-header text-center">
              {block.badge ? <span className="section-badge">{block.badge}</span> : null}
              <h2 className="section-title two text-uppercase">{block.title}</h2>
              {block.subtitle ? <p className="section-subtitle mb-0">{block.subtitle}</p> : null}
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="threat-image-wrapper">
              {bg ? (
                <img
                  src={bg}
                  width={550}
                  height={350}
                  loading="lazy"
                  alt=""
                  className="threat-bg-img img-fluid"
                  style={{ height: '350px' }}
                />
              ) : null}
              <div className="main-threat-img-container">
                {center ? (
                  <img
                    src={center}
                    width={380}
                    height={450}
                    loading="lazy"
                    alt=""
                    className="main-threat-img img-fluid"
                  />
                ) : null}
              </div>
              <div className="threat-alert-card">
                <div className="alert-icon-circle">
                  {alertIc ? (
                    <img src={alertIc} width={35} height={35} loading="lazy" alt="" className="img-fluid" />
                  ) : null}
                </div>
                <div className="alert-info">
                  {block.alertTitle ? <h3>{block.alertTitle}</h3> : null}
                  {block.alertSubtitle ? <p>{block.alertSubtitle}</p> : null}
                </div>
              </div>
            </div>
          </div>
          <div className=" offset-lg-1 col-lg-5 align-self-center">
            <div className="threat-feature-list">
              {items.map((item, i) => {
                const ic = item?.icon ? mediaUrl(item.icon) : ''
                return (
                  <div key={item?.id ?? i} className="threat-item">
                    <div className="threat-icon-box">
                      {ic ? (
                        <img src={ic} width={30} height={20} loading="lazy" alt="" className="img-fluid" />
                      ) : null}
                    </div>
                    <div className="threat-text">
                      <h4>{item?.title}</h4>
                      {item?.description ? <ParagraphWithBreaks text={item.description} /> : null}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
