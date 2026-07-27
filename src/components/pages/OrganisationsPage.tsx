export function OrganisationsPage() {
  return (
    <>
      <section className="common-hero-section">
          <div className="container-fluid custom-container">
              <div className="row align-items-center g-4">
                  <div className="col-lg-7">
                      <div className="hero-content">
                          <div className="hero-badge-wrap">
                              <span className="hero-badge">AI-Powered Healthcare Solutions</span>
                          </div>
                          <h1 className="hero-title">One Connected Platform for Labs, Pharmacies and <span className="highlight">Healthcare Organisations.</span></h1>
                          <p className="hero-subtitle">
                              SEWB integrates diagnostic laboratories, pharmacies and healthcare organisations into a single connected ecosystem. Streamline your operations, coordinate with Health Professionals and individuals more effectively to deliver services with greater speed, accuracy and confidence.
                          </p>
                          <div className="hero-features-tags">
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> AI-powered automation</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Real-time fetched</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Smart analytics & insights</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <div className="hero-image-wrap" style={{padding: '30px'}}>
                          <img src="/assets/img/lab/lab_banner.avif" width="550" height="420" loading="lazy" alt="Lab Mockup" className="hero-main-img img-fluid" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="lab-solutions">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center text-center">
                  <div className="col-lg-112 col-xl-6">
                      <div className="lab-badge-wrapper d-flex justify-content-center">
                          <span className="section-badge">Laboratory Solutions</span>
                      </div>
                      <h2 className="section-title">Smart Lab Management for Modern Diagnostic Organisations</h2>
                      <p className="section-subtitle mb-0">
                          SEWB transforms your laboratory operations with AI-driven workflows that reduce manual handling, improve accuracy and keep individuals informed from test requests to report delivery.
                      </p>
                  </div>
              </div>
              <div className="row mt-md-4 mt-2 justify-content-around lab-process-row gx-xl-2 gy-4">
                  <div className="col-lg-4 col-xl-3 col-md-6">
                      <div className="lab-process-card">
                          <div className="lab-step-icon">
                              <img src="/assets/img/lab/l1.png" width="36" height="36" loading="lazy"  alt="flask" className="img-fluid" />
                          </div>
                          <h3>Receive Test Requests</h3>
                          <p>Directly receive and organise structured test requests from Health Professionals and individuals. No manual data entry, no missed bookings.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-xl-3 col-md-6">
                      <div className="lab-process-card">
                          <div className="lab-step-icon">
                              <img src="/assets/img/lab/l3.png" width="36" height="36" loading="lazy"  alt="upload" className="img-fluid" />
                          </div>
                          <h3>Upload Reports Digitally</h3>
                          <p>Upload completed test reports securely with automated validation checks. Reports can be accessed by the Healthcare Professional without delay (with the consent of the client) and no version is lost.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-xl-3 col-md-6">
                      <div className="lab-process-card">
                          <div className="lab-step-icon">
                              <img src="/assets/img/lab/l2.png" width="36" height="36" loading="lazy"  alt="notifications" className="img-fluid" />
                          </div>
                          <h3>Automated Notifications</h3>
                          <p>SEWB automatically notifies individuals when results are available via SMS and in-app alerts. No phone calls, no manual follow-up.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="pharmacy-solutions">
          <div className="container-fluid custom-container pharmacy-solutions-container">
              <div className="row justify-content-center text-center mb-4">
                  <div className="col-lg-9">
                      <div className="lab-badge-wrapper d-flex justify-content-center">
                          <div className="section-badge">PHARMACY SOLUTIONS</div>
                      </div>
                      <h2 className="section-title">Modern Pharmacy Operations</h2>
                      <p className="section-subtitle">
                          Handle digital prescriptions, coordinate deliveries and keep individuals informed through SEWB’s integrated platform.
                      </p>
                  </div>
              </div>
              <div className="row align-items-center gy-5">
                  <div className="col-lg-5">
                      <div className="pharmacy-image-wrapper">
                          <img src="/assets/img/lab/doctor.webp" width="500" height="500" loading="lazy"  alt="Pharmacy Operations" className="img-fluid" />
                      </div>
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                      <div className="pharmacy-features ps-lg-5 ">
                          <div className="pharmacy-feature-item">
                              <div className="feature-icon">
                                  <img src="/assets/img/lab/s1.png" width="36" height="36" loading="lazy"  alt="Pill" className="img-fluid" />
                              </div>
                              <div className="feature-content">
                                  <h3 style={{textTransform: 'capitalize'}}>Receive e-Prescriptions</h3>
                                  <p>Receive e-prescriptions directly from verified Health Professionals through SEWB, reducing back-and-forth.</p>
                              </div>
                          </div>
                          <div className="pharmacy-feature-item">
                              <div className="feature-icon">
                                  <img src="/assets/img/lab/s2.png" width="36" height="36" loading="lazy"  alt="Delivery" />
                              </div>
                              <div className="feature-content">
                                  <h3 style={{textTransform: 'capitalize'}}>Medicine Delivery Management</h3>
                                  <p>Coordinate delivery routes, assign orders to your delivery team. Individuals stay tracked without calling.</p>
                              </div>
                          </div>
                          <div className="pharmacy-feature-item">
                              <div className="feature-icon">
                                  <img src="/assets/img/lab/s3.png" width="36" height="36" loading="lazy"  alt="Tracking" />
                              </div>
                              <div className="feature-content">
                                  <h3 style={{textTransform: 'capitalize'}}>Prescription Tracking</h3>
                                  <p>Monitor prescription status, manage refill schedules and track individual adherence over time.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="process-section">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center text-center mb-3">
                  <div className="col-lg-8">
                      <div className="lab-badge-wrapper d-flex justify-content-center">
                          <div className="section-badge">Simple Process</div>
                      </div>
                      <h2 className="section-title">How It Works For Organisations</h2>
                      <p className="section-subtitle">
                          A straightforward onboarding process designed to get your organisation connected to the SEWB ecosystem quickly and with confidence.
                      </p>
                  </div>
              </div>
              <div className="process-flow-wrapper">
                  <div className="process-line"></div>
                  <div className="row">
                      <div className="col-lg-4 col-md-6 mb-5">
                          <div className="process-step">
                              <div className="process-icon-box">
                                  <img src="/assets/img/lab/p1.png" width="90" height="90" loading="lazy"  alt="Register" className="img-fluid" />
                              </div>
                              <h3>Register Your Organisation</h3>
                              <p>Create your verified profile. Add certifications, service areas, specialties and team details. SEWB validates credentials.</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-5">
                          <div className="process-step">
                              <div className="process-icon-box">
                                  <img src="/assets/img/lab/p2.png" width="90" height="90" loading="lazy"  alt="List Tests" className="img-fluid" />
                              </div>
                              <h3>List Your Services and Tests</h3>
                              <p>Build your service catalogue with turnaround times and pricing. Your listings match what individuals search for.</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-5">
                          <div className="process-step">
                              <div className="process-icon-box">
                                  <img src="/assets/img/lab/p3.png" width="90" height="90" loading="lazy"  alt="Bookings" className="img-fluid" />
                              </div>
                              <h3>Receive Bookings and Start Delivering</h3>
                              <p>Once live, bookings come directly. SEWB’s scheduling helps manage capacity and prevent conflicts effectively.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="secure-section">
          <div className="container-fluid custom-container">
              <div className="secure-block">
                  <div className="row justify-content-center text-center position-relative z-2">
                      <div className="col-lg-10">
                          <div className="lab-badge-wrapper d-flex justify-content-center">
                              <span className="section-badge">SECURE & INSTANT</span>
                          </div>
                          <h2 className="section-title">Reports & Digital Delivery</h2>
                          <p className="section-subtitle">Secure, Verified Report Delivery from Upload to Individual. Every report uploaded through SEWB goes through a structured, validated delivery process while ensuring accuracy, security and timely access.</p>
                      </div>
                  </div>
                  <div className="row align-items-center">
                      <div className="col-lg-5 col-xl-4 offset-lg-1">
                          <div className="secure-features-list">
                              <div className="secure-feature-item">
                                  <div className="secure-feature-icon gradient-1">
                                      <img src="/assets/img/lab/i1.png" width="36" height="36" loading="lazy"  alt="I1" />
                                  </div>
                                  <div className="secure-feature-text">
                                      <h3>Upload the Individual’s Report</h3>
                                      <p>Upload completed reports directly using secure drag-and-drop or file selection. Reports are linked automatically.</p>
                                  </div>
                              </div>
                              <div className="secure-feature-item">
                                  <div className="secure-feature-icon gradient-1">
                                      <div className="ai-icon-box">
                                          <img src="/assets/img/lab/i2.png" width="36" height="36" loading="lazy"  alt="I2" />
                                      </div>
                                  </div>
                                  <div className="secure-feature-text">
                                      <h3>AI Quality Check</h3>
                                      <p>SEWB’s AI Engine validates each report for completeness and accuracy before it is released, reducing manual review.
                                      </p>
                                  </div>
                              </div>
                              <div className="secure-feature-item">
                                  <div className="secure-feature-icon gradient-1">
                                      <img src="/assets/img/lab/i3.png" width="36" height="36" loading="lazy"  alt="I3" />
                                  </div>
                                  <div className="secure-feature-text">
                                      <h3>Secure Notification to the Individual</h3>
                                      <p>Once validated, SEWB immediately notifies the individual via SMS and in-app alert with a secure access link.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-5 offset-lg-1">
                          <div className="secure-mockup-wrapper">
                              <div className="main-doctor-container">
                                  <img src="/assets/img/lab/secure1.png" width="1000" height="900" loading="lazy"  alt="Doctor" className="img-fluid doctor-img"
                                      style={{borderRadius: '40px'}} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="feature-section">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center text-center">
                  <div className="col-lg-12">
                      <div className="lab-badge-wrapper d-flex justify-content-center">
                          <div className="section-badge">POWERFUL FEATURES</div>
                      </div>
                      <h2 className="section-title">Everything You Need for Better Health Service Delivery</h2>
                      <p className="section-subtitle mb-0">
                          A complete, AI-coordinated workflow — from the moment an individual places a booking to the moment their report is in their hands.
                      </p>
                  </div>
              </div>
              <div className="row feature-grid-wrapper pt-4">
                  <div className="feature-line"></div>
                  <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <div className="feature-step-card">
                          <div className="step-icon-wrapper">
                              <div className="step-icon gradient-2">
                                  <img src="/assets/img/lab/f1.png" width="46" height="46" loading="lazy"  alt="Order" />
                                  <div className="check-badge"><img src="/assets/img/lab/tick.svg" loading="lazy"  alt="check" className="img-fluid" />
                                  </div>
                              </div>
                          </div>
                          <h3>Order Placed</h3>
                          <p>An individual books a test or places a medicine order through the SEWB App. Payment is confirmed, preparation begins, and your team is notified instantly.</p>
                          <div className="step-time">
                              <img src="/assets/img/lab/clock.png" width="24" height="24" loading="lazy"  alt="clock" className="img-fluid" /> 2:30 PM
                          </div>
                          <div className="status-badge-custom completed">Completed</div>
                          <hr className="step-divider" />
                          <ul className="step-details">
                              <li>Order #ORD-2847</li>
                              <li>Payment confirmed</li>
                              <li>Sample kit prepared</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <div className="feature-step-card">
                          <div className="step-icon-wrapper">
                              <div className="step-icon gradient-2">
                                  <img src="/assets/img/lab/f1.png" width="46" height="46" loading="lazy"  alt="Dispatch" />
                                  <span className="dot-badge"></span>
                              </div>
                          </div>
                          <h3>Dispatch & Collection</h3>
                          <p>For lab tests, an agent is assigned and routed efficiently. For pharmacy orders, delivery is coordinated and tracked.</p>
                          <div className="step-time">
                              <img src="/assets/img/lab/clock.png" width="24" height="24" loading="lazy"  alt="clock" className="img-fluid" /> 4:15 PM
                          </div>
                          <div className="status-badge-custom progress">In Progress</div>
                          <hr className="step-divider" />
                          <ul className="step-details">
                              <li>Agent assigned</li>
                              <li>Route optimized by AI</li>
                              <li>ETA: 30 mins</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <div className="feature-step-card">
                          <div className="step-icon-wrapper">
                              <div className="step-icon gradient-2">
                                  <img src="/assets/img/lab/f1.png" width="46" height="46" loading="lazy"  alt="Lab" />
                              </div>
                          </div>
                          <h3>Lab Processing</h3>
                          <p>Sample received, assigned to the relevant technician, and processed within the agreed turnaround time.</p>
                          <div className="step-time">
                              <img src="/assets/img/lab/clock.png"  width="24" height="24" loading="lazy"  alt="clock" className="img-fluid" /> Scheduled
                          </div>
                          <div className="status-badge-custom pending">Pending</div>
                          <hr className="step-divider" />
                          <ul className="step-details">
                              <li>Auto-assigned to technician</li>
                              <li>Priority: Normal</li>
                              <li>TAT: 24 hours</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <div className="feature-step-card">
                          <div className="step-icon-wrapper">
                              <div className="step-icon gradient-2">
                                  <img src="/assets/img/lab/p4.png" width="46" height="46" loading="lazy"  alt="Delivery" />
                              </div>
                          </div>
                          <h3>Report Delivery</h3>
                          <p>Once ready and validated, report is delivered digitally to the individual’s SEWB profile.</p>
                          <div className="step-time">
                              <img src="/assets/img/lab/clock.png" width="24" height="24" loading="lazy"  alt="clock" className="img-fluid" /> Scheduled
                          </div>
                          <div className="status-badge-custom pending">Pending</div>
                          <hr className="step-divider" />
                          <ul className="step-details">
                              <li>Auto-delivery enabled</li>
                              <li>SMS + Email notification</li>
                              <li>Blockchain verified</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="why-choose-section section pt-md-5">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center text-center mb-5">
                  <div className="col-lg-10">
                      <div className="lab-badge-wrapper d-flex justify-content-center">
                          <span className="section-badge">WHY ORGANISATIONS & PHARMACIES CHOOSE SEWB</span>
                      </div>
                      <h2 className="section-title">Built for Speed. Designed for Accuracy. Trusted for Growth.</h2>
                  </div>
              </div>
              <div className="row g-4 justify-content-center">
                  <div className="col-lg-4 col-md-6">
                      <div className="lab-process-card h-100">
                          <div className="lab-step-icon">
                              <img src="/assets/img/lab/l1.png" width="36" height="36" loading="lazy" alt="icon" className="img-fluid" />
                          </div>
                          <h3>All-in-One Management</h3>
                          <p>Labs, pharmacies, and care organisations manage bookings, reports, deliveries and communications through a single connected platform. No separate tools, no manual bridging between systems.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="lab-process-card h-100">
                          <div className="lab-step-icon">
                              <img src="/assets/img/lab/l3.png" width="36" height="36" loading="lazy" alt="icon" className="img-fluid" />
                          </div>
                          <h3>Faster, More Reliable Workflows</h3>
                          <p>AI-assisted intake, scheduling, validation and delivery reduce the time between a request being placed and a result being delivered to improve throughput without increasing staffing overhead.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="lab-process-card h-100">
                          <div className="lab-step-icon">
                              <img src="/assets/img/lab/l2.png" width="36" height="36" loading="lazy" alt="icon" className="img-fluid" />
                          </div>
                          <h3>Real-Time Insights and Oversight</h3>
                          <p>Track order status, report turnaround times, delivery progress, and individual outcomes from your organisation dashboard. The data you need to manage performance is always visible and always current.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="lab-process-card h-100">
                          <div className="lab-step-icon">
                              <img src="/assets/img/lab/s2.png" width="36" height="36" loading="lazy" alt="icon" className="img-fluid" />
                          </div>
                          <h3>Smart Tracking and Delivery</h3>
                          <p>Every order, report and delivery is tracked end-to-end through SEWB. Individuals stay informed automatically and your team has a clear, real-time view of what is in progress, what is pending and what is complete.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="lab-process-card h-100">
                          <div className="lab-step-icon">
                              <img src="/assets/img/lab/i1.png" width="36" height="36" loading="lazy" alt="icon" className="img-fluid" />
                          </div>
                          <h3>Secure and Compliant by Design</h3>
                          <p>SEWB’s HIPAA-ready infrastructure, advanced encryption and role-based access controls ensure that individual data handled by your organisation meets the highest standards of privacy and security without additional compliance overhead on your end.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      <section className="app-download-section two" id="app">
          <div className="container-fluid custom-container">
              <div className="row align-items-center">
                  <div className="col-lg-6">
                      <div className="app-content pe-lg-5">
                          <span className="section-badge">SEWB ENTERPRISE — COMMAND CENTRE</span>
                          <h2 className="section-title">Your Command Centre for Complete Organisation Management</h2>
                          <p className="section-description">One AI-powered dashboard that centralises individual data, bookings, service requests and delivery workflows to give your team effortless oversight across everything your organisation handles.</p>
                          <p className="section-description mt-4">Whether you’re managing a single lab location or coordinating services across multiple sites, SEWB’s enterprise dashboard gives you a structured, real-time view of your operation. Monitor bookings as they come in, track report delivery status, manage your team’s workload, and review performance data — all from one place.</p>
                          <p className="section-description fw-bold mt-2">SEWB is built to grow with your organisation. As your volume increases, your services expand or your team grows, the platform scales alongside you without requiring new systems or separate integrations.</p>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="app-mockup">
                          <img src="/assets/img/home/2.webp" width="1185" height="850" loading="lazy" alt="Command Centre Dashboard" className="img-fluid" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="faq-section">
          <div className="container-fluid custom-container">
              <div className="row justify-content-center faq-row">
                  <div className="col-12">
                      <div className="faq-block">
                          <h2 className="faq-title">FAQs</h2>
                          <div className="accordion faq-accordion" id="faqAccordion">
                              <div className="accordion-item">
                                  <h3 className="accordion-header">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#aboutFaq1" aria-expanded="true" aria-controls="aboutFaq1">
                                          Q1: Can SEWB handle both lab and pharmacy operations?
                                      </button>
                                  </h3>
                                  <div id="aboutFaq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes. SEWB is built to support both diagnostic laboratories and pharmacy providers within the same connected ecosystem. Labs can manage test requests, sample collection scheduling, report uploads, and individual notifications. Pharmacies can manage digital prescription intake, delivery coordination, order tracking, and individual adherence. Both operate through the same platform infrastructure, making it straightforward if your organisation offers more than one type of service.
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h3 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#aboutFaq2" aria-expanded="false" aria-controls="aboutFaq2">
                                          Q2: Does the platform support real-time tracking?
                                      </button>
                                  </h3>
                                  <div id="aboutFaq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes. SEWB provides real-time tracking across the full service workflow — from the moment a booking is placed through to report delivery or medicine receipt. Your team has a live view of what is in progress, what is pending, and what has been completed. Individuals are automatically notified at each stage so your team doesn’t need to manage individual communications manually.
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h3 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#aboutFaq3" aria-expanded="false" aria-controls="aboutFaq3">
                                          Q3: Is SEWB suitable for smaller organisations, or is it built for large operations only?
                                      </button>
                                  </h3>
                                  <div id="aboutFaq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          SEWB is designed to work for organisations of all sizes. Independent labs and single-location pharmacies benefit from the same platform capabilities as larger, multi-site providers. The onboarding process is straightforward, and you only pay for what your organisation actually uses. As your operations grow, SEWB scales with you so, there’s no need to switch platforms or rebuild workflows.
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h3 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#aboutFaq4" aria-expanded="false" aria-controls="aboutFaq4">
                                          Q4: What support is available after we join the platform?
                                      </button>
                                  </h3>
                                  <div id="aboutFaq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          SEWB provides onboarding support to help your organisation get set up, your services listed, and your team familiar with the platform quickly. Ongoing support is available through the SEWB support team at support@sewb. We are committed to making sure every organisation on the platform has what they need to serve individuals well and operate confidently within the SEWB ecosystem.
                                      </div>
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
