export function HomePageMain() {
  return (
    <>
      <section className="infrastructure-section" id="platform">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                      <span className="section-badge">SEWB</span>
                      <h2 className="section-title">A Unified Platform for Connected Healthcare Services</h2>
                      <p className="section-subtitle">SEWB brings individuals, families, health professionals, enterprises, and organisations together in one structured, connected ecosystem focused on everyday wellbeing. Acting as a seamless bridge between people and healthcare providers, the platform makes accessing and delivering care simpler and more efficient.</p>
                      <p className="section-subtitle mt-3">Through two dedicated apps—the SEWB App for individuals and families, and the SEWB Health Professionals App for practitioners and care teams—users can interact, collaborate, and manage services with ease. Alongside this, SEWB offers personalised healthcare product options, wellness insights, diet plans, and exercise recommendations—all thoughtfully tailored to individual needs to support a healthier, more balanced lifestyle.</p>
                  </div>
              </div>
              <div className="infra-tabs-wrapper">
                  <ul className="nav nav-pills infra-tabs" id="infraTab" role="tablist">
                      <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="individuals-tab" data-bs-toggle="pill"
                              data-bs-target="#individuals" type="button" role="tab" aria-controls="individuals"
                              aria-selected="true">For Individuals</button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="doctors-tab" data-bs-toggle="pill" data-bs-target="#doctors"
                              type="button" role="tab" aria-controls="doctors" aria-selected="false">For Health
                              Professionals</button>
                      </li>
                      
                  </ul>
                  <div className="tab-content infra-tab-content" id="infraTabContent">
                      <div className="tab-pane fade show active" id="individuals" role="tabpanel"
                          aria-labelledby="individuals-tab">
                          <div className="row align-items-center">
                              <div className="col-lg-6">
                                  <div className="infra-images">
                                      <div className="img-collage">
                                          <img src="/assets/img/home/1.webp" width="600" height="458" loading="lazy"
                                              alt="Woman with phone" className="img-main img-fluid" />
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="infra-content">
                                      <div className="content-header">
                                          <span className="accent-bar"></span>
                                          <div>
                                              <h3>For Individuals and Families: The SEWB App</h3>
                                              <p className="content-desc">SEWB supports clients and their families in managing their wellbeing by bringing health tracking and professional services together in one place. This platform encourages a more proactive approach to wellbeing, helping individuals stay informed, take early action and focus on prevention rather than waiting for concerns to arise.</p>
                                              <ul className="feature-list">
                                                  <li><strong>All-in-One Health Management Hub:</strong> The SEWB app is the central hub for scheduling appointments, managing medications and viewing your family’s wellbeing dashboard. It acts as a personal gateway to stay organised and keep your health information in one secure spot.</li>
                                                  <li><strong>Clinical support:</strong> Users can access laboratories and pharmacies instantly for reports and e-prescriptions. This allows your health data and medical needs to be handled efficiently within the platform.</li>
                                                  <li><strong>Aged care and Disability support:</strong> Individuals can connect with care workers to access structured home healthcare services for those who need extra support. This includes mobility support, daily assistance and general wellness monitoring to help you or your loved ones live comfortably at home.</li>
                                                  <li><strong>AI-Powered Wellbeing:</strong> SEWB’s intelligent AI engine transforms data from health reports and wearable devices into clear, easy-to-understand wellness insights. It highlights meaningful trends and delivers practical lifestyle recommendations tailored to each individual. With a daily wellness score and intuitive AI indicators, users can quickly understand their activity levels, sleep patterns, and overall lifestyle habits—empowering them to make informed choices every day.</li>
                                              </ul>
                                              <a href="/individuals" className="primary-btn">Start Monitoring Now <img
                                                      src="/assets/img/icons/left-arrow.png" width="14" height="14" alt="arrow" /> </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
      
                      <div className="tab-pane fade" id="doctors" role="tabpanel" aria-labelledby="doctors-tab">
                          <div className="row align-items-center">
                              <div className="col-lg-6">
                                  <div className="infra-images">
                                      <div className="img-collage">
                                          <img src="/assets/img/health/health7.jpg" width="1185" height="850" loading="lazy"
                                              alt="Health Professionals App" className="img-main img-fluid" style={{borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="infra-content">
                                      <div className="content-header">
                                          <span className="accent-bar"></span>
                                          <div>
                                              <h3>For Health Professionals: The SEWB Health Professionals App</h3>
                                              <p className="content-desc">The SEWB Health Professionals app enables verified practitioners to manage their professional profiles, showcase specialties and offer services to individuals with ease. It simplifies basic tasks like coordinating appointments, tracking income and managing care coordination—providing more time to focus on individual outcomes.</p>
                                              <ul className="feature-list">
                                                  <li><strong>A Unified Dashboard for Integrated Care:</strong> Manage private practice or care coordination services through one unified, secure platform. It helps providers stay organized while making it easier to connect with individuals.</li>
                                                  <li><strong>Streamlined Workflow & Communication:</strong> Securely communicate with individuals, manage appointment bookings and coordinate follow-up care as needed—all from one workspace.</li>
                                                  <li><strong>Verified Expert Profiles:</strong> Showcase your professional experience, specialty areas and services to individuals looking for the right support and care.</li>
                                                  <li><strong>AI-Powered Decision Support:</strong> Use SEWB’s AI integration to support preventative care discussions and wellness planning. Providers can access individual-shared health reports and view a complete wellbeing dashboard when individuals give their permission.</li>
                                              </ul>
                                              <a href="/health-professionals" className="primary-btn">Explore Professional Tools <img
                                                      src="/assets/img/icons/left-arrow.png" width="14" height="14" alt="arrow" /> </a>
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
      
      <section className="ai-highlights-section">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center">
                  <div className="col-lg-10 col-xl-8">
                      <div className="section-header text-center">
                          <span className="section-badge">PRODUCT HIGHLIGHTS</span>
                          <h2 className="section-title">AI Intelligence Engine: Unified and Transformed Health Data</h2>
                          <p className="section-subtitle">
                              SEWB’s advanced AI-powered engine brings together diverse health and lifestyle data into one unified view. By analysing health profile and vital information, it delivers clear, actionable wellness insights. A daily check-in and personalized wellness score help individuals stay informed, track progress, and better understand their evolving health patterns over time.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="highlights-grid ">
                  <div className="highlight-item">
                      <div className="highlight-card-ai">
                          <div className="highlight-icon">
                              <img src="/assets/img/highlights/1.webp" width="30" height="30" loading="lazy"
                                  alt="Personalised Lifestyle Recommendations" />
                          </div>
                          <div className="highlight-content">
                              <h3 className="highlight-title">Personalised Lifestyle<br />Recommendations</h3>
                              <p className="highlight-description">
                                  Using these insights, SEWB creates tailored wellness plans that align with each individual’s lifestyle. From customized diet suggestions to practical exercise options, the platform supports sustainable, achievable improvements for everyday wellbeing.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="highlight-item">
                      <div className="highlight-card-ai">
                          <div className="highlight-icon">
                              <img src="/assets/img/highlights/2.webp" width="30" height="30" loading="lazy"
                                  alt="Smart Healthcare Professional Matching" />
                          </div>
                          <div className="highlight-content">
                              <h3 className="highlight-title">Smart Healthcare<br />Professional Matching</h3>
                              <p className="highlight-description">
                                  SEWB makes it easy to connect with the right health professionals by matching individuals with experts based on care needs, location, experience, ratings, and reviews. This ensures timely access to trusted, relevant healthcare support when it matters most.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="highlight-item">
                      <div className="highlight-card-ai">
                          <div className="highlight-icon">
                              <img src="/assets/img/highlights/3.webp" width="30" height="30" loading="lazy"
                                  alt="Predictive Wellness Insights" />
                          </div>
                          <div className="highlight-content">
                              <h3 className="highlight-title">Predictive Wellness<br />Insights</h3>
                              <p className="highlight-description">
                                  Through AI-driven pattern recognition, SEWB identifies emerging trends in health and wellbeing. These predictive insights empower individuals to anticipate changes, make informed decisions, and take a more proactive, long-term approach to their health.
                              </p>
                          </div>
                      </div>
                  </div>
      
              </div>
          </div>
      </section>
      <section className="privacy-security-section">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center">
                  <div className="col-lg-10 col-xl-8">
                      <div className="section-header text-center">
                          <span className="section-badge">PRIVACY FIRST</span>
                          <h2 className="section-title">Secure Access To Your Wellbeing Information</h2>
                          <p className="section-subtitle">
                              SEWB is built with a strong focus on data protection. We ensure that all information is handled securely and responsibly. We follow a structured approach to privacy and security to keep your information safe. Your data remains protected and is managed with your clear permission.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="privacy-content mt-0">
                  <div className="row align-items-center g-4 justify-content-center">
                      <div className="col-lg-5 privacy-col_one">
                          <div className="privacy-visual">
                              <img src="/assets/img/privacy/privacy.webp" width="350" height="390" loading="lazy"
                                  alt="Privacy Security" className="privacy-main-image" />
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-10">
                          <div className="privacy-features">
                              <div className="privacy-feature-item">
                                  <div className="feature-icon">
                                      <img src="/assets/img/privacy/1.png" width="30" height="30" loading="lazy"
                                          alt="Secure Data Encryption" />
                                  </div>
                                  <div className="feature-details">
                                      <h3 className="feature-title">Secure Data Encryption</h3>
                                      <p className="feature-description">All information is protected through advanced encryption for secure storage and transfer across the platform.</p>
                                  </div>
                              </div>
                              <div className="privacy-feature-item">
                                  <div className="feature-icon">
                                      <img src="/assets/img/privacy/2.png" width="30" height="30" loading="lazy"
                                          alt="Protected Login" />
                                  </div>
                                  <div className="feature-details">
                                      <h3 className="feature-title">Protected Login & Authentication</h3>
                                      <p className="feature-description">Secure login systems and multi-factor authentication are used for enhanced security and safer access.</p>
                                  </div>
                              </div>
                              <div className="privacy-feature-item">
                                  <div className="feature-icon">
                                      <img src="/assets/img/privacy/3.png" width="30" height="30" loading="lazy"
                                          alt="Role-Based Access" />
                                  </div>
                                  <div className="feature-details">
                                      <h3 className="feature-title">Role-Based Access</h3>
                                      <p className="feature-description">Access is managed based on user roles, ensuring information is only visible to authorised individuals.</p>
                                  </div>
                              </div>
                              <div className="privacy-feature-item">
                                  <div className="feature-icon">
                                      <img src="/assets/img/privacy/4.png" width="30" height="30" loading="lazy" alt="Privacy & Compliance" />
                                  </div>
                                  <div className="feature-details">
                                      <h3 className="feature-title">Privacy & Compliance</h3>
                                      <p className="feature-description">SEWB follows established privacy and data protection standards to ensure sensitive information is handled securely and responsibly.</p>
                                  </div>
                              </div>
                              <div className="privacy-feature-item">
                                  <div className="feature-icon">
                                      <img src="/assets/img/privacy/1.png" width="30" height="30" loading="lazy" alt="Activity Monitoring" />
                                  </div>
                                  <div className="feature-details">
                                      <h3 className="feature-title">Activity Monitoring & Data Protection</h3>
                                      <p className="feature-description">System activity is securely monitored through audit logs, while health information is managed within a protected digital environment.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      
      <section className="app-download-section two" id="app">
          <div className="container-fluid custom-container">
              <div className="row align-items-center">
                  <div className="col-lg-6">
                      <div className="app-content">
                          <span className="section-badge">SMART WELLBEING</span>
                          <h2 className="section-title">SEWB Makes Support, Simple And Accessible</h2>
                          <p className="section-description">Track wellness trends, monitor family wellness scores and stay informed through one connected platform designed for modern healthcare needs.</p>
                          <ul className="feature-list mt-3">
                              <li><strong>AI Intelligence Engine:</strong> Powered by advanced AI, we transform complex data into clear wellness insights and personalised health scores. Clients can track their progress, access professional guidance and make informed choices with greater confidence.</li>
                              <li><strong>A Unified Experience:</strong> By combining technology with professional care and expertise, SEWB creates smarter and more connected experiences, giving people a single, secure platform to look after their wellbeing anytime, anywhere.</li>
                              <li><strong>Empowered Choices:</strong> Move beyond just tracking numbers. Use our structured trends to understand your daily habits and make informed decisions that support your long-term wellness.</li>
                          </ul>
                          <p className="section-description fw-bold mt-4">Download the SEWB app today and experience a smarter way to manage your wellbeing!!</p>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="app-mockup">
                          <img src="/assets/img/home/2.webp" width="1185" height="850" loading="lazy" alt="SEWB App"
                              className="img-fluid" />
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
                                      What is SEWB?
                                  </button>
                              </h3>
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
