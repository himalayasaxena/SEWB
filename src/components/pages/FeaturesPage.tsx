import { FeaturesAosInit } from '@/components/pages/FeaturesAosInit'

export function FeaturesPage() {
  return (
    <>
      <section className="common-hero-section" style={{paddingBottom: 0}}>
          <div className="custom-container container-fluid">
              <div className="row align-items-center justify-content-between g-4">
                  <div className="col-lg-7">
                      <div className="hero-content">
                          <div className="hero-badge-wrap">
                              <span className="hero-badge">SMART HEALTH ASSISTANT</span>
                          </div>
                          <h1 className="hero-title"><span className="highlight">Personalised Wellbeing Support</span>, Powered by Connected Data</h1>
                          <p className="hero-subtitle">Most people already collect health information through wearables, reports, and daily tracking — but understanding what that information means can be difficult. SEWB helps bring your health information together into one connected experience.</p>
                          <div className="hero-features-tags">
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Symptom Checker</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Wellness Insights</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Health Professional Matching</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5 align-self-end">
                      <div className="hero-image-wrap" style={{padding: '30px'}}>
                          <img src="/assets/img/features/banner.png" loading="lazy" alt="Features Banner" className="hero-main-img" style={{objectPosition: 'bottom', aspectRatio: 'auto', height: 'auto', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', marginBottom: 0}} />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="smart-health-section section features-health">
          <div className="custom-container container-fluid">
              <div className="row justify-content-center text-center">
                  <div className="col-lg-12">
                      <span className="section-badge">SMART HEALTH ASSISTANT</span>
                      <h2 className="section-title">Personalised Wellbeing Support, Powered by Connected Data</h2>
                      
                  </div>
              </div>
              <div className="row align-items-center g-lg-5 g-3 mt-2">
                  <div className="col-lg-4 col-xl-4">
                      <div className="img-box security-img_box">
                          <img src="/assets/img/features/smart-health.jpg" width="420" height="600" loading="lazy"  alt="Smart Health Assistant" className="img-fluid" />
                      </div>
                  </div>
                  <div className="col-lg-8 col-xl-7">
                      <div className="smart-health-content ps-lg-4">
                          <p className="health-content">
                              Most people already collect health information through wearables, reports, and daily tracking — but understanding what that information means can be difficult.
                          </p>
                          <p className="health-content">
                              SEWB helps bring your health information together into one connected experience, transforming wellness activity, wearable readings, and health history into easier-to-understand wellbeing insights that support more informed conversations and care planning.
                          </p>
                          <p className="health-content">
                              The platform also helps you stay connected to the right support by surfacing wellness patterns, organising your health information, and helping you connect with verified Health Professionals when needed.
                          </p>
                          <a href="/individuals" className="primary-btn mt-4">Get Started Now <img src="/assets/img/icons/left-arrow.png" width="14" height="14" alt="arrow" /></a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="security-section two section features" >
          <div className="custom-container container-fluid">
              <div className="row justify-content-center text-center mb-4 mb-lg-0">
                  <div className="col-lg-10">
                      <span className="section-badge">Powerful Features</span>
                      <h2 className="section-title">Tools Designed for Smarter Wellbeing Management</h2>
                      <p className="section-subtitle text-black">From wellness tracking to professional support, SEWB helps simplify the way individuals and families manage health and wellbeing.</p>
                  </div>
              </div>
              <div className="row g-4 justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="security-card">
                          <div className="benefit-icon-box">
                              <img src="/assets/img/icons/search-plus.png" width="26" height="29" loading="lazy"  alt="Symptom Checker" />
                          </div>
                          <h3 className="card-title">Symptom Checker</h3>
                          <p className="card-desc">Log how you’re feeling and record symptoms, wellness activity, and lifestyle information in one place. SEWB helps organise your information and provide general wellbeing guidance to support your next steps and conversations with Health Professionals.</p>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="security-card">
                          <div className="benefit-icon-box">
                              <img src="/assets/img/icons/shield.png" width="26" height="29" loading="lazy"  alt="Detection" />
                          </div>
                          <h3 className="card-title">Wellness Trends & Health Monitoring</h3>
                          <p className="card-desc">Track wearable data, wellness activity, and health information over time through one connected dashboard. SEWB helps surface changes and wellbeing patterns so you can stay informed and proactive about your health.</p>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="security-card">
                          <div className="benefit-icon-box">
                              <img src="/assets/img/icons/clinical-notes.png" width="26" height="29" loading="lazy"  alt="Doctor Matching" />
                          </div>
                          <h3 className="card-title">Health Professional Matching</h3>
                          <p className="card-desc">Find verified Health Professionals, including doctors, nurses, and care workers, based on your preferences, location, availability, and support needs — all within one connected platform.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="real-world-section section position-relative overflow-hidden py-5" style={{background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'}}>
          
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'radial-gradient(circle at top right, rgba(95, 182, 255, 0.15) 0%, transparent 60%)', zIndex: 0}}></div>
          
          <div className="custom-container container-fluid position-relative" style={{zIndex: 1}}>
              <div className="row justify-content-center text-center mb-5">
                  <div className="col-lg-8">
                      <span className="section-badge badge bg-white text-primary rounded-pill px-4 py-2 fw-bold mb-3 shadow-sm" style={{letterSpacing: '1px', fontSize: '14px'}}><i className="fas fa-bolt text-warning me-2"></i>Real-World Example</span>
                      <h2 className="section-title fw-bold text-dark mb-3">From Symptom Tracking to Connected Support</h2>
                      <p className="section-subtitle lead text-dark opacity-75 mb-0 mx-auto" style={{maxWidth: '700px'}}>See how SEWB helps individuals stay organised and connected throughout their wellbeing journey.</p>
                  </div>
              </div>
              
              <div className="row align-items-center g-5 justify-content-lg-between">
                  <div className="col-lg-5 col-xl-5">
                      <div className="modern-timeline d-flex flex-column gap-4 pe-lg-3">
                          <div className="step-card bg-white shadow-sm rounded-4 p-4 d-flex align-items-start gap-4 position-relative transition-hover border border-light" data-aos="fade-up" data-aos-delay="100">
                              <div className="step-icon flex-shrink-0 text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '55px', height: '55px', fontSize: '1.5rem', background: 'linear-gradient(135deg, #5FB6FF, #0056b3)'}}>
                                  <i className="fas fa-comment-medical text-white fa-sm"></i>
                              </div>
                              <div>
                                  <h4 className="mb-2 fw-bold text-dark fs-5">Record Symptoms & Wellness Information</h4>
                                  <p className="mb-0 text-secondary fs-6" style={{lineHeight: 1.6}}>Sarah logs ongoing headaches, fatigue, sleep patterns, and wearable information into the SEWB App.</p>
                              </div>
                          </div>
                          
                          <div className="step-card bg-white shadow-sm rounded-4 p-4 d-flex align-items-start gap-4 position-relative transition-hover border border-light" data-aos="fade-up" data-aos-delay="200">
                              <div className="step-icon flex-shrink-0 text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '55px', height: '55px', fontSize: '1.5rem', background: 'linear-gradient(135deg, #5FB6FF, #0056b3)'}}>
                                  <i className="fas fa-brain text-white fa-sm"></i>
                              </div>
                              <div>
                                  <h4 className="mb-2 fw-bold text-dark fs-5"> Review Wellness Insights</h4>
                                  <p className="mb-0 text-secondary fs-6" style={{lineHeight: 1.6}}>SEWB organises Sarah’s wellness information and highlights noticeable patterns within her recorded health activity and wearable trends.</p>
                              </div>
                          </div>
                          
                          <div className="step-card bg-white shadow-sm rounded-4 p-4 d-flex align-items-start gap-4 position-relative transition-hover border border-light" data-aos="fade-up" data-aos-delay="300">
                              <div className="step-icon flex-shrink-0 text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '55px', height: '55px', fontSize: '1.5rem', background: 'linear-gradient(135deg, #5FB6FF, #0056b3)'}}>
                                  <i className="fas fa-user-md text-white fa-sm"></i>
                              </div>
                              <div>
                                  <h4 className="mb-2 fw-bold text-dark fs-5"> Connect with a Health Professional</h4>
                                  <p className="mb-0 text-secondary fs-6" style={{lineHeight: 1.6}}>Based on her preferences and location, SEWB helps Sarah connect with a verified Health Professional suited to her support needs.</p>
                              </div>
                          </div>
                          
                          <div className="step-card bg-white shadow-sm rounded-4 p-4 d-flex align-items-start gap-4 position-relative transition-hover border border-light" data-aos="fade-up" data-aos-delay="400">
                              <div className="step-icon flex-shrink-0 text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '55px', height: '55px', fontSize: '1.5rem', background: 'linear-gradient(135deg, #5FB6FF, #0056b3)'}}>
                                  <i className="fas fa-heartbeat text-white fa-sm"></i>
                              </div>
                              <div>
                                  <h4 className="mb-2 fw-bold text-dark fs-5">Stay Engaged with Ongoing Care</h4>
                                  <p className="mb-0 text-secondary fs-6" style={{lineHeight: 1.6}}>After her consultation, Sarah uses SEWB to manage follow-up appointments, organise reports, monitor wellness activity, and stay connected with her care plan.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="col-lg-7 col-xl-6 text-center mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                      <div className="position-relative d-inline-block w-100">
                          <div className="position-absolute top-50 start-50 translate-middle bg-primary opacity-25 rounded-circle" style={{width: '400px', height: '400px', filter: 'blur(60px)', zIndex: '-1'}}></div>
                          
                          <img src="/assets/img/features/real-world.webp" loading="lazy" alt="Sarah's Health Journey" className="img-fluid" style={{maxHeight: '650px', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))'}} />
                          
                          
                          
                          <div className="position-absolute bottom-0 end-0 bg-white rounded-pill shadow-lg p-3 d-flex align-items-center gap-3 animate-float-delayed d-none d-md-flex" style={{zIndex: 10, marginBottom: '20px'}}>
                              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{width: '45px', height: '45px', background: 'rgba(0, 86, 179, 0.1)', color: '#0056b3'}}>
                                  <i className="fas fa-user-md fa-xl"></i>
                              </div>
                              <div className="text-start pe-2">
                                  <h6 className="mb-0 fw-bold text-dark">Specialist Care</h6>
                                  <small className="text-muted">Instant Access</small>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="protected-section section bg-white">
          <div className="custom-container container-fluid">
              <div className="row justify-content-center text-center mb-5">
                  <div className="col-lg-10">
                      <span className="section-badge">Secure & Compliant</span>
                      <h2 className="section-title">Healthcare Data Security You Can Trust</h2>
                      <p className="section-subtitle">Your health information is personal, and SEWB is designed to help keep it protected, private, and under your control.</p>
                  </div>
              </div>
              <div className="row align-items-center g-md-5 g-3">
                  <div className="col-lg-5">
                      <div className="position-relative protected-img-box">
                          <img src="/assets/img/features/protected1.webp" loading="lazy"  alt="Protected Data" className="img-fluid protected-img1" />
                          
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="protected-content ps-lg-5">
                          <p className="mb-md-4 mb-2 card-desc">
                              From wearable readings to uploaded health records, information shared through SEWB is protected through encrypted storage, secure transmission protocols, and controlled access permissions.
                          </p>
                          <p className="mb-md-5 mb-2 card-desc">
                              SEWB follows recognised healthcare privacy and information security practices to support responsible data handling across individuals, families, Health Professionals, and connected care services.
                          </p>
                          <div className="row g-4 w-100 mx-auto ps-0 ms-0">
                              <div className="col-sm-6">
                                  <div className="protected-card">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/lock.png" width="36" height="36" loading="lazy"  alt="Lock" />
                                      </div>
                                      <h3 className="card-title">ENCRYPTION</h3>
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="protected-card">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/security.png" width="36" height="36" loading="lazy"  alt="Security" />
                                      </div>
                                      <h3 className="card-title">HIPAA-READY</h3>
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="protected-card">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/cloud.png" width="36" height="36" loading="lazy"  alt="Cloud" />
                                      </div>
                                      <h3 className="card-title">SECURE CLOUD</h3>
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="protected-card">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/accessibility.png" width="36" height="36" loading="lazy"  alt="Accessibility" />
                                      </div>
                                      <h3 className="card-title">ACCESS CONTROL</h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="tracking-section section">
          <div className="custom-container container-fluid">
              <div className="product-card-wrapper right tracking-wrapper mt-0">
                  <img src="/assets/img/features/product-bg.webp" loading="lazy"  alt="Track Dashboard" className="product-bg_img" />
                  <div className="row justify-content-center align-items-center mb-custom">
                      <div className="col-lg-12 text-center">
                          <span className="section-badge">Real-Time Wellbeing Dashboard</span>
                          <h2 className="section-title">A Clearer View of Your Health and Wellness Information</h2>
                          <p className="section-subtitle">Stay connected to your health information through one unified dashboard designed to help you monitor wellness activity, wearable information, and long-term wellbeing trends.</p>
                      </div>
                  </div>
                  <div className="product-card-img right d-none d-lg-block">
                      <div className="position-relative text-end">
                          <img src="/assets/img/features/track.webp" loading="lazy"  alt="Track Dashboard" className="img-fluid track-mobile" />
                          <div className="tracking-badge ai">
                              
                          </div>
                          <div className="tracking-badge alert">
                              
                          </div>
                      </div>
                  </div>
                  <div className="row align-items-center justify-content-start">
                      <div className="col-lg-8 col-xl-7 feature-banner_content">
                          <div className="row g-lg-4 g-3">
                              <div className="col-sm-6">
                                  <div className="protected-card ">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/lock.png" width="36" height="36" loading="lazy"  alt="Lock" />
                                      </div>
                                      <h3 className="card-title">Wellness Metrics Tracking</h3>
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="protected-card">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/security.png" width="36" height="36" loading="lazy"  alt="Security" />
                                      </div>
                                      <h3 className="card-title">Visual Wellness Trends</h3>
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="protected-card">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/cloud.png" width="36" height="36" loading="lazy"  alt="Cloud" />
                                      </div>
                                      <h3 className="card-title">Wellness Notifications & Alerts</h3>
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="protected-card ">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/accessibility.png" width="36" height="36" loading="lazy"  alt="Accessibility" />
                                      </div>
                                      <h3 className="card-title">Personalised Wellness Insights</h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 d-lg-none mt-lg-5">
                          <div className="position-relative text-center mx-auto">
                              <img src="/assets/img/features/track.webp" loading="lazy"  alt="Track Dashboard" className="img-fluid track-mobile" />
                              <div className="tracking-badge ai">
                                  
                              </div>
                              <div className="tracking-badge alert">
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="security-section two section features" id="why-sewb">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center text-center mb-5">
                  <div className="col-lg-10">
                      <span className="section-badge">WHY CHOOSE SEWB</span>
                      <h2 className="section-title">A More Connected Approach to <span>Wellbeing Management</span></h2>
                  </div>
              </div>
              <div className="row g-4 justify-content-center">
                  <div className="col-lg-4 col-md-6">
                      <div className="security-card">
                          <div className="benefit-icon-box">
                              <img src="/assets/img/icons/cloud.png" width="26" height="29" loading="lazy" alt="Connected Ecosystem" />
                          </div>
                          <h3 className="card-title">One Connected Ecosystem</h3>
                          <p className="card-desc">Wearables, health records, Health Professionals, wellness tracking, and support services connected through one platform.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="security-card">
                          <div className="benefit-icon-box">
                              <img src="/assets/img/icons/shield.png" width="26" height="29" loading="lazy" alt="Insights" />
                          </div>
                          <h3 className="card-title">Insights That Support Understanding</h3>
                          <p className="card-desc">SEWB helps organise health and wellness information into clearer insights that support more informed care conversations.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="security-card">
                          <div className="benefit-icon-box">
                              <img src="/assets/img/icons/search-plus.png" width="26" height="29" loading="lazy" alt="Proactive" />
                          </div>
                          <h3 className="card-title">Stay Proactive About Your Wellbeing</h3>
                          <p className="card-desc">Track wellness activity, monitor changes over time, and stay engaged with your health journey through connected information and support.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="security-card">
                          <div className="benefit-icon-box">
                              <img src="/assets/img/icons/clinical-notes.png" width="26" height="29" loading="lazy" alt="Families" />
                          </div>
                          <h3 className="card-title">Built for Individuals, Families, and Care Teams</h3>
                          <p className="card-desc">Whether managing your own wellbeing, supporting family members, or coordinating care professionally, SEWB adapts to different care needs and lifestyles.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="security-card">
                          <div className="benefit-icon-box">
                              <img src="/assets/img/icons/lock.png" width="26" height="29" loading="lazy" alt="Data Control" />
                          </div>
                          <h3 className="card-title">Your Data, Your Control</h3>
                          <p className="card-desc">Your health information remains private, protected, and shared only with your permission.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="faq-section" id="faq">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <h2 className="faq-title">FAQs</h2>
                      <div className="accordion faq-accordion" id="faqAccordion">
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                      How does the Symptom Checker work?
                                  </button>
                              </h3>
                              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      You can log symptoms, wellness activity, and health information through the SEWB App. The platform helps organise this information alongside your recorded wellness history and wearable activity to provide general wellbeing insights and support more informed conversations with Health Professionals.<br /><br />
                                      SEWB is designed to support wellbeing management and does not replace professional medical advice, diagnosis, or emergency care.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                      Is my health information secure?
                                  </button>
                              </h3>
                              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Yes. SEWB uses encrypted data storage and transmission, controlled access permissions, and recognised healthcare privacy practices to help protect your personal information.<br /><br />
                                      You remain in control of your information and decide what is shared with Health Professionals and care providers.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                      Can I connect with Health Professionals through SEWB?
                                  </button>
                              </h3>
                              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Yes. SEWB helps you connect with verified Health Professionals, including doctors, nurses, and care workers, based on your preferences, support needs, and availability.<br /><br />
                                      Appointments, consultations, and secure sharing of health information can all be managed within the platform.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                      Does SEWB replace professional healthcare advice?
                                  </button>
                              </h3>
                              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      No. SEWB is designed to support wellbeing management, care coordination, and informed health engagement. The platform helps individuals organise health information, access support services, and stay connected with their care journey, but it does not replace professional medical assessment, diagnosis, or treatment.
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <FeaturesAosInit />
    </>
  )
}
