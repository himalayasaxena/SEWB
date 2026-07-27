import Link from 'next/link'

import { phpAsset } from '@/lib/phpAsset'

/** Static homepage hero (production). Live preview swaps this for `BannerSliderSection` when CMS layout has a banner block. */
export function HomePageBanner() {
  return (
    <section className="banner-slider">
      <div className="slider-container">
        <div className="slider-wrapper">
          <div className="slide active">
            <div
              className="slide-background"
              style={{ backgroundImage: `url('${phpAsset('assets/img/banner/b1.webp')}')` }}
            ></div>
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="container-fluid custom-container">
                <div className="row align-items-center justify-content-start">
                  <div className="col-lg-9">
                    <div className="banner-content">
                      <span className="banner-pretitle">SEWB: Your Complete Health Ecosystem</span>
                      <h1 className="banner-title">
                        Wearables. Medical Records. Professional Care. All in One Secure Space
                      </h1>
                      <p className="banner-subtitle">
                        Managing your health shouldn&apos;t mean juggling multiple apps, scattered medical records, and
                        disconnected care providers. SEWB brings your entire health picture together—your wearables,
                        medical data, and professional support—into one intelligent platform.
                      </p>
                      <div className="banner-actions">
                        <Link href="/individuals" className="primary-btn">
                          Explore the Platform
                        </Link>
                        <Link href="/about" className="white-btn">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="slide-background"
              style={{ backgroundImage: `url('${phpAsset('assets/img/banner/b2.webp')}')` }}
            ></div>
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="container-fluid custom-container">
                <div className="row align-items-center  justify-content-start">
                  <div className="col-lg-9">
                    <div className="banner-content">
                      <span className="banner-pretitle">Powering a Smarter Healthcare Network</span>
                      <h1 className="banner-title">Connected Healthcare Infrastructure</h1>
                      <p className="banner-subtitle">
                        Whether a health professional, technology partner or enterprise organisation, become part of a
                        truly connected complete healthcare ecosystem. It enables better coordination, clearer
                        communication and more efficient service delivery across healthcare infrastructure.
                      </p>
                      <div className="banner-actions">
                        <Link href="/individuals" className="primary-btn">
                          Get Started
                        </Link>
                        <Link href="/features" className="white-btn">
                          View Features
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-indicators">
          <button type="button" className="indicator active" data-slide="0"></button>
          <button type="button" className="indicator" data-slide="1"></button>
        </div>
      </div>
    </section>
  )
}
