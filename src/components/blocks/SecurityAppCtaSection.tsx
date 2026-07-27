import type { SecurityAppCtaBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function SecurityAppCtaSection({ block }: { block: SecurityAppCtaBlock }) {
  const mockup = block.mockupImage ? mediaUrl(block.mockupImage) : ''
  const bullets = block.bullets ?? []

  return (
    <section className="app-download-section two" id="app">
      <div className="container-fluid custom-container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="app-content">
              {block.badge ? <span className="section-badge">{block.badge}</span> : null}
              <h2 className="section-title text-white text-uppercase" style={{ whiteSpace: 'pre-line' }}>
                {block.title}
              </h2>
              <ul className="app-list">
                {bullets.map((b, i) =>
                  b?.text ? <li key={b.id ?? i}>{b.text}</li> : null,
                )}
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="app-mockup">
              {mockup ? (
                <img src={mockup} width={1185} height={850} loading="lazy" alt="" className="img-fluid" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
