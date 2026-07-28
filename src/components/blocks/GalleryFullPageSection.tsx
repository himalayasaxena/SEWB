import type { GalleryFullPageBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function GalleryFullPageSection({ block }: { block: GalleryFullPageBlock }) {
  const { hero, gallery } = block
  const heroImg = hero.image ? mediaUrl(hero.image) : ''
  const shapeImg = gallery.shapeImage ? mediaUrl(gallery.shapeImage) : ''
  const locationIcon = gallery.locationIcon ? mediaUrl(gallery.locationIcon) : ''
  const clockIcon = gallery.clockIcon ? mediaUrl(gallery.clockIcon) : ''
  const cards = gallery.cards ?? []

  return (
    <>
      <section className="common-hero-section">
        <div className="container-fluid custom-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="hero-content">
                {hero.badge ? (
                  <div className="hero-badge-wrap">
                    <span className="hero-badge">{hero.badge}</span>
                  </div>
                ) : null}
                <h1 className="hero-title">
                  {hero.titlePrefix}
                  {hero.titleHighlight ? (
                    <>
                      {' '}
                      <span className="highlight">{hero.titleHighlight}</span>
                    </>
                  ) : null}
                  {hero.titleSuffix ? <> {hero.titleSuffix}</> : null}
                </h1>
                {hero.subtitle ? <p className="hero-subtitle">{hero.subtitle}</p> : null}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-wrap">
                {heroImg ? (
                  <img
                    src={heroImg}
                    width={400}
                    height={300}
                    loading="lazy"
                    alt=""
                    className="hero-main-img img-fluid"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-section section">
        {shapeImg ? (
          <img
            src={shapeImg}
            width={200}
            height={200}
            loading="lazy"
            alt=""
            className="gallery-shape blog-shape_img"
          />
        ) : null}
        <div className="container-fluid custom-container">
          <div className="row justify-content-center text-center mb-3">
            <div className="col-lg-12 col-xl-10">
              {gallery.badge ? <span className="section-badge">{gallery.badge}</span> : null}
              <h2 className="section-title">{gallery.title}</h2>
            </div>
            {gallery.subtitle ? (
              <div className="col-lg-12 col-xl-8">
                <p className="section-subtitle">{gallery.subtitle}</p>
              </div>
            ) : null}
          </div>
          <div className="row g-4 g-lg-5">
            {cards.map((card, i) => {
              const img = card.image ? mediaUrl(card.image) : ''
              return (
                <div key={card.id ?? i} className="col-xl-4 col-lg-6 col-sm-6">
                  <div className="gallery-card">
                    <div className="gallery-img-wrapper">
                      {img ? (
                        <img
                          src={img}
                          width={400}
                          height={300}
                          loading="lazy"
                          alt={card.imageAlt || card.title}
                          className="gallery-img"
                        />
                      ) : null}
                      {card.tag ? <span className="gallery-tag">{card.tag}</span> : null}
                    </div>
                    <div className="gallery-info">
                      <h3 className="gallery-title">{card.title}</h3>
                      {card.location || card.dateTime ? (
                        <div className="gallery-meta">
                          {card.location ? (
                            <span className="gallery-location">
                              {locationIcon ? (
                                <img src={locationIcon} loading="lazy" alt="location" />
                              ) : null}{' '}
                              {card.location}
                            </span>
                          ) : null}
                          {card.dateTime ? (
                            <span className="gallery-date">
                              {clockIcon ? (
                                <img src={clockIcon} loading="lazy" alt="date" />
                              ) : null}{' '}
                              {card.dateTime}
                            </span>
                          ) : null}
                        </div>
                      ) : null}
                      {card.description ? (
                        <p className="gallery-desc">{card.description}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
