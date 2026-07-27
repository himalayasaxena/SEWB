import type { OrgPharmacySolutionsBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function OrgPharmacySolutionsSection({ block }: { block: OrgPharmacySolutionsBlock }) {
  const side = block.sideImage ? mediaUrl(block.sideImage) : ''
  const features = block.features ?? []

  return (
    <section className="pharmacy-solutions">
      <div className="container-fluid custom-container pharmacy-solutions-container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-9">
            {block.badge ? (
              <div className="lab-badge-wrapper d-flex justify-content-center">
                <div className="section-badge text-uppercase">{block.badge}</div>
              </div>
            ) : null}
            <h2 className="section-title two text-uppercase">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="row align-items-center gy-5">
          <div className="col-lg-5">
            <div className="pharmacy-image-wrapper">
              {side ? (
                <img
                  src={side}
                  width={500}
                  height={500}
                  loading="lazy"
                  alt=""
                  className="img-fluid"
                />
              ) : null}
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="pharmacy-features ps-lg-5 ">
              {features.map((f, i) => {
                const ic = f?.icon ? mediaUrl(f.icon) : ''
                return (
                  <div key={f?.id ?? i} className="pharmacy-feature-item">
                    <div className="feature-icon">
                      {ic ? (
                        <img src={ic} width={36} height={36} loading="lazy" alt="" className="img-fluid" />
                      ) : null}
                    </div>
                    <div className="feature-content">
                      <h3>{f?.title}</h3>
                      <p>
                        {f?.descriptionLine1}
                        {f?.descriptionLine2 ? (
                          <>
                            <br /> {f.descriptionLine2}
                          </>
                        ) : null}
                      </p>
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
