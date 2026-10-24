import type { HomeAppDownloadBlock } from '@/payload-types'

import { Href } from '@/components/Href'
import { mediaUrl } from '@/lib/mediaUrl'
import { phpAsset } from '@/lib/phpAsset'

function storeButton(label: string | null | undefined, href: string | null | undefined) {
  const text = label?.trim()
  const url = href?.trim()
  if (!text || !url) return null
  return (
    <Href href={url} className="primary-btn">
      {text}
    </Href>
  )
}

export function HomeAppDownloadSection({ block }: { block: HomeAppDownloadBlock }) {
  const bg =
    block.backgroundImage ?
      mediaUrl(block.backgroundImage)
    : phpAsset('assets/img/features/product-bg.webp')
  const mockup = block.mockupImage ? mediaUrl(block.mockupImage) : ''
  const paragraphs = block.paragraphs ?? []
  const appStoreButton = storeButton(block.appStoreLabel, block.appStoreUrl)
  const playStoreButton = storeButton(block.playStoreLabel, block.playStoreUrl)

  return (
    <section className="app-download-section two home-app" id="app">
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
          <div className="col-lg-7 col-xl-6">
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
              {appStoreButton || playStoreButton ? (
                <div className="d-flex flex-wrap gap-3 mt-4">
                  {appStoreButton}
                  {playStoreButton}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {mockup ? (
        <div className="app-mockup">
          <img src={mockup} width={1185} height={850} loading="lazy" alt="" className="img-fluid" />
        </div>
      ) : null}
    </section>
  )
}
