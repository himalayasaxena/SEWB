import type { MedicalDisclaimerFullPageBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

/** Renders the medical disclaimer page from CMS block data (reference: UI-Updated/medical-disclaimer.php). */
export function MedicalDisclaimerFullPageSection({
  block,
}: {
  block: MedicalDisclaimerFullPageBlock
}) {
  const { hero, quote } = block
  const sideImg = hero.sideImage ? mediaUrl(hero.sideImage) : ''
  const glowImg = block.sectionGlowImage ? mediaUrl(block.sectionGlowImage) : ''
  const cards = block.cards ?? []

  return (
    <>
      <section className="common-hero-section">
        <div className="custom-container container-fluid">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="hero-content">
                {hero.badge ? (
                  <div className="hero-badge-wrap">
                    <span className="hero-badge">{hero.badge}</span>
                  </div>
                ) : null}
                <h1 className="hero-title">
                  {hero.title}
                  {hero.titleHighlight ? (
                    <>
                      {' '}
                      <span className="highlight">{hero.titleHighlight}</span>
                    </>
                  ) : null}
                </h1>
                {hero.subtitle ? <p className="hero-subtitle">{hero.subtitle}</p> : null}
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="hero-image-wrap">
                {sideImg ? (
                  <img
                    src={sideImg}
                    width={450}
                    height={400}
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
      <section className="disclaimer-section py-5">
        {glowImg ? (
          <img
            src={glowImg}
            width={357}
            height={800}
            loading="lazy"
            alt=""
            className="glow-right"
          />
        ) : null}
        <div className="container-fluid custom-container">
          <div className="disclaimer-wrapper">
            {cards.map((card, i) => {
              if (!card) return null
              const icon = card.icon ? mediaUrl(card.icon) : ''
              const paragraphs = card.paragraphs ?? []
              const cardClass =
                card.variant === 'important' ? 'disclaimer-card important' : 'disclaimer-card'

              return (
                <div key={card.id ?? i} className={cardClass}>
                  <div className="disclaimer-header">
                    <div className="icon-box">
                      {icon ? (
                        <img
                          src={icon}
                          width={24}
                          height={24}
                          loading="lazy"
                          alt=""
                          className="dis-icons"
                        />
                      ) : null}
                    </div>
                    <h3>{card.heading}</h3>
                  </div>
                  <div className="disclaimer-body">
                    {paragraphs.map((p, pi) =>
                      p?.text ? (
                        <p key={p.id ?? pi}>{p.text}</p>
                      ) : null,
                    )}
                  </div>
                </div>
              )
            })}
            {quote?.line1 || quote?.line2Lead || quote?.line2Bold || quote?.line2Trail ? (
              <div className="disclaimer-quote-box mt-5">
                {quote.line1 ? <p>{quote.line1}</p> : null}
                {quote.line2Lead || quote.line2Bold || quote.line2Trail ? (
                  <p className="mb-0">
                    {quote.line2Lead ?? ''}
                    {quote.line2Bold ? <b>{quote.line2Bold}</b> : null}
                    {quote.line2Trail ?? ''}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
