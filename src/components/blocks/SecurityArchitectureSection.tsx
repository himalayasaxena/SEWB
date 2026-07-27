import type { SecurityArchitectureBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

import { ParagraphWithBreaks } from '@/components/blocks/securityParagraph'

export function SecurityArchitectureSection({ block }: { block: SecurityArchitectureBlock }) {
  const side = block.sideImage ? mediaUrl(block.sideImage) : ''
  const items = block.items ?? []

  return (
    <section className="advanced-protection">
      <div className="container-fluid custom-container protection-container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-header text-center">
              {block.badge ? <span className="section-badge">{block.badge}</span> : null}
              <h2 className="section-title two text-uppercase">{block.title}</h2>
              {block.subtitle ? <p className="section-subtitle mb-0">{block.subtitle}</p> : null}
            </div>
          </div>
        </div>
        <div className="row align-items-start mt-lg-5 mt-3">
          <div className="col-lg-5 col-xl-4 offset-lg-1">
            <div className="protection-feature-list mt-md-5 mt-4">
              {items.map((item, i) => {
                const ic = item?.icon ? mediaUrl(item.icon) : ''
                return (
                  <div key={item?.id ?? i} className="protection-item">
                    <div className="protection-icon-box">
                      {ic ? (
                        <img src={ic} width={30} height={20} loading="lazy" alt="" className="img-fluid" />
                      ) : null}
                    </div>
                    <div className="protection-text">
                      <h3>{item?.title}</h3>
                      {item?.description ? <ParagraphWithBreaks text={item.description} /> : null}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="protection-image-wrapper">
              <div className="img-wrapper">
                {side ? (
                  <img
                    src={side}
                    width={797}
                    height={690}
                    loading="lazy"
                    alt=""
                    className="main-protection-img img-fluid"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
