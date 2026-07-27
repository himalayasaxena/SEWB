import Link from 'next/link'
import type { Footer as FooterGlobal } from '@/payload-types'

import {
  defaultFooterColumns,
  defaultFooterSocialLinks,
  defaultNewsletterPoints,
} from '@/lib/defaultFooter'

const socialIconByLabel: Record<string, string> = {
  facebook: '/assets/img/icons/facebook.png',
  twitter: '/assets/img/icons/twitter.png',
  instagram: '/assets/img/icons/instagram.png',
  linkedin: '/assets/img/icons/linkedin.png',
  youtube: '/assets/img/icons/youtube.png',
}

export function SiteFooter({ footer }: { footer?: FooterGlobal | null }) {
  const newsletterTitle = footer?.newsletterTitle || 'Turn Health Data Into Life-Saving Intelligence'
  const newsletterPlaceholder = footer?.newsletterPlaceholder || 'Enter your email'
  const newsletterButtonLabel = footer?.newsletterButtonLabel || 'Subscribe'
  const newsletterPoints = (footer?.newsletterPoints ?? [])
    .map((p) => p?.text?.trim())
    .filter(Boolean) as string[]
  const points = newsletterPoints.length ? newsletterPoints : defaultNewsletterPoints

  const tagline =
    footer?.tagline?.trim() ||
    'SEWB is an AI-powered health intelligence platform that transforms wearable and medical data into predictive, personalized care.'
  const columns = (footer?.columns?.length ? footer.columns : defaultFooterColumns) ?? []
  const socialLinks = (footer?.socialLinks?.length ? footer.socialLinks : defaultFooterSocialLinks) ?? []
  const contactEmail = footer?.contactEmail?.trim() || 'support@sewb'
  const contactAddress =
    footer?.contactAddress?.trim() || '3 Clunies Ross Court, Eight Mile Plains, QLD 4113, Australia'
  const copyrightText = footer?.copyrightText?.trim() || 'Copyright © 2026 SEWB'
  const rightsText = footer?.rightsText?.trim() || 'All Rights Reserved'
  const termsLabel = footer?.termsLabel?.trim() || 'Terms and Conditions'
  const termsHref = footer?.termsHref?.trim() || '/terms-conditions'
  const privacyLabel = footer?.privacyLabel?.trim() || 'Privacy Policy'
  const privacyHref = footer?.privacyHref?.trim() || '/privacy-policy'

  return (
    <>
      <section className="newsletter-section">
        <div className="container-fluid custom-container position-relative z-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <h2 className="section-title text-white">{newsletterTitle}</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="subscribe-box">
                <input type="email" className="form-control" placeholder={newsletterPlaceholder} />
                <button type="button" className="btn primary-btn">
                  {newsletterButtonLabel}{' '}
                  <img src="/assets/img/icons/left-arrow.png" width="14" height="14" alt="arrow" />
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-center mt-4">
            <div className="col-lg-12">
              <ul className="newsletter-list">
                {points.map((p) => (
                  <li key={p}> {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container-fluid custom-container">
          <div className="row g-3">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="footer-logo">
                <Link href="/">
                  <img
                    src="/assets/img/logo.webp"
                    width={150}
                    height={50}
                    loading="lazy"
                    alt="Logo"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <p className="mt-3">
                {tagline}
              </p>
              <ul className="social-links">
                {socialLinks.map((item, i) => {
                  const label = (item?.label || '').trim().toLowerCase()
                  const icon = socialIconByLabel[label] || '/assets/img/icons/facebook.png'
                  return (
                    <li key={item?.id ?? `${label}-${i}`}>
                      <a href={item?.url || 'javascript:;'} target="_blank" rel="noreferrer">
                        <img
                          src={icon}
                          loading="lazy"
                          alt={`SEWB ${label || 'social'}`}
                          className="img-fluid"
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
            {columns.slice(0, 2).map((col, i) => (
              <div key={col?.id ?? `col-${i}`} className="col-xl-3 col-lg-3 col-md-6">
                <h2 className="footer-title">{col?.title}</h2>
                <ul className="footer-list footer-link">
                  {(col?.links ?? []).map((link, j) =>
                    link?.label && link?.href ? (
                      <li key={link.id ?? `${link.href}-${j}`}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            ))}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <h2 className="footer-title">Contact us</h2>
              <ul className="footer-list">
                <li>
                  <img
                    src="/assets/img/icons/mail.png"
                    width={30}
                    height={30}
                    loading="lazy"
                    alt="SEWB email"
                    className="img-fluid"
                  />
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </li>
                <li className="address">
                  <img
                    src="/assets/img/icons/space.png"
                    width={30}
                    height={30}
                    loading="lazy"
                    alt="SEWB phone"
                    className="img-fluid"
                  />
                  <a href="javascript:;">{contactAddress}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-divider">
            <hr />
          </div>
          <div className="row g-3 justify-content-center">
            <div className="col-lg-6 col-xl-6">
              <p className="copy-right ">{copyrightText}</p>
            </div>
            <div className="col-lg-6 col-xl-6">
              <p className="copy-right text-end">
                {rightsText}
                <Link href={termsHref} className="pe-0">
                  {termsLabel}
                </Link>
                <Link href={privacyHref}>{privacyLabel}</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-2xl login-modal-dialog">
          <div className="modal-content overflow-hidden">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body p-0 contact-section">
              <div className="row g-0">
                <div className="col-lg-6  login-modal-left">
                  <div className="login-bg-overlay"></div>
                  <img
                    src="/assets/img/login/login-bg.png"
                    loading="lazy"
                    alt="Login Bg"
                    className="login-bg"
                  />
                  <h3 className="mb-5 position-relative z-2 login-title text-start section-title">
                    Smarter Health
                    <br /> Starts Here
                  </h3>
                  <img
                    src="/assets/img/login/login.webp"
                    width={461}
                    height={560}
                    loading="lazy"
                    className="img-fluid login-center-img"
                    alt="Mobile APP"
                  />
                  <img
                    src="/assets/img/login/2.webp"
                    width={150}
                    height={150}
                    loading="lazy"
                    className="position-absolute z-2 login-float-1"
                    alt="Health Professional 1"
                  />
                  <img
                    src="/assets/img/login/3.webp"
                    width={150}
                    height={150}
                    loading="lazy"
                    className="position-absolute z-2 login-float-2"
                    alt="Health Professional 2"
                  />
                  <img
                    src="/assets/img/login/1.webp"
                    width={150}
                    height={150}
                    loading="lazy"
                    className="position-absolute z-2 login-float-3"
                    alt="Health Professional 3"
                  />
                </div>
                <div className="col-lg-6 p-5 login-modal-right ">
                  <div className="text-center mb-lg-4">
                    <img
                      src="/assets/img/logo.webp"
                      width={150}
                      height={50}
                      loading="lazy"
                      alt="logo"
                      className="mb-5 modal-logo"
                    />
                    <h4 className="text-start fw-bold mb-1 modal-form-title">Let&apos;s Connect</h4>
                    <p className="text-start mb-4 modal-form-subtitle">We&apos;re Here to Help You Anytime</p>
                  </div>
                  <div className="modern-contact-form login">
                    <form className="contact-form-modern">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-input" placeholder="Name" required />
                            <label className="form-label">Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-input" placeholder="Rank" required />
                            <label className="form-label">Rank</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email" className="form-input" placeholder="Email Address" required />
                            <label className="form-label">Email Address</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="tel" className="form-input" placeholder="Contact Number" required />
                            <label className="form-label">Contact Number</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              className="form-input form-textarea"
                              placeholder="Comments"
                              rows={3}
                            ></textarea>
                            <label className="form-label">Comments</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="button" className="primary-btn w-100">
                            Submit{' '}
                            <img src="/assets/img/icons/left-arrow.png" width="14" height="14" alt="arrow" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
