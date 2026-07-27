import type { SectionIntroBlock } from '@/payload-types'

export function SectionIntroSection({ block }: { block: SectionIntroBlock }) {
  return (
    <section className="infrastructure-section">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            {block.badge ? <span className="section-badge">{block.badge}</span> : null}
            <h2 className="section-title">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}
