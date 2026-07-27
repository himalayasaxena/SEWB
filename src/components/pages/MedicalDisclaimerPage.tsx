export function MedicalDisclaimerPage() {
  return (
    <>
      <section className="common-hero-section">
          <div className="custom-container container-fluid">
              <div className="row align-items-center g-4">
                  <div className="col-lg-7">
                      <div className="hero-content">
                          <div className="hero-badge-wrap">
                              <span className="hero-badge">Important Notice</span>
                          </div>
                          <h1 className="hero-title">Medical <span className="highlight">Disclaimer</span></h1>
                          <p className="hero-subtitle">
                              SEWB AI supports healthcare access but does not replace licensed medical professionals. Learn about the limitations and boundaries of our digital tools.
                          </p>
                          <div className="hero-features-tags">
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Not Medical Advice</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Informational Use Only</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Consult Professionals</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5 text-center">
                      <div className="hero-image-wrap">
                          <img src="/assets/img/privacy/disclaimer.png" width="450" height="400" loading="lazy" alt="Medical Disclaimer" className="hero-main-img img-fluid" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="disclaimer-section py-5">
          <img src="/assets/img/privacypolicy/glow-left.webp" width="357" height="800" loading="lazy" alt="glow-bg" className="glow-right" />
          <div className="container-fluid custom-container">
              <div className="disclaimer-wrapper">
                  <div className="disclaimer-card important">
                      <div className="disclaimer-header">
                          <div className="icon-box">
                              <img src="/assets/img/icons/close.png" width="24" height="24" loading="lazy"  alt="Close" className="dis-icons" />
                          </div>
                          <h3>Important notice.</h3>
                      </div>
                      <div className="disclaimer-body">
                          <p>The platform supports healthcare access but does not replace licensed medical professionals.</p>
                      </div>
                  </div>
                  <div className="disclaimer-card">
                      <div className="disclaimer-header">
                          <div className="icon-box">
                                <img src="/assets/img/icons/desc2.png" width="24" height="24" loading="lazy"  alt="Desc2" className="dis-icons" />
                          </div>
                          <h3>Introduction</h3>
                      </div>
                      <div className="disclaimer-body">
                          <p>The information and services provided on this platform are intended to support healthcare access and improve communication between individuals and healthcare organisations. The platform offers tools such as AI-powered health insights, Health Professional consultation services, and access to medical resources to help users better understand their health.</p>
                          <p>However, this platform does not replace professional medical advice, diagnosis, or treatment from a licensed healthcare professional.</p>
                      </div>
                  </div>
                  <div className="disclaimer-card">
                      <div className="disclaimer-header">
                          <div className="icon-box">
                              <img src="/assets/img/icons/desc1.png" width="24" height="24" loading="lazy"  alt="Desc1" className="dis-icons" />
                          </div>
                          <h3>Not a Substitute for Medical Advice</h3>
                      </div>
                      <div className="disclaimer-body">
                          <p>Any health information, AI-generated insights, or guidance available through the platform is provided for informational and support purposes only. These tools are designed to help users better understand their health concerns and assist them in seeking appropriate medical care.</p>
                          <p>Users should always consult a qualified Health Professional or healthcare professional before making any medical decisions or starting any treatment.</p>
                      </div>
                  </div>
                  <div className="disclaimer-card">
                      <div className="disclaimer-header">
                          <div className="icon-box">
                             <img src="/assets/img/icons/desc3.png" width="24" height="24" loading="lazy"  alt="Desc3" className="dis-icons" />
                          </div>
                          <h3>Health Professional Consultations</h3>
                      </div>
                      <div className="disclaimer-body">
                          <p>The platform may allow users to connect with verified Health Professionals for consultations. While the platform facilitates this communication, the medical advice provided during consultations is the responsibility of the healthcare professional.</p>
                          <p>The platform itself does not provide medical treatment or clinical services.</p>
                      </div>
                  </div>
                  <div className="disclaimer-card">
                      <div className="disclaimer-header">
                          <div className="icon-box">
                              <img src="/assets/img/icons/desc4.png" width="24" height="24" loading="lazy"  alt="Desc4" className="dis-icons" />
                          </div>
                          <h3>Emergency Situations</h3>
                      </div>
                      <div className="disclaimer-body">
                          <p>This platform is not intended for emergency medical situations. If you are experiencing a medical emergency or a serious health condition, you should immediately contact emergency medical services or visit the nearest hospital.</p>
                      </div>
                  </div>
                  <div className="disclaimer-card">
                      <div className="disclaimer-header">
                          <div className="icon-box">
                             <img src="/assets/img/icons/desc5.png" width="24" height="24" loading="lazy"  alt="Desc5" className="dis-icons" />
                          </div>
                          <h3>Personal Responsibility</h3>
                      </div>
                      <div className="disclaimer-body">
                          <p>Users are responsible for how they use the information available on the platform. Any decisions related to health, treatment, or medication should be made in consultation with a licensed healthcare professional.</p>
                      </div>
                  </div>
                  <div className="disclaimer-card">
                      <div className="disclaimer-header">
                          <div className="icon-box">
                             <img src="/assets/img/icons/desc6.png" width="24" height="24" loading="lazy"  alt="Desc6" className="dis-icons" />
                          </div>
                          <h3>Limitation of Responsibility</h3>
                      </div>
                      <div className="disclaimer-body">
                          <p>While efforts are made to provide accurate and useful information, the platform does not guarantee that all health-related information or AI-generated insights will be complete or fully accurate. Users should treat the platform as a supportive tool rather than a replacement for professional healthcare services.</p>
                      </div>
                  </div>
                  <div className="disclaimer-quote-box mt-5">
                      <p>In the strange partnership between humans and technology, tools can extend our reach but never replace the hands that know how to heal.</p>
                      <p className="mb-0">A good medical disclaimer simply reminds everyone where the line is drawn: <b>technology can guide, but medicine still belongs to trained professionals. </b> </p>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}
