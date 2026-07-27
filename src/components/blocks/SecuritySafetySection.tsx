import type { SecuritySafetyBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

import { ParagraphWithBreaks } from '@/components/blocks/securityParagraph'

export function SecuritySafetySection({ block }: { block: SecuritySafetyBlock }) {
  const main = block.mainImage ? mediaUrl(block.mainImage) : ''
  const dna = block.dnaOverlayImage ? mediaUrl(block.dnaOverlayImage) : ''
  const shieldBg = block.shieldBgImage ? mediaUrl(block.shieldBgImage) : ''
  const shieldIc = block.shieldIconImage ? mediaUrl(block.shieldIconImage) : ''
  const tagIc = block.tagIconImage ? mediaUrl(block.tagIconImage) : ''
  const features = block.features ?? []

  return (
    <section className="end-to-end-safety section">
      <div className="container-fluid custom-container">
        <div className="text-center section-header">
          {block.badge ? (
            <span className="section-badge text-uppercase">{block.badge}</span>
          ) : null}
          <h2 className="section-title two text-uppercase">{block.title}</h2>
          {block.subtitle ? <p className="section-subtitle mb-0">{block.subtitle}</p> : null}
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="safety-image-wrapper">
              {main ? (
                <img
                  src={main}
                  width={438}
                  height={544}
                  loading="lazy"
                  alt=""
                  className="main-safety-img img-fluid"
                />
              ) : null}
              {dna ? (
                <img
                  src={dna}
                  width={150}
                  height={214}
                  loading="lazy"
                  alt=""
                  className="dna-overlay img-fluid"
                />
              ) : null}
              <div className="shield-overlap-group">
                {shieldBg ? (
                  <img
                    src={shieldBg}
                    width={160}
                    height={160}
                    loading="lazy"
                    alt=""
                    className="shield-bg-img img-fluid"
                  />
                ) : null}
                {shieldIc ? (
                  <img
                    src={shieldIc}
                    width={97}
                    height={75}
                    loading="lazy"
                    alt=""
                    className="shield-icon-img img-fluid"
                  />
                ) : null}
              </div>
              <div className="tag-overlay">
                {tagIc ? (
                  <img
                    src={tagIc}
                    width={35}
                    height={35}
                    loading="lazy"
                    alt=""
                    className="tag-icon img-fluid"
                  />
                ) : null}
                <div className="tag-info">
                  {block.tagHeading ? <h3>{block.tagHeading}</h3> : null}
                  {block.tagSubheading ? <p>{block.tagSubheading}</p> : null}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-list">
              {features.map((f, i) => {
                const ic = f?.icon ? mediaUrl(f.icon) : ''
                return (
                  <div key={f?.id ?? i} className="feature-item">
                    <div className="feature-icon-box">
                      {ic ? (
                        <img src={ic} width={63} height={63} loading="lazy" alt="" className="img-fluid" />
                      ) : null}
                    </div>
                    <div className="feature-text">
                      <h4>{f?.title}</h4>
                      {f?.description ? <ParagraphWithBreaks text={f.description} /> : null}
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
