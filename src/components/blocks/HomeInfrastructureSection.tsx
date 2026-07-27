import Link from 'next/link'

import type { HomeInfrastructureBlock } from '@/payload-types'

import { mediaUrl } from '@/lib/mediaUrl'
import { phpAsset } from '@/lib/phpAsset'

export function HomeInfrastructureSection({
  block,
  instanceKey,
}: {
  block: HomeInfrastructureBlock
  instanceKey: string
}) {
  const uid = (block.id ?? instanceKey).toString().replace(/[^a-zA-Z0-9]/g, '')
  const tab1Id = `individuals-${uid}`
  const tab2Id = `doctors-${uid}`
  const tab1 = block.tab1
  const tab2 = block.tab2
  const tab1Img = tab1?.image ? mediaUrl(tab1.image) : ''
  const tab2Img = tab2?.image ? mediaUrl(tab2.image) : ''

  return (
    <section className="infrastructure-section" id="platform">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            {block.badge ? <span className="section-badge">{block.badge}</span> : null}
            <h2 className="section-title">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="infra-tabs-wrapper">
          <ul className="nav nav-pills infra-tabs" id={`infraTab-${uid}`} role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id={`${tab1Id}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#${tab1Id}`}
                type="button"
                role="tab"
                aria-controls={tab1Id}
                aria-selected="true"
              >
                {block.tab1Label || 'For Individuals'}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id={`${tab2Id}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#${tab2Id}`}
                type="button"
                role="tab"
                aria-controls={tab2Id}
                aria-selected="false"
              >
                {block.tab2Label || 'For Health Professionals'}
              </button>
            </li>
          </ul>
          <div className="tab-content infra-tab-content" id={`infraTabContent-${uid}`}>
            <div className="tab-pane fade show active" id={tab1Id} role="tabpanel" aria-labelledby={`${tab1Id}-tab`}>
              {tab1 ? (
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="infra-images">
                      <div className="img-collage">
                        {tab1Img ? (
                          <img
                            src={tab1Img}
                            width={600}
                            height={458}
                            loading="lazy"
                            alt=""
                            className="img-main img-fluid"
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="infra-content">
                      <div className="content-header">
                        <span className="accent-bar"></span>
                        <div>
                          <h3>{tab1.heading}</h3>
                          {tab1.description ? <p className="content-desc">{tab1.description}</p> : null}
                        </div>
                      </div>
                      {tab1.bullets && tab1.bullets.length > 0 ? (
                        <ul className="feature-list">
                          {tab1.bullets.map((row, i) =>
                            row?.text ? <li key={row.id ?? i}>{row.text}</li> : null,
                          )}
                        </ul>
                      ) : null}
                      {tab1.ctaLabel ? (
                        <Link href={tab1.ctaHref || '#'} className="primary-btn">
                          {tab1.ctaLabel}{' '}
                          <img
                            src={phpAsset('assets/img/icons/left-arrow.png')}
                            width={14}
                            height={14}
                            alt=""
                          />{' '}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="tab-pane fade" id={tab2Id} role="tabpanel" aria-labelledby={`${tab2Id}-tab`}>
              {tab2 ? (
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="infra-images">
                      <div className="img-collage">
                        {tab2Img ? (
                          <img
                            src={tab2Img}
                            width={600}
                            height={400}
                            loading="lazy"
                            alt=""
                            className="img-main img-fluid"
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="infra-content">
                      <div className="content-header">
                        <span className="accent-bar"></span>
                        <div>
                          <h3>{tab2.heading}</h3>
                          {tab2.description ? <p className="content-desc">{tab2.description}</p> : null}
                        </div>
                      </div>
                      {tab2.bullets && tab2.bullets.length > 0 ? (
                        <ul className="feature-list">
                          {tab2.bullets.map((row, i) =>
                            row?.text ? <li key={row.id ?? i}>{row.text}</li> : null,
                          )}
                        </ul>
                      ) : null}
                      {tab2.ctaLabel ? (
                        <Link href={tab2.ctaHref || '#'} className="primary-btn">
                          {tab2.ctaLabel}{' '}
                          <img
                            src={phpAsset('assets/img/icons/left-arrow.png')}
                            width={14}
                            height={14}
                            alt=""
                          />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
