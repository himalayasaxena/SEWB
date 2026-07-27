import { AboutImpactScript } from '@/components/pages/AboutImpactScript'

export function AboutPage() {
  return (
    <>
      <section className="common-hero-section">
          <div className="custom-container container-fluid">
              <div className="row align-items-center about-main-row">
                  <div className="col-lg-7">
                      <div className="hero-content">
                          <div className="hero-badge-wrap">
                              <span className="hero-badge">About SEWB </span>
                          </div>
                          <h1 className="hero-title">Empowering Healthcare with <span className="highlight">Intelligent Wellness : <span style={{fontSize: '26px'}}> Why We built SEWB - And why it matters </span></span></h1>
                          <p className="hero-subtitle">
                              Better health starts with shifting from reactive to proactive care. By bringing together the full healthcare ecosystem, SEWB transforms real-time wearable data into meaningful guidance while consolidating all scattered health information of individuals into one complete health ecosystem. This provides individuals and families to make informed decisions regarding their health. 
                          </p>
                          <div className="hero-features-tags">
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Smarter Care</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Faster Access</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Expert Insights</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <div className="hero-image-wrap">
                          <img src="/assets/img/about/wellness-hero.png" width="1180" height="1100" loading="lazy" alt="Mobile2" className="hero-main-img about-main-image" style={{aspectRatio: 'auto', height: 'auto', objectFit: 'contain'}} />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section>
          <div className="about-journey-section">
              <div className="custom-container container-fluid">
                  <div className="row justify-content-center">
                      <div className="col-xl-10 col-lg-10 text-center">
                          <span className="section-badge">ABOUT SEWB</span>
                          <h2 className="section-title ">Designed to Simplify <span>Everyday Healthcare</span></h2>
                          <p className="section-subtitle">
                              SEWB is designed for individuals, and families. SEWB care and the SEWB Health Professionals app supports appointment bookings, health monitoring via wearable’s and access to specialised care and support services. 
                              Health professionals can manage their profile, showcase specialties, handle appointments and track earnings.
                          </p>
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-xl-8 col-lg-9">
                          <div className="about-journey-gallery">
                              <div className="about-journey-card about-journey-card-left">
                                  <img src="/assets/img/about/person.webp" width="200" height="400" loading="lazy" alt="Healthcare activity monitoring"
                                      className="img-fluid" />
                              </div>
                              <div className="about-journey-card about-journey-card-center">
                                  <img src="/assets/img/about/group3.webp" width="400" height="400" loading="lazy" alt="Digital health dashboard"
                                      className="img-fluid" />
                              </div>
                              <div className="about-journey-card about-journey-card-right">
                                  <img src="/assets/img/about/group2.webp" width="300" height="400" loading="lazy" alt="Family wellness tracking"
                                      className="img-fluid" />
                              </div>
                              
                          </div>
                      </div>
                  </div>
                  <div className="row about-purpose-row justify-content-center g-lg-5 g-3" id="mission-vision">
                      <div className="col-lg-6 col-md-6">
                          <div className="about-purpose-block">
                              <span className="section-badge">MISSION</span>
                              <p>
                                  Our mission is to deliver one unified dashboard for all your information,with AI powered insights that translate data into actionable health guidance. SEWB ensures coordination between you and your health care team
                              </p>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                          <div className="about-purpose-block">
                              <span className="section-badge">VISION</span>
                              <p>
                                  SEWB shifts the focus from reactive treatment to proactive prevention, empowering individuals and families  to take charge of their well-being. Through innovation, accessibility and data-driven insights, SEWB  is simple and accessible to improve health for individuals and their families. 
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="why-new-section section">
          <div className="container-fluid custom-container">
              <div className="row align-items-center justify-content-lg-between justify-content-center g-4">
                  <div className="col-lg-6 col-md-10">
                      <div className="why-new-content">
                          <span className="section-badge">CHOOSE SEWB</span>
                          <h2 className="section-title">
                              Own Your Health Journey with <span>Intelligent Insights</span>
                          </h2>
                          <p className="section-subtitle mx-0">
                              Track your daily wellbeing.
                              SEWB enhances the health journey of individuals by integrating data from wearables, health reports, and wellness tracking into a user-friendly system. With intelligent insights, you gain wellness trends based on your unique data. This platform combines AI-driven data with expert guidance so that people can confidently make lifestyle choices and easily connect with the right healthcare support. 
                          </p>
                         
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <div className="why-new-images text-center position-relative mt-ld-5 mt-lg-0">
                          <div className="position-absolute why-wrapper w-100 h-100 bg-primary rounded-5"></div>
                          <img src="/assets/img/why/1.png" className="img-fluid rounded-4 shadow-lg position-relative z-1 why-img" alt="Why SEWB" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="about-impact-section">
          <div className="about-impact-network">
              <img src="/assets/img/about/diamond.png" loading="lazy" alt="Diamond" className="img-fluid" />
          </div>
          <div className="custom-container container-fluid">
              <div className="row justify-content-center text-center">
                  <div className="col-xl-7 col-lg-10">
                      <span className="section-badge">BUILT AROUND REAL HEALTHCARE EXPERIENCES</span>
                      <h2 className="section-title ">Solutions For <span>Everyone</span></h2>
                      <p className="section-subtitle text-white">
                          SEWB is designed to provide seamless and practical solutions for both individuals and healthcare professionals. By integrating advanced technologies, SEWB ensures better health management, timely interventions and personalised care to empower individuals to take charge of their health and well-being.
                      </p>
                      <div className="about-impact-tabs" id="aboutImpactTabs">
                          <button className="about-impact-tab active" type="button" 
                              data-impact-title="Individuals"
                              data-impact-copy="SEWB makes everyday wellbeing simpler and more accessible. It enables individuals to gain meaningful health insights, receive guided wellness support and connect with health professionals whenever needed—all in one place. Users can securely upload their reports, unlock AI-powered wellness insights and explore daily wellness check-in. With a daily wellness score based on factors such as sleep, mood, exercise, BMI, lifestyle habits and long-term health conditions, individuals can get personalised diet options, exercise recommendations and product options tailored to their needs."
                              data-impact-name="User-Centric" data-impact-role="Wellness Support"
                              data-impact-stat-label="Integrated Data" data-impact-stat-value="AI Powered"
                              data-impact-bottom="Daily Wellness Check-in" data-impact-link="individuals">
                              Individuals
                          </button>
                          <button className="about-impact-tab" type="button" 
                              data-impact-title="Health Professionals"
                              data-impact-copy="The platform enables Health professionals to create and manage their profiles, showcase specialties and offer services to individuals with ease through SEWB. This platform also simplifies appointments, communication, earnings tracking and practice growth for healthcare professionals across clinical care, nursing and care support. With AI integration, this platform enables health professionals to support individuals choices in preventative treatment."
                              data-impact-name="Verified Experts" data-impact-role="Clinical Care"
                              data-impact-stat-label="Smart Practice" data-impact-stat-value="AI Ready"
                              data-impact-bottom="Practice Growth Tools" data-impact-link="health-professionals">
                              Health Professionals
                          </button>
                      </div>
                  </div>
              </div>
              <div className="about-impact-stage-wrap">
                  <div className="about-impact-stage">
                      <div className="about-impact-visual">
                          <div className="about-impact-base">
                              <img src="/assets/img/about/doctorbg.webp" width="700" height="500" loading="lazy"
                                  alt="Healthcare environment" className="img-fluid" />
                          </div>
                          <img src="/assets/img/about/doctormain.webp" width="500" height="600" loading="lazy" alt="Doctor holding the SEWB app"
                              className="img-fluid about-impact-doctor" />
                          <div className="about-impact-mini-card about-impact-mini-card-left">
                              <div className="about-impact-mini-avatar">
                                  <img src="/assets/img/about/doctorimg.png" loading="lazy" alt="Doctorimg"
                                      className="about-impact-check-img" />
                              </div>
                              <div className="about-impact-mini-text">
                                  <strong id="aboutImpactName">User-Centric</strong>
                                  <span id="aboutImpactRole">Wellness Support</span>
                              </div>
                              <div className="about-impact-mini-action">
                                  <img src="/assets/img/about/chat.png" loading="lazy" alt="Chat icon" />
                              </div>
                          </div>
                          <div className="about-impact-mini-card about-impact-mini-card-top">
                              <div className="about-impact-stat-copy">
                                  <span id="aboutImpactStatLabel">Integrated Data</span>
                                  <strong id="aboutImpactStatValue">AI Powered</strong>
                              </div>
                              <img src="/assets/img/about/barchat.png" loading="lazy" alt="Growth icon"
                                  className="about-impact-stat-icon" />
                          </div>
                          
                      </div>
                      <div className="about-impact-content-card">
                          <h3 id="aboutImpactTitle">Individuals</h3>
                          <p id="aboutImpactCopy">
                              SEWB makes everyday wellbeing simpler and more accessible. It enables individuals to gain meaningful health insights, receive guided wellness support and connect with health professionals whenever needed—all in one place. Users can securely upload their reports, unlock AI-powered wellness insights and explore daily wellness check-in. With a daily wellness score based on factors such as sleep, mood, exercise, BMI, lifestyle habits and long-term health conditions, individuals can get personalised diet options, exercise recommendations and product options tailored to their needs.
                          </p>
                          <a href="/individuals" id="aboutImpactLink" className="about-impact-link">
                              Learn More
                              <img src="/assets/img/icons/left-arrow.png" width="14" height="14" loading="lazy" alt="left arrow" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="about-founders-section">
          <div className="custom-container container-fluid">
              <div className=" row justify-content-center">
                  <div className="col-xl-9 col-lg-10 text-center">
                      <span className="section-badge">MEET THE FOUNDERS</span>
                      <h2 className="section-title ">The Innovators Behind <span>Connected Healthcare</span></h2>
                      <p className="section-subtitle">
                          The visionary leadership driving the transformation of healthcare from reactive care to proactive, intelligent wellness.
                      </p>
                  </div>
              </div>
              <div className="row g-3 g-lg-4 about-founders-grid justify-content-center">
                  <div className="col-sm-6 col-lg-4">
                      <div className="team-member-card">
                          <div className="team-image-container">
                              <img src="/assets/img/team/Abhishek.webp" width="530" height="530" loading="lazy" alt="Abhishek , founder of the SEWB"
                                  className="img-fluid team-member-photo" />
                          </div>
                          <div className="team-member-info">
                              <h3 className="team-member-name">Abhishek Sharma</h3>
                              <p className="team-member-role">Co-founder and Director</p>
                              <p className="team-member-bio mt-3 small text-muted text-start" style={{fontSize: '13px', lineHeight: 1.6}}>
                                  As Co-founder and Director of SEWB, Abhishek leads the development of an AI-powered digital healthcare ecosystem designed to transform reactive care into a proactive, preventive experience. He drives the platform’s vision by integrating AI and wearable data to deliver predictive health insights for individuals and providers.
                                  Abhishek brings over 20 years of expertise in enterprise architecture and system transformation, having previously served as a Lead Architect for the modernization of the Triple Zero (000) emergency dispatch ecosystem (ESCAD). His career is defined by building secure, mission-critical platforms across government and enterprise sectors where reliability is vital.
                              </p>
                              <div className="team-member-social">
                                  <a href="javascript:;" className="social-link"><i className="fab fa-linkedin"></i></a>
                                  <a href="javascript:;" className="social-link"><i className="fab fa-twitter"></i></a>
                                  <a href="javascript:;" className="social-link"><i className="fas fa-envelope"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 ">
                      <div className="team-member-card">
                          <div className="team-image-container">
                              <img src="/assets/img/team/Sachin.webp" width="530" height="530" loading="lazy" alt="Sachin , Co-founder of the SEWB"
                                  className="img-fluid team-member-photo" />
                          </div>
                          <div className="team-member-info">
                              <h3 className="team-member-name">Sachin Rabade</h3>
                              <p className="team-member-role">Co-founder and Director</p>
                              <p className="team-member-bio mt-3 small text-muted text-start" style={{fontSize: '13px', lineHeight: 1.6}}>
                                  As Co-founder and Director of SEWB, Sachin drives the company’s strategic direction and long-term growth. He is responsible for building the business on strong ethical foundations, managing the high-level planning and partnerships required to scale the platform into a leading, user-centric digital health solution.
                                  Sachin is currently shaping SEWB’s vision as it expands from India into global markets. His leadership focuses on balancing advanced AI technology with real-world impact, ensuring that as the ecosystem grows, it remains dedicated to delivering sustainable value and a meaningful experience for users and stakeholders worldwide.
                              </p>
                              <div className="team-member-social">
                                  <a href="javascript:;" className="social-link"><i className="fab fa-linkedin"></i></a>
                                  <a href="javascript:;" className="social-link"><i className="fab fa-twitter"></i></a>
                                  <a href="javascript:;" className="social-link"><i className="fas fa-envelope"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 ">
                      <div className="team-member-card">
                          <div className="team-image-container">
                              <img src="/assets/img/team/Marianne.webp" width="500" height="750" loading="lazy" alt="Marianne , Co-founder of the SEWB"
                                  className="img-fluid team-member-photo" />
                          </div>
                          <div className="team-member-info">
                              <h3 className="team-member-name">Marianne Lombaard</h3>
                              <p className="team-member-role">Chief Executive Officer</p>
                              <p className="team-member-bio mt-3 small text-muted text-start" style={{fontSize: '13px', lineHeight: 1.6}}>
                                  Marianne is a healthcare leader and occupational therapist with deep expertise in clinical operations and in-home care delivery. Over more than eight years as a Director for a major care provider, she honed her ability to manage complex healthcare services and drive measurable improvements in patient outcomes through disciplined, hands-on operational leadership.
                                  As CEO of SEWB, Marianne is guided by a clear mission: bridging the existing gap between health professionals and the communities they serve. Her clinical roots keep the organization grounded in what matters most—building technology that responds to real-world needs rather than abstract ideals. Under her leadership, SEWB is growing an ecosystem designed to deliver proactive, personalized support for families navigating care and for the healthcare workers who stand alongside them.
                              </p>
                              <div className="team-member-social">
                                  <a href="javascript:;" className="social-link"><i className="fab fa-linkedin"></i></a>
                                  <a href="javascript:;" className="social-link"><i className="fab fa-twitter"></i></a>
                                  <a href="javascript:;" className="social-link"><i className="fas fa-envelope"></i></a>
                              </div>
                          </div>
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
                                      SEWB is an AI-powered digital health platform that brings your health data, medical reports, doctors, labs and pharmacies together in one place. Instead of juggling multiple apps and appointments, you get a single platform that helps you understand your health and act on it.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                      Who is SEWB built for?
                                  </button>
                              </h3>
                              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      SEWB is built for individuals - who want to take control of their health, families managing care for multiple members and doctors and healthcare professionals - looking to streamline patient management.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                      Is my health data safe on SEWB?
                                  </button>
                              </h3>
                              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Yes. SEWB uses enterprise-grade encryption, multi-factor authentication, and is HIPAA and ISO 27001 compliant. You always control who sees your data.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                      Can I manage my family's health on SEWB?
                                  </button>
                              </h3>
                              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Yes. SEWB supports multi-member family profiles, so you can track, manage, and share health data for your entire family from a single account.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                                      How do SEWB Health Professionals work?
                                  </button>
                              </h3>
                              <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Healthcare Professionals can create verified profiles, manage appointments, conduct online consultations, access patient-shared reports (with their consent), use AI integration to support individuals choices in preventative treatment.
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <AboutImpactScript />
    </>
  )
}
