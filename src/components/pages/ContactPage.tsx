import { ContactForm } from '@/components/ContactForm'

export function ContactPage() {
  return (
    <>
      <section className="common-hero-section">
          <div className="container-fluid custom-container">
              <div className="row align-items-center g-4">
                  <div className="col-lg-7">
                      <div className="hero-content">
                          <div className="hero-badge-wrap">
                              <span className="hero-badge">24/7 Support Available</span>
                          </div>
                          <h1 className="hero-title">CONTACT US</h1>
                          <p className="hero-subtitle">
                              Get in Touch with the SEWB Team. <br />
                              Whether you have a question about the SEWB App, want to join as a Health Professional, explore service integration opportunities, or discuss partnership possibilities — our team is here to help.
                          </p>
                          <div className="hero-features-tags">
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Fast Response</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Global Support</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Assured Help</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <div className="hero-image-wrap">
                          <img src="/assets/img/banner/contact-hero-v3.png" width="550" height="420" loading="lazy" alt="Contact SEWB Support" className="hero-main-img img-fluid" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="contact-section">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center mb-5">
                  <div className="col-lg-12 col-xl-10 text-center">
                      <span className="section-badge">Contact Details</span>
                      <h2 className="section-title">Reach Us Directly</h2>
                      <p className="section-subtitle">
                          Choose the contact method that works best for you.
                      </p>
                  </div>
              </div>
              <div className="row g-4">
                  <div className="col-lg-4">
                      <div className="contact-cards-wrapper">
                          <div className="row g-4">
                              <div className="col-lg-12 col-md-6">
                                  <div className="contact-info-card">
                                      <div className="card-icon">
                                          <img src="/assets/img/contact/location.png" width="30" height="30" loading="lazy" alt="Location" />
                                      </div>
                                      <div className="card-content">
                                          <h3 className="card-title">Visit Our Office</h3>
                                          <p className="card-description">
                                              3 Clunies Ross Court, Eight Mile Plains,<br /> QLD 4113, Australia
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-12 col-md-6">
                                  <div className="contact-info-card">
                                      <div className="card-icon">
                                          <img src="/assets/img/contact/mail.png" width="30" height="30" loading="lazy" alt="Mail" />
                                      </div>
                                      <div className="card-content">
                                          <h3 className="card-title">Email Us</h3>
                                          <p className="card-description">
                                               support@sewb
                                           </p>
                                          <br />
                                          <h3 className="card-title">Call Us</h3>
                                          <p className="card-description">
                                              Phone: +61 07 3473 1700
                                          </p>
                                          
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-12 col-md-6">
                                  <div className="social-card">
                                      <h4 className="social-title">Follow Us</h4>
                                      <p className="card-description mb-3">Stay connected with SEWB news, platform updates, digital health innovation, and wellbeing insights across our social channels.</p>
                                      <div className="social-links">
                                          <a href="javascript:;" className="social-link">
                                              <img src="/assets/img/icons/facebook2.png" width="24" height="20" loading="lazy" alt="Facebook" />
                                          </a>
                                          <a href="javascript:;" className="social-link">
                                              <img src="/assets/img/icons/twitter2.png" width="24" height="20" loading="lazy" alt="Twitter" />
                                          </a>
                                          <a href="javascript:;" className="social-link">
                                              <img src="/assets/img/icons/instagram2.png" width="24" height="20" loading="lazy" alt="Instagram" />
                                          </a>
                                          <a href="javascript:;" className="social-link">
                                              <img src="/assets/img/icons/linkedin2.png" width="24" height="20" loading="lazy" alt="LinkedIn" />
                                          </a>
                                          <a href="javascript:;" className="social-link">
                                              <img src="/assets/img/icons/youtube2.png" width="24" height="20" loading="lazy" alt="YouTube" />
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-8">
                      <div className="modern-contact-form">
                          <div className="form-header">
                              <h3 className="form-title">Send Us a Message</h3>
                              <p className="section-subtitle text-start text-white opacity-75">Complete the contact form below and a member of the SEWB team will respond as soon as possible.</p>
                          </div>
                          <ContactForm />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="map-section">
          <div className="container-fluid custom-container text-center">
              <span className="section-badge">Find Us</span>
              <h2 className="section-title">Find our office location and get easy directions</h2>
              <p className="section-subtitle">Use the map below to locate our Brisbane office and plan your visit. <br />
                  If you’re attending a meeting or consultation, we recommend contacting us in advance so we can ensure the appropriate team member is available to assist you.</p>
              <div className="map-box">
                  <iframe
                      src="https://www.google.com/maps?q=SEWB+AI,+3+Clunies+Ross+Court,+Eight+Mile+Plains+QLD+4113,+Australia&output=embed"
                      style={{width: '100%', height: '500px', border: 0}} allowFullScreen loading="lazy">
                  </iframe>
              </div>
          </div>
      </section>
      
      <section className="cta-section section pb-0">
          <div className="custom-container container-fluid">
              <div className="cta-box text-center">
                  <h2 className="section-title two">Not Sure Where to Start?</h2>
                  <p className="section-subtitle">Whether you’re managing your wellbeing, growing your healthcare practice, or connecting services to the SEWB ecosystem, our team can help guide you to the right solution.</p>
                  <div className="footer-links-wrap mt-4">
                      <span className="feature-tag mx-2"><i className="fas fa-circle" style={{fontSize: '8px'}}></i> Continuous Tracking</span>
                      <span className="feature-tag mx-2"><i className="fas fa-circle" style={{fontSize: '8px'}}></i> Early Risk Alerts</span>
                      <span className="feature-tag mx-2"><i className="fas fa-circle" style={{fontSize: '8px'}}></i> AI Wellness Insights</span>
                      <span className="feature-tag mx-2"><i className="fas fa-circle" style={{fontSize: '8px'}}></i> Connected Care</span>
                      <span className="feature-tag mx-2"><i className="fas fa-circle" style={{fontSize: '8px'}}></i> Smart Insights</span>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}
