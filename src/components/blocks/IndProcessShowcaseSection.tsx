import type { IndProcessShowcaseBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function IndProcessShowcaseSection({ block }: { block: IndProcessShowcaseBlock }) {
  const steps = block.steps ?? []

  return (
    <section className="process-section section py-0">
      <div className="custom-container container-fluid">
        <div className="process-content_box">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              {block.badge ? <span className="section-badge">{block.badge}</span> : null}
              <h2 className="section-title two text-uppercase">
                {block.titleBeforeHighlight}
                {block.titleHighlight ? (
                  <>
                    {' '}
                    <span className="highlight-pink">{block.titleHighlight}</span>
                  </>
                ) : null}
              </h2>
              {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
            </div>
          </div>
          <div
            className="process-cards-wrapper px-3 justify-content-center"
            style={{ gap: '20px' }}
          >
            {steps.flatMap((step, i) => {
              const src = step?.image ? mediaUrl(step.image) : ''
              const card = (
                <div className="process-card" key={step?.id ?? `step-${i}`}>
                  {src ? (
                    <img
                      src={src}
                      width={261}
                      height={261}
                      loading="lazy"
                      alt=""
                      className="process-img"
                    />
                  ) : null}
                  <div className="process-title-box">
                    <h3>{step?.title}</h3>
                  </div>
                </div>
              )
              if (i < steps.length - 1) {
                return [card, <div className="connector-dot" key={`dot-${i}`} />]
              }
              return [card]
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
