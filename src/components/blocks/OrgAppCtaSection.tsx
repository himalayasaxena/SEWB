import type { OrgAppCtaBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function OrgAppCtaSection({ block }: { block: OrgAppCtaBlock }) {
  const bg = block.backgroundImage ? mediaUrl(block.backgroundImage) : ''
  const mockup = block.mockupImage ? mediaUrl(block.mockupImage) : ''
  const bullets = block.bullets ?? []

  return (
    <section className="app-download-section two" id="app">
      {bg ? (
        <img
          src={bg}
          width={950}
          height={900}
          loading="lazy"
          alt=""
          className="product-bg_img"
        />
      ) : null}
      <div className="container-fluid custom-container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="app-content">
              {block.badge ? <span className="section-badge">{block.badge}</span> : null}
              <h2 className="section-title text-white" style={{ whiteSpace: 'pre-line' }}>
                {block.title}
              </h2>
              <ul className="app-list two">
                {bullets.map((b, i) =>
                  b?.title ? (
                    <li key={b.id ?? i}>
                      <div className="feature-text">
                        <h3>{b.title}</h3>
                      </div>
                    </li>
                  ) : null,
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
      <div className="app-mockup two">
        {mockup ? (
          <img src={mockup} width={850} height={550} loading="lazy" alt="" className="img-fluid" />
        ) : null}
      </div>
    </section>
  )
}
