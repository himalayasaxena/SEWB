export function ProductListPage() {
  return (
    <>
      <section className="common-hero-section">
          <div className="custom-container container-fluid">
              <div className="row align-items-center g-4">
                  <div className="col-lg-7">
                      <div className="hero-content">
                          <div className="hero-badge-wrap">
                              <span className="hero-badge">Healthcare Solutions</span>
                          </div>
                          <h1 className="hero-title">Our <span className="highlight">Healthcare</span> Solutions</h1>
                          <p className="hero-subtitle">
                              Explore our complete range of healthcare products designed to support safety, hygiene, and better individual care. Find the right solutions tailored for hospitals and clinics.
                          </p>
                          <div className="hero-features-tags">
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> AI Health Intelligence</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Digital Reports</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Pharmacy Network</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Lab Integration</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <div className="hero-image-wrap">
                          <img src="/assets/img/product/banner.webp" width="1950" height="1120" loading="lazy" alt="Healthcare Solutions" className="hero-main-img img-fluid" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="product-solutions-section">
          <img src="/assets/img/shapes/blue-shape.webp" loading="lazy" alt="Blue Shape" className="blue-shape1" />
          <img src="/assets/img/shapes/blue-shape.webp" loading="lazy" alt="Blue Shape" className="blue-shape2" />
          <div className="container z-1 position-relative">
              <div className="row justify-content-center text-center">
                  <div className="col-lg-10 ">
                      <span className="section-badge">Our Healthcare Products</span>
                      <h2 className="section-title">Comprehensive Healthcare Technology Solutions</h2>
                      <p className="section-subtitle">Explore our innovative digital healthcare solutions designed to connect
                          individuals, Health Professionals, Organisations, and pharmacies in one seamless platform.</p>
                  </div>
              </div>
              <div className="infra-tabs-wrapper">
                  <ul className="nav nav-pills infra-tabs" id="productTab" role="tablist">
                      <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="ai-health-tab" data-bs-toggle="pill" data-bs-target="#ai-health"
                              type="button" role="tab" aria-controls="ai-health" aria-selected="true">AI Health
                              Intelligence</button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="doctor-platform-tab" data-bs-toggle="pill"
                              data-bs-target="#doctor-platform" type="button" role="tab" aria-controls="doctor-platform"
                              aria-selected="false">Health Professional Consultation Platform</button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="lab-system-tab" data-bs-toggle="pill" data-bs-target="#lab-system"
                              type="button" role="tab" aria-controls="lab-system" aria-selected="false">Lab Integration
                              System</button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pharmacy-network-tab" data-bs-toggle="pill"
                              data-bs-target="#pharmacy-network" type="button" role="tab" aria-controls="pharmacy-network"
                              aria-selected="false">Pharmacy Prescription Network</button>
                      </li>
                  </ul>
                  <div className="tab-content infra-tab-content" id="productTabContent">
                      <div className="tab-pane fade show active ai-health-tab" id="ai-health" role="tabpanel"
                          aria-labelledby="ai-health-tab">
                          <div className="product-card-wrapper left">
                              <img src="/assets/img/features/pl-bg.webp" width="616" height="650" loading="lazy"
                                  alt="Track Dashboard" className="product-bg_img-left" />
                              <div className="row align-items-center justify-content-end g-4">
                                  <div className="col-lg-5">
                                      <div className="product-card-img left">
                                          <img src="/assets/img/product/health.png" width="873" height="574" loading="lazy"
                                              alt="AI Health Intelligence" className="img-fluid" />
                                      </div>
                                  </div>
                                  <div className="col-lg-7">
                                      <div className="product-card-content">
                                          <h3 className="card-title">AI Health Intelligence</h3>
                                          <p className="card-desc">AI Health Intelligence is an advanced system that analyzes
                                              symptoms and medical data to provide helpful health insights. It assists
                                              individuals in understanding possible conditions, finding the right Health
                                              Professionals, and
                                              making informed healthcare decisions quickly and confidently.</p>
                                          <a href="javascript:;" className="primary-btn">View Details <img
                                                  src="/assets/img/icons/left-arrow.png" width="14" height="14"
                                                  alt="arrow" /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="product-card-wrapper left">
                              <img src="/assets/img/features/product-bg.webp" width="616" height="650" loading="lazy"
                                  alt="Track Dashboard" className="product-bg_img" />
                              <div className="row align-items-center justify-content-start g-4">
                                  <div className="col-lg-5 order-lg-2">
                                      <div className="product-card-img right">
                                          <img src="/assets/img/product/platform.png" width="873" height="574" loading="lazy"
                                              alt="AI Health Intelligence" className="img-fluid " />
                                      </div>
                                  </div>
                                  <div className="col-lg-7 order-lg-1">
                                      <div className="product-card-content">
                                          <h3 className="card-title">Health Professional Consultation Platform</h3>
                                          <p className="card-desc">The Health Professional Consultation Platform enables
                                              individuals to connect
                                              with verified Health Professionals for online consultations, medical advice, and
                                              follow-up
                                              care. It provides a convenient and secure way to discuss symptoms, review
                                              reports, and receive professional guidance without unnecessary hospital visits.
                                          </p>
                                          <a href="javascript:;" className="primary-btn">View Details <img
                                                  src="/assets/img/icons/left-arrow.png" width="14" height="14"
                                                  alt="arrow" /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="product-card-wrapper left">
                              <img src="/assets/img/features/pl-bg.webp" width="616" height="650" loading="lazy"
                                  alt="Track Dashboard" className="product-bg_img-left" />
                              <img src="/assets/img/product/product-overlay.webp" width="873" height="574" loading="lazy"
                                  alt="Product Overlay" className="wrapper-overlay" />
                              <div className="row align-items-center justify-content-end g-4">
                                  <div className="col-lg-5">
                                      <div className="product-card-img left two">
                                          <img src="/assets/img/product/ai-intelligence.png" width="873" height="574"
                                              loading="lazy" alt="AI Health Intelligence" className="img-fluid" />
                                      </div>
                                  </div>
                                  <div className="col-lg-7">
                                      <div className="product-card-content">
                                          <h3 className="card-title">AI Health Intelligence</h3>
                                          <p className="card-desc">AI Health Intelligence is an advanced system that analyzes
                                              symptoms and medical data to provide helpful health insights. It assists
                                              individuals in understanding possible conditions, finding the right Health
                                              Professionals, and
                                              making informed healthcare decisions quickly and confidently.</p>
                                          <a href="javascript:;" className="primary-btn">View Details <img
                                                  src="/assets/img/icons/left-arrow.png" width="14" height="14"
                                                  alt="arrow" /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="product-card-wrapper left">
                              <img src="/assets/img/features/product-bg.webp" width="616" height="650" loading="lazy"
                                  alt="Track Dashboard" className="product-bg_img" />
                              <div className="row align-items-center justify-content-start g-4">
                                  <div className="col-lg-5 order-lg-2">
                                      <div className="product-card-img right two">
                                          <img src=" assets/img/product/pharmacy.png" width="873" height="574"
                                              loading="lazy" alt="AI Health Intelligence" className="img-fluid " />
                                      </div>
                                  </div>
                                  <div className="col-lg-7 order-lg-1">
                                      <div className="product-card-content">
                                          <h3 className="card-title">Pharmacy Prescription Network</h3>
                                          <p className="card-desc">The Pharmacy Prescription Network connects individuals with
                                              partner pharmacies to easily fulfill Health Professional prescriptions.
                                              Individuals can securely
                                              share prescriptions, check medicine availability, and arrange convenient pickup
                                              or delivery, making access to medications faster and more reliable.
                                          </p>
                                          <a href="javascript:;" className="primary-btn">View Details <img
                                                  src="/assets/img/icons/left-arrow.png" width="14" height="14"
                                                  alt="arrow" /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="tab-pane fade" id="doctor-platform" role="tabpanel" aria-labelledby="doctor-platform-tab">
                          <div className="product-card-wrapper left">
                              <img src="/assets/img/features/product-bg.webp" width="616" height="650" loading="lazy"
                                  alt="Track Dashboard" className="product-bg_img" />
                              <div className="row align-items-center justify-content-start g-4">
                                  <div className="col-lg-5 order-lg-2">
                                      <div className="product-card-img right">
                                          <img src="/assets/img/product/platform.png" width="873" height="574" loading="lazy"
                                              alt="AI Health Intelligence" className="img-fluid " />
                                      </div>
                                  </div>
                                  <div className="col-lg-7 order-lg-1">
                                      <div className="product-card-content">
                                          <h3 className="card-title">Health Professional Consultation Platform</h3>
                                          <p className="card-desc">The Health Professional Consultation Platform enables
                                              individuals to connect
                                              with verified Health Professionals for online consultations, medical advice, and
                                              follow-up
                                              care. It provides a convenient and secure way to discuss symptoms, review
                                              reports, and receive professional guidance without unnecessary hospital visits.
                                          </p>
                                          <a href="javascript:;" className="primary-btn">View Details <img
                                                  src="/assets/img/icons/left-arrow.png" width="14" height="14"
                                                  alt="arrow" /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="tab-pane fade" id="lab-system" role="tabpanel" aria-labelledby="lab-system-tab">
                            <div className="product-card-wrapper left">
                              <img src="/assets/img/features/pl-bg.webp" width="616" height="650" loading="lazy"
                                  alt="Track Dashboard" className="product-bg_img-left" />
                              <img src="/assets/img/product/product-overlay.webp" width="873" height="574" loading="lazy"
                                  alt="Product Overlay" className="wrapper-overlay" />
                              <div className="row align-items-center justify-content-end g-4">
                                  <div className="col-lg-5">
                                      <div className="product-card-img left two">
                                          <img src="/assets/img/product/ai-intelligence.png" width="873" height="574"
                                              loading="lazy" alt="AI Health Intelligence" className="img-fluid" />
                                      </div>
                                  </div>
                                  <div className="col-lg-7">
                                      <div className="product-card-content">
                                          <h3 className="card-title">AI Health Intelligence</h3>
                                          <p className="card-desc">AI Health Intelligence is an advanced system that analyzes
                                              symptoms and medical data to provide helpful health insights. It assists
                                              individuals in understanding possible conditions, finding the right Health
                                              Professionals, and
                                              making informed healthcare decisions quickly and confidently.</p>
                                          <a href="javascript:;" className="primary-btn">View Details <img
                                                  src="/assets/img/icons/left-arrow.png" width="14" height="14"
                                                  alt="arrow" /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="tab-pane fade" id="pharmacy-network" role="tabpanel" aria-labelledby="pharmacy-network-tab">
                          <div className="product-card-wrapper left">
                              <img src="/assets/img/features/product-bg.webp" width="616" height="650" loading="lazy"
                                  alt="Track Dashboard" className="product-bg_img" />
                              <div className="row align-items-center justify-content-start g-4">
                                  <div className="col-lg-5 order-lg-2">
                                      <div className="product-card-img right two">
                                          <img src=" assets/img/product/pharmacy.png" width="873" height="574"
                                              loading="lazy" alt="AI Health Intelligence" className="img-fluid " />
                                      </div>
                                  </div>
                                  <div className="col-lg-7 order-lg-1">
                                      <div className="product-card-content">
                                          <h3 className="card-title">Pharmacy Prescription Network</h3>
                                          <p className="card-desc">The Pharmacy Prescription Network connects individuals with
                                              partner pharmacies to easily fulfill Health Professional prescriptions.
                                              Individuals can securely
                                              share prescriptions, check medicine availability, and arrange convenient pickup
                                              or delivery, making access to medications faster and more reliable.
                                          </p>
                                          <a href="javascript:;" className="primary-btn">View Details <img
                                                  src="/assets/img/icons/left-arrow.png" width="14" height="14"
                                                  alt="arrow" /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="testimonial-page-section two section">
          <div className="container-fluid custom-container">
              <div className="row g-3 justify-content-center">
                  <div className="col-lg-9">
                      <div className="testimonial-group">
                          <div className="text-center mb-5">
                              <span className="section-badge">User Voices</span>
                              <h2 className="section-title">
                                  What Our Users Say
                              </h2>
                              <p className="section-subtitle">Hear directly from healthcare professionals and individuals who
                                  trust
                                  SEWB. Their experiences reflect how our platform simplifies workflows, enhances care, and
                                  ensures data security every day.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="testimonial-slider-wrap position-relative">
                          <div className="owl-carousel testimonial-carousel" id="doctor-carousel">
                              <div className="item testimonial-item">
                                  <div className="testimonial-card">
                                      <div className="profile-img-wrap">
                                          <img src="/assets/img/testimonial/6.webp" width="84" height="84" loading="lazy"
                                              alt="Dr. Emily Rodriguez" />
                                      </div>
                                      <div className="testimonial-body">
                                          <p className="quote-text">"The platform allows me to connect with individuals easily
                                              and review their reports before consultations, which improves the quality of
                                              care."</p>
                                          <div className="card-footer-box d-flex justify-content-between align-items-end">
                                              <div className="user-info">
                                                  <h3 className="name">Emily Rodriguez</h3>
                                                  <p className="specialty">Pediatric Care</p>
                                              </div>
                                              <div className="rating">
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="item testimonial-item">
                                  <div className="testimonial-card">
                                      <div className="profile-img-wrap">
                                          <img src="/assets/img/testimonial/4.webp" width="84" height="84" loading="lazy"
                                              alt="Dr. Sarah Mitchell" />
                                      </div>
                                      <div className="testimonial-body">
                                          <p className="quote-text">"Individuals come to consultations better prepared, which
                                              allows us to focus on diagnosis and treatment rather than collecting basic
                                              information."</p>
                                          <div className="card-footer-box d-flex justify-content-between align-items-end">
                                              <div className="user-info">
                                                  <h3 className="name">Sarah Mitchell</h3>
                                                  <p className="specialty">Skin Allergy</p>
                                              </div>
                                              <div className="rating">
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="item testimonial-item">
                                  <div className="testimonial-card">
                                      <div className="profile-img-wrap">
                                          <img src="/assets/img/testimonial/5.webp" width="84" height="84" loading="lazy"
                                              alt="Dr. James Peterson" />
                                      </div>
                                      <div className="testimonial-body">
                                          <p className="quote-text">"Digital consultations and report sharing help me manage
                                              chronic individuals more effectively."</p>
                                          <div className="card-footer-box d-flex justify-content-between align-items-end">
                                              <div className="user-info">
                                                  <h3 className="name">James Peterson</h3>
                                                  <p className="specialty">Annual Checkup</p>
                                              </div>
                                              <div className="rating">
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="item testimonial-item">
                                  <div className="testimonial-card">
                                      <div className="profile-img-wrap">
                                          <img src="/assets/img/testimonial/6.webp" width="84" height="84" loading="lazy"
                                              alt="Dr. Emily Rodriguez" />
                                      </div>
                                      <div className="testimonial-body">
                                          <p className="quote-text">"The platform allows me to connect with individuals easily
                                              and review their reports before consultations, which improves the quality of
                                              care."</p>
                                          <div className="card-footer-box d-flex justify-content-between align-items-end">
                                              <div className="user-info">
                                                  <h3 className="name">Emily Rodriguez</h3>
                                                  <p className="specialty">Pediatric Care</p>
                                              </div>
                                              <div className="rating">
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                                  <img src="/assets/img/icons/rating.png" width="24" height="23" loading="lazy"
                                                      alt="Rating" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <hr className="section-divider" />
      <section className="faq-section" id="faq">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <h2 className="faq-title">FAQs</h2>
                      <div className="accordion faq-accordion" id="faqAccordion">
                          <div className="accordion-item">
                              <h2 className="accordion-header">
                                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                      What is SEWB?
                                  </button>
                              </h2>
                              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      SEWB is an AI-powered healthcare platform that helps individuals understand their health
                                      data, connect with Health Professionals, and manage medical reports in one place.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                      How does SEWB help individuals?
                                  </button>
                              </h3>
                              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      SEWB helps individuals by providing a centralized platform to track health metrics,
                                      receive
                                      AI-powered insights, manage appointments, store medical records securely, and connect
                                      with healthcare organisations seamlessly.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                      Is my health data secure on SEWB?
                                  </button>
                              </h3>
                              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Yes, SEWB employs enterprise-grade encryption, is HIPAA and ISO 27001 compliant, and
                                      uses multi-factor authentication. Your data is stored securely with complete privacy
                                      controls and you decide who can access your information.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                      Can Health Professionals use SEWB?
                                  </button>
                              </h3>
                              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Absolutely! Health Professionals can use SEWB to monitor individual health in real-time,
                                      receive
                                      AI-powered alerts for abnormal vitals, manage appointments, conduct telehealth
                                      consultations, and collaborate with other healthcare organisations.
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}
