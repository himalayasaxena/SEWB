import type { HomeAppDownloadBlock } from '@/payload-types'

import { mediaUrl } from '@/lib/mediaUrl'
import { phpAsset } from '@/lib/phpAsset'

export function HomeAppDownloadSection({ block }: { block: HomeAppDownloadBlock }) {
  const bg =
    block.backgroundImage ?
      mediaUrl(block.backgroundImage)
    : phpAsset('assets/img/features/product-bg.webp')
  const mockup = block.mockupImage ? mediaUrl(block.mockupImage) : ''
  const mockup2 = block.secondaryMockupImage ? mediaUrl(block.secondaryMockupImage) : mockup
  const paragraphs = block.paragraphs ?? []

  return (
    <section className="app-download-section two" id="app">
      <img
        src={bg}
        width={950}
        height={900}
        loading="lazy"
        alt=""
        className="product-bg_img"
      />
      <div className="container-fluid custom-container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="app-content">
              {block.badge ? <span className="section-badge">{block.badge}</span> : null}
              <h2 className="section-title text-white">
                {block.titleLine1}
                {block.titleLine2 ? (
                  <>
                    <br /> {block.titleLine2}
                  </>
                ) : null}
              </h2>
              {paragraphs.map((p, i) =>
                p?.text ? (
                  <p
                    key={p.id ?? i}
                    className={`section-description text-white${i === paragraphs.length - 1 && block.emphasisLine ? ' mb-2' : ''}`}
                  >
                    {p.text}
                  </p>
                ) : null,
              )}
              {block.emphasisLine ? (
                <p className="section-description text-white fw-bold">{block.emphasisLine}</p>
              ) : null}
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
        {mockup2 ? (
          <img src={mockup2} width={850} height={550} loading="lazy" alt="" className="img-fluid" />
        ) : null}
      </div>
    </section>
  )
}
