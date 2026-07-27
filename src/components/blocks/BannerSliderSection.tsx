import type { BannerSliderBlock } from '@/payload-types'

import { mediaUrl } from '@/lib/mediaUrl'

export function BannerSliderSection({ block }: { block: BannerSliderBlock }) {
  const slides = block.slides ?? []
  return (
    <section className="banner-slider">
      <div className="slider-container">
        <div className="slider-wrapper">
          {slides.map((slide, idx) => (
            <div
              key={slide.id ?? idx}
              className={idx === 0 ? 'slide active' : 'slide'}
            >
              <div
                className="slide-background"
                style={{
                  backgroundImage: `url('${mediaUrl(slide.backgroundImage)}')`,
                }}
              ></div>
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <div className="container-fluid custom-container">
                  <div className="row align-items-center justify-content-start">
                    <div className="col-lg-9">
                      <div className="banner-content">
                        {slide.pretitle ? (
                          <span className="banner-pretitle">{slide.pretitle}</span>
                        ) : null}
                        <h1 className="banner-title">{slide.title}</h1>
                        {slide.subtitle ? <p className="banner-subtitle">{slide.subtitle}</p> : null}
                        <div className="banner-actions">
                          {slide.primaryCta?.label ? (
                            <a href={slide.primaryCta.href ?? '#'} className="primary-btn">
                              {slide.primaryCta.label}
                            </a>
                          ) : null}
                          {slide.secondaryCta?.label ? (
                            <a href={slide.secondaryCta.href ?? '#'} className="white-btn">
                              {slide.secondaryCta.label}
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-indicators">
          {slides.map((slide, idx) => (
            <button
              key={slide.id ?? idx}
              type="button"
              className={idx === 0 ? 'indicator active' : 'indicator'}
              data-slide={idx}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
