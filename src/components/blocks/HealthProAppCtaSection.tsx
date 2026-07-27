import type { HealthProAppCtaBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function HealthProAppCtaSection({ block }: { block: HealthProAppCtaBlock }) {
  const mockup = block.mockupImage ? mediaUrl(block.mockupImage) : ''
  const bullets = block.bullets ?? []

  return (
    <section className="app-download-section two" id="app">
      <div className="container-fluid custom-container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="app-content">
              {block.badge ? <span className="section-badge">{block.badge}</span> : null}
              <h2 className="section-title text-white">{block.title}</h2>
              {block.subtitle ? (
                <p className="section-subtitle text-white opacity-75 mb-4">{block.subtitle}</p>
              ) : null}
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
                <img
                  src={mockup}
                  width={530}
                  height={400}
                  loading="lazy"
                  alt="App Mockup"
                  className="img-fluid hero-main-img"
                  style={{
                    position: 'relative',
                    height: 'auto',
                    width: '100%',
                    maxHeight: '480px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    right: 'auto',
                    bottom: 'auto',
                    filter: 'none',
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
