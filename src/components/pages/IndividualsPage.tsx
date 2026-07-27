export function IndividualsPage() {
  return (
    <>
      <section className="common-hero-section">
          <div className="custom-container container-fluid">
              <div className="row align-items-center">
                  <div className="col-lg-7">
                      <div className="hero-content">
                          <div className="hero-badge-wrap">
                              <span className="hero-badge">Your Wellbeing, Your Way</span>
                          </div>
                          <h1 className="hero-title">One App for Your Health and Your Family’s Wellbeing.</h1>
                          <p className="hero-subtitle">Managing your wellbeing shouldn’t mean switching between multiple apps, paper records, and disconnected healthcare services. The SEWB App brings your health records, wellness insights and professional support into one connected experience - helping you and your family stay informed, proactive and supported when it matters most.</p>
                          <div className="hero-features-tags">
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> AI-Powered Wellbeing</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Family Health Profiles</span>
                              <span className="feature-tag"><i className="fas fa-check-circle"></i> Connected Care</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <div className="hero-image-wrap">
                          <img src="/assets/img/patients/banner.webp" width="530" height="400" loading="lazy" alt="Patients Banner" className="hero-main-img" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="health-tools-section section">
          <div className="custom-container container-fluid">
              <div className="row justify-content-center text-center mb-3 mb-lg-4">
                  <div className="col-lg-12">
                      <span className="section-badge">My Health Tools</span>
                      <h2 className="section-title">Powerful Tools to Take Charge of Your Wellbeing</h2>
                      <p className="section-subtitle mb-0">Everything you need to manage your wellbeing and support your family’s care - securely organised in one place.</p>
                  </div>
              </div>
              <div className="row g-4 pt-4 justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="tool-card text-start">
                          <div className="tool-icon-box">
                              <img src="/assets/img/icons/chat.png" width="36" height="36" loading="lazy"  alt="chat" />
                          </div>
                          <h3 className="tool-title">Connect with a Health Professional</h3>
                          <p className="tool-desc">Book and connect with verified Health Professionals instantly through secure video, audio or chat consultations - all within the SEWB app.</p>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="tool-card text-start">
                          <div className="tool-icon-box">
                              <img src="/assets/img/icons/upload.png" width="36" height="36" loading="lazy"  alt="upload" />
                          </div>
                          <h3 className="tool-title">Upload and Store Health Reports</h3>
                          <p className="tool-desc">Keep your medical reports, test results, prescriptions and health documents securely stored and easy to access whenever you need them.</p>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="tool-card text-start">
                          <div className="tool-icon-box">
                              <img src="/assets/img/icons/alarm.png" width="36" height="36" loading="lazy"  alt="alarm" />
                          </div>
                          <h3 className="tool-title">Track Your Health Journey</h3>
                          <p className="tool-desc">SEWB keeps your consultations, health records, wearable insights, and wellness trends connected over time — giving you a clearer picture of your wellbeing in one place.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="process-section section py-0">
          <div className="custom-container container-fluid">
              <div className="process-content_box">
                  <div className="row justify-content-center text-center">
                      <div className="col-lg-10">
                          <span className="section-badge">Your Wellbeing Journey</span>
                          <h2 className="section-title">From Daily Check-Ins to Connected Care</h2>
                          <p className="section-subtitle">SEWB supports your wellbeing journey with a simple, connected experience that helps you monitor your health, access professional support, and stay engaged with your care over time.</p>
                      </div>
                  </div>
                  <div className="process-cards-wrapper px-3 justify-content-center" style={{gap: '20px'}}>
                      <div className="process-card">
                          <img src="/assets/img/patients/process1.webp" width="261" height="261" loading="lazy"  alt="Well-Being Symptoms" className="process-img" />
                          <div className="process-title-box">
                              <h3>WELL-BEING SYMPTOMS</h3>
                          </div>
                      </div>
                      <div className="connector-dot"></div>
                      <div className="process-card">
                          <img src="/assets/img/patients/process2.webp" width="261" height="261" loading="lazy"  alt="AI Health Insights" className="process-img" />
                          <div className="process-title-box">
                              <h3>AI HEALTH INSIGHTS</h3>
                          </div>
                      </div>
                      <div className="connector-dot"></div>
                      <div className="process-card">
                          <img src="/assets/img/patients/process3.webp" width="261" height="261" loading="lazy"  alt="Health Professional Consultation" className="process-img" />
                          <div className="process-title-box">
                              <h3>HEALTH PROFESSIONAL<br />CONSULTATION</h3>
                          </div>
                      </div>
                      <div className="connector-dot"></div>
                      <div className="process-card">
                          <img src="/assets/img/patients/process4.webp" width="261" height="261" loading="lazy"  alt="Lab Report Upload" className="process-img" />
                          <div className="process-title-box">
                              <h3>LAB REPORT UPLOAD</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="benefit-section section">
          <div className="custom-container container-fluid">
              <div className="row justify-content-center text-center mb-5">
                  <div className="col-lg-12">
                      <span className="section-badge">Smart Individual Benefits</span>
                      <h2 className="section-title">Healthcare That Works Around You</h2>
                  </div>
                  <div className="col-lg-10">
                         <p className="section-subtitle">Practical tools and connected support designed to make managing your wellbeing and your family's care simpler, more accessible, and easier to navigate.</p>
                  </div>
              </div>
              <div className="row align-items-center g-3">
                  <div className="col-lg-5">
                      <div className="benefit-img-wrapper">
                          <img src="/assets/img/patients/benefit.webp" width="700" height="500" loading="lazy"  alt="Patient Benefit" className="img-fluid" />
                          <div className="floating-info-card">
                              <div className="icon-box">
                                  <img src="/assets/img/icons/check.png" loading="lazy"  alt="check" />
                              </div>
                              <div className="info-text">
                                  <h3 className="card-title m-0 text-capitalize">Easy And Quick</h3>
                                  <p className="m-0">Care Access</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="row g-4 ps-lg-4">
                          <div className="col-sm-6">
                              <div className="benefit-item h-100">
                                  <div className="benefit-icon-box">
                                      <img src="/assets/img/icons/peoples.png" width="34" height="24" loading="lazy"  alt="Care Access" />
                                  </div>
                                  <div className="benefit-content">
                                      <h3 className="card-title text-primary text-capitalize">Fast And Convenient Care Access</h3>
                                      <p className="card-desc">Book wellness check-ins, follow up appointments and consultations with verified Health Professionals quickly and easily - without long wait times or disconnected systems.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="benefit-item h-100">
                                  <div className="benefit-icon-box">
                                      <img src="/assets/img/icons/star-shine.png" width="34" height="24" loading="lazy"  alt="Lifestyle Support" />
                                  </div>
                                  <div className="benefit-content">
                                      <h3 className="card-title text-primary text-capitalize">Support That Fits Your Lifestyle</h3>
                                      <p className="card-desc">Manage your family’s wellbeing from anywhere with connected health records, personalised wellness insights, intelligent healthcare professional matching, and access to support services.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="benefit-item h-100">
                                  <div className="benefit-icon-box">
                                      <img src="/assets/img/icons/medical.png" width="34" height="24" loading="lazy"  alt="Informed Care" />
                                  </div>
                                  <div className="benefit-content">
                                      <h3 className="card-title text-primary text-capitalize">Insights That Support More Informed Care</h3>
                                      <p className="card-desc">SEWB transforms your daily check-ins, wearable information, and health history into easy-to-understand wellness insights — helping you make more informed care decisions.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="benefit-item h-100">
                                  <div className="benefit-icon-box">
                                      <img src="/assets/img/icons/license.png" width="34" height="24" loading="lazy"  alt="Secure Records" />
                                  </div>
                                  <div className="benefit-content">
                                      <h3 className="card-title text-primary text-capitalize">All Your Health Records, Securely Connected</h3>
                                      <p className="card-desc">Keep your health records, prescriptions, test results, and consultation history organised in one secure digital profile. You stay in control of your information.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="simple-process-section section">
          <div className="custom-container container-fluid">
              <div className="row justify-content-center text-center">
                  <div className="col-lg-10">
                      <span className="section-badge">How It Works</span>
                      <h2 className="section-title">Smart Wellbeing Support in Three Simple Steps</h2>
                      <p className="section-subtitle">From finding the right Health Professional to managing your follow-up care, SEWB keeps your wellbeing journey simple, connected, and easy to navigate.</p>
                  </div>
              </div>
              <div className="process-step-wrapper justify-content-center" style={{gap: '50px'}}>
                  <div className="process-divider"></div>
                  <div className="process-step-item">
                      <div className="process-circle">
                          <div className="step-number">
                              <img src="/assets/img/icons/n1.png" loading="lazy"  alt="1" className="one" />
                          </div>
                          <div className="icon">
                              <img src="/assets/img/icons/search2.png" width="110" height="110" loading="lazy"  alt="search" />
                          </div>
                      </div>
                      <h3 className="process-title">Step 1 — Find the Right Professional</h3>
                      <p className="process-desc">SEWB helps match you with Health Professionals based on your health needs, speciality, location, availability and preferences.</p>
                  </div>
                  <div className="process-step-item">
                      <div className="process-circle">
                          <div className="step-number">
                              <img src="/assets/img/icons/n2.png" width="110" height="110" loading="lazy"  alt="2" />
                          </div>
                          <div className="icon">
                              <img src="/assets/img/icons/video.png" loading="lazy"  alt="video" />
                          </div>
                      </div>
                      <h3 className="process-title">Step 2 — Consult Online</h3>
                      <p className="process-desc">Connect through secure , audio, or chat consultations and securely share your health records for a more informed experience.</p>
                  </div>
                  <div className="process-step-item">
                      <div className="process-circle">
                          <div className="step-number">
                              <img src="/assets/img/icons/n3.png" width="110" height="110" loading="lazy"  alt="3" />
                          </div>
                          <div className="icon">
                              <img src="/assets/img/icons/scanner.png" loading="lazy"  alt="scanner" />
                          </div>
                      </div>
                      <h3 className="process-title">Step 3 — Care Plan</h3>
                      <p className="process-desc">Access digital prescriptions, personalised wellness guidance, and follow-up recommendations within the SEWB App.</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="ai-search-section section">
          <div className="custom-container container-fluid">
              <div className="row justify-content-center text-center">
                  <div className="col-lg-10">
                      <span className="section-badge">Verified Profiles</span>
                      <h2 className="section-title">Intelligent Health Professional Matching</h2>
                      <p className="section-subtitle">Every Health Professional on SEWB is verified, rated and matched to your individual health needs - helping you find the right support faster.</p>
                  </div>
              </div>
              <div className="search-bar-wrapper">
                  <div className="search-input-group">
                      <img src="/assets/img/icons/search3.png" width="32" height="32" loading="lazy"  alt="search" />
                      <input type="text" placeholder="Describe your symptoms or search by specialty..." />
                  </div>
                  <div className="search-input-group" style={{flex: '0 0 280px'}}>
                      <img src="/assets/img/icons/location2.png" width="25" height="25" loading="lazy"  alt="location" />
                      <input type="text" placeholder="Location" />
                  </div>
                  <button className="btn-search btn-gradient">Search</button>
              </div>
              <ul className="nav nav-pills filter-pills " id="doctorTabs">
                  <li className="nav-item">
                      <button className="nav-link active filter-pill" data-bs-toggle="pill" data-bs-target="#all">All</button>
                  </li>
                  <li className="nav-item">
                      <button className="nav-link filter-pill" data-bs-toggle="pill"
                          data-bs-target="#cardio">Cardiologist</button>
                  </li>
                  <li className="nav-item">
                      <button className="nav-link filter-pill" data-bs-toggle="pill"
                          data-bs-target="#derma">Dermatologist</button>
                  </li>
                  <li className="nav-item">
                      <button className="nav-link filter-pill" data-bs-toggle="pill" data-bs-target="#pedia">Pediatrician</button>
                  </li>
                  <li className="nav-item">
                      <button className="nav-link filter-pill" data-bs-toggle="pill" data-bs-target="#neuro">Neurologist</button>
                  </li>
              </ul>
              <div className="tab-content">
                  <div className="tab-pane fade show active" id="all">
                      <div className="row g-4">
                          <div className="col-lg-4 col-sm-6">
                              <div className="doctor-card">
                                  <div className="doc-info-main">
                                      <img src="/assets/img/patients/doctor1.webp" width="140" height="130" loading="lazy"  alt="Doctor" className="doc-img" />
                                      <div className="doc-details">
                                          <h3 className="card-title">Dr. Sarah Johnson</h3>
                                          <p className="card-desc">Cardiologist</p>
                                          <div className="rating-box">
                                              <img src="/assets/img/icons/rating.png" width="24" height="24" loading="lazy"  alt="star" />
                                              <span> <b>4.9 </b> (127)</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="doc-meta">
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/premium.png" height="24" width="24" loading="lazy"  alt="exp" />
                                          <span>15+ years experience</span>
                                      </div>
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/clock2.png" height="24" width="24" loading="lazy"  alt="clock" />
                                          <span className="badge-available today">Available Today</span>
                                      </div>
                                      <p className="next-available">Next available: <b>2:00 PM</b></p>
                                  </div>
                                  <a href="/contact" className="btn-book btn-gradient">
                                      Book Appointment
                                  </a>
                              </div>
                          </div>
                          <div className="col-lg-4 col-sm-6">
                              <div className="doctor-card">
                                  <div className="doc-info-main">
                                      <img src="/assets/img/patients/doctor2.webp" width="140" height="130" loading="lazy"  alt="Doctor" className="doc-img" />
                                      <div className="doc-details">
                                          <h3 className="card-title">Dr. Michael Chen</h3>
                                          <p className="card-desc">Dermatologist</p>
                                          <div className="rating-box">
                                              <img src="/assets/img/icons/rating.png" width="24" height="24" loading="lazy"  alt="star" />
                                              <span> <b>4.8</b> (257)</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="doc-meta">
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/premium.png" height="24" width="24" loading="lazy"  alt="exp" />
                                          <span>12+ years experience</span>
                                      </div>
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/clock2.png" height="24" width="24" loading="lazy"  alt="clock" />
                                          <span className="badge-available today">Available Tomorrow</span>
                                      </div>
                                      <p className="next-available">Next available: <b>10:00 AM</b></p>
                                  </div>
                                 <a href="/contact" className="btn-book btn-gradient">
                                      Book Appointment
                                  </a>
                              </div>
                          </div>
                          <div className="col-lg-4 col-sm-6">
                              <div className="doctor-card">
                                  <div className="doc-info-main">
                                      <img src="/assets/img/patients/doctor3.webp" width="140" height="130" loading="lazy"  alt="Doctor" className="doc-img" />
                                      <div className="doc-details">
                                          <h3 className="card-title">Dr. Emily Rodriguez</h3>
                                          <p className="card-desc">Pediatrician</p>
                                          <div className="rating-box">
                                              <img src="/assets/img/icons/rating.png" width="24" height="24" loading="lazy"  alt="star" />
                                              <span> <b>5.0</b> (527)</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="doc-meta">
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/premium.png" height="24" width="24" loading="lazy"  alt="exp" />
                                          <span>18+ years experience</span>
                                      </div>
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/clock2.png" height="24" width="24" loading="lazy"  alt="clock" />
                                          <span className="badge-available today">Available Today</span>
                                      </div>
                                      <p className="next-available">Next available: <b>3:30 PM</b></p>
                                  </div>
                                   <a href="/contact" className="btn-book btn-gradient">
                                      Book Appointment
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="cardio">
                      <div className="row g-4">
                          <div className="col-lg-4 col-md-6">
                              <div className="doctor-card">
                                  <div className="doc-info-main">
                                      <img src="/assets/img/patients/doctor1.webp" width="140" height="130" loading="lazy"  alt="Doctor" className="doc-img" />
                                      <div className="doc-details">
                                          <h3 className="card-title">Dr. Sarah Johnson</h3>
                                          <p className="card-desc">Cardiologist</p>
                                          <div className="rating-box">
                                              <img src="/assets/img/icons/rating.png"  width="24" height="24" loading="lazy"  alt="star" />
                                              <span> <b>4.9 </b> (127)</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="doc-meta">
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/premium.png" height="24" width="24" loading="lazy"  alt="exp" />
                                          <span>15+ years experience</span>
                                      </div>
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/clock2.png" height="24" width="24" loading="lazy"  alt="clock" />
                                          <span className="badge-available today">Available Today</span>
                                      </div>
                                      <p className="next-available">Next available: <b>2:00 PM</b></p>
                                  </div>
                                   <a href="/contact" className="btn-book btn-gradient">
                                      Book Appointment
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="derma">
                      <div className="row g-4">
                          <div className="col-lg-4 col-md-6">
                              <div className="doctor-card">
                                  <div className="doc-info-main">
                                      <img src="/assets/img/patients/doctor2.webp" width="140" height="130" loading="lazy"  alt="Doctor" className="doc-img" />
                                      <div className="doc-details">
                                          <h3 className="card-title">Dr. Michael Chen</h3>
                                          <p className="card-desc">Dermatologist</p>
                                          <div className="rating-box">
                                              <img src="/assets/img/icons/rating.png"  width="24" height="24" loading="lazy"  alt="star" />
                                              <span> <b>4.8</b> (257)</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="doc-meta">
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/premium.png" height="24" width="24" loading="lazy"  alt="exp" />
                                          <span>12+ years experience</span>
                                      </div>
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/clock2.png" height="24" width="24" loading="lazy"  alt="clock" />
                                          <span className="badge-available today">Available Tomorrow</span>
                                      </div>
                                      <p className="next-available">Next available: <b>10:00 AM</b></p>
                                  </div>
                                 <a href="/contact" className="btn-book btn-gradient">
                                      Book Appointment
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="pedia">
                      <div className="row g-4">
                          <div className="col-lg-4 col-md-6">
                              <div className="doctor-card">
                                  <div className="doc-info-main">
                                      <img src="/assets/img/patients/doctor3.webp" width="140" height="130" loading="lazy"  alt="Doctor" className="doc-img" />
                                      <div className="doc-details">
                                          <h3 className="card-title">Dr. Emily Rodriguez</h3>
                                          <p className="card-desc">Pediatrician</p>
                                          <div className="rating-box">
                                              <img src="/assets/img/icons/rating.png"  width="24" height="24" loading="lazy"  alt="star" />
                                              <span> <b>5.0</b> (527)</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="doc-meta">
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/premium.png" height="24" width="24" loading="lazy"  alt="exp" />
                                          <span>18+ years experience</span>
                                      </div>
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/clock2.png" height="24" width="24" loading="lazy"  alt="clock" />
                                          <span className="badge-available today">Available Today</span>
                                      </div>
                                      <p className="next-available">Next available: <b>3:30 PM</b></p>
                                  </div>
                                   <a href="/contact" className="btn-book btn-gradient">
                                      Book Appointment
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="neuro">
                      <div className="row g-4">
                          <div className="col-lg-4 col-md-6">
                              <div className="doctor-card">
                                  <div className="doc-info-main">
                                      <img src="/assets/img/patients/doctor1.webp" width="140" height="130" loading="lazy"  alt="Doctor" className="doc-img" />
                                      <div className="doc-details">
                                          <h3 className="card-title">Dr. Sarah Johnson</h3>
                                          <p className="card-desc">Cardiologist</p>
                                          <div className="rating-box">
                                              <img src="/assets/img/icons/rating.png"  width="24" height="24" loading="lazy"  alt="star" />
                                              <span> <b>4.9 </b> (127)</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="doc-meta">
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/premium.png" height="24" width="24" loading="lazy"  alt="exp" />
                                          <span>15+ years experience</span>
                                      </div>
                                      <div className="meta-item">
                                          <img src="/assets/img/icons/clock2.png" height="24" width="24" loading="lazy"  alt="clock" />
                                          <span className="badge-available today">Available Today</span>
                                      </div>
                                      <p className="next-available">Next available: <b>2:00 PM</b></p>
                                  </div>
                                  <a href="/contact" className="btn-book btn-gradient ">
                                      Book Appointment
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="all-in-one-section section">
          <div className="custom-container container-fluid">
              <div className="row justify-content-center text-center mb-md-5 mb-2  z-1 position-relative">
                  <div className="col-lg-12">
                      <span className="section-badge">Integrated Healthcare Services</span>
                      <h2 className="section-title">Complete Individual Healthcare and Family Wellbeing</h2>
                      <p className="section-subtitle">From booking appointments and managing medications to accessing care workers and monitoring family wellbeing, SEWB brings your healthcare experience together in one connected platform.</p>
                  </div>
              </div>
              <div className="row align-items-center">
                  <div className="col-lg-12 col-xl-8 z-1 position-relative">
                      <div className="row g-4">
                          <div className="col-sm-6 col-md-4">
                              <div className="all-card">
                                  <img src="/assets/img/patients/card-decor.webp" loading="lazy"  alt="Card Decor" className="card-decor" />
                                  <div className="all-card-header mb-3">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/health.png" width="36" height="36" loading="lazy"  alt="Consult" />
                                      </div>
                                      <h3 className="card-title">Personalised Wellness Support</h3>
                                  </div>
                                  <p className="card-desc">Tailored wellness guidance designed around your individual health needs and lifestyle goals for a healthier lifestyle.</p>
                                  <ul className="card-list">
                                      <li className="card-desc">Personalised wellness recommendations</li>
                                      <li className="card-desc">Health and Wellbeing insights</li>
                                      <li className="card-desc">Nutrition and Lifestyle guidance</li>
                                      <li className="card-desc">Exercise and activity support</li>
                                  </ul>
                                  <a href="/features" className="learn-more">Learn More <img
                                          src="/assets/img/icons/right-black.png" loading="lazy"  alt="arrow" /></a>
                              </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                              <div className="all-card">
                                  <img src="/assets/img/patients/card-decor.webp" loading="lazy"  alt="Card Decor" className="card-decor" />
                                  <div className="all-card-header mb-3">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/pill.png" width="36" height="36" loading="lazy"  alt="Consult" />
                                      </div>
                                      <h3 className="card-title">Consult a Health Professional</h3>
                                  </div>
                                  <p className="card-desc">Receive care and guidance informed by your health history, wellness information, and shared records.</p>
                                  <ul className="card-list">
                                      <li className="card-desc">Secure video and audio consultations</li>
                                      <li className="card-desc">In-app chat with Health Professionals</li>
                                      <li className="card-desc">Secure sharing of health records and reports</li>
                                      <li className="card-desc">Access support when you need it</li>
                                  </ul>
                                  <a href="/health-professionals" className="learn-more">Learn More <img
                                          src="/assets/img/icons/right-black.png" loading="lazy"  alt="arrow" /></a>
                              </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                              <div className="all-card">
                                  <img src="/assets/img/patients/card-decor.webp" loading="lazy"  alt="Card Decor" className="card-decor" />
                                  <div className="all-card-header mb-3">
                                      <div className="benefit-icon-box">
                                          <img src="/assets/img/icons/science.png" width="36" height="36" loading="lazy"  alt="Aged Care" />
                                      </div>
                                      <h3 className="card-title">Aged care and Disability support</h3>
                                  </div>
                                  <p className="card-desc">Connect with care workers for individuals who require additional assistance with independent living.</p>
                                  <ul className="card-list">
                                      <li className="card-desc">Structured in-home support</li>
                                      <li className="card-desc">Mobility assistance</li>
                                      <li className="card-desc">Daily wellbeing support</li>
                                      <li className="card-desc">Ongoing wellness monitoring</li>
                                  </ul>
                                  <a href="/features" className="learn-more">Learn More <img
                                          src="/assets/img/icons/right-black.png" loading="lazy"  alt="arrow" /></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4">
                      <div className="all-in-one-img-wrapper mt-4 mt-lg-0">
                          <img src="/assets/img/patients/allin-one.webp" loading="lazy"  alt="All in one care" className="img-fluid" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="patient-voices-section section">
          <img src="/assets/img/privacypolicy/glow-right.webp" width="357" height="800" loading="lazy"  alt="shape img" className="highlight-bg-shape" />
          <div className="custom-container container-fluid">
              <div className="row justify-content-center text-center">
                  <div className="col-lg-12">
                      <span className="section-badge">Individual Voices</span>
                      <h2 className="section-title">What Our Clients Say About Their <span
                              className="highlight-pink">Experience</span></h2>
                      <p className="section-subtitle">Individuals and families across SEWB share how connected care and accessible support have helped them better manage their wellbeing.</p>
                  </div>
              </div>
              <div className="voices-stats">
                  <div className="stat-item">
                      <span className="stat-count">50K+</span>
                      <span className="stat-label">Happy individuals</span>
                  </div>
                  <div className="stat-item">
                      <span className="stat-count">4.9/5</span>
                      <span className="stat-label">Average Rating</span>
                  </div>
                  <div className="stat-item">
                      <span className="stat-count">98%</span>
                      <span className="stat-label">Satisfaction Rate</span>
                  </div>
              </div>
              <div className="testimonial-slider-wrap position-relative">
                  <div className="owl-carousel testimonial-carousel" id="patient-carousel">
                      <div className="item testimonial-item">
                          <div className="testimonial-card">
                              <div className="profile-img-wrap">
                                  <img src="/assets/img/author/1.jpg" width="84" height="84" loading="lazy"  alt="Emily R." />
                              </div>
                              <div className="testimonial-body">
                                  <p className="quote-text">“As a working parent managing care for my whole family, SEWB has made everything simpler. Booking appointments is quick, our health records are organised in one place, and Health Professionals already have the context they need before consultations begin.”</p>
                                  <div className="card-footer-box d-flex justify-content-between align-items-end">
                                      <div className="user-info">
                                          <h3 className="name">Emily R.</h3>
                                          <p className="specialty">Software Engineer</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="item testimonial-item">
                          <div className="testimonial-card">
                              <div className="profile-img-wrap">
                                  <img src="/assets/img/author/2.jpg" width="84" height="84" loading="lazy"  alt="Sarah M." />
                              </div>
                              <div className="testimonial-body">
                                  <p className="quote-text">“I found a specialist quickly and booked a video consultation the same day. My prescription was sent digitally, and the entire experience felt simple, connected, and easy to manage.”</p>
                                  <div className="card-footer-box d-flex justify-content-between align-items-end">
                                      <div className="user-info">
                                          <h3 className="name">Sarah M.</h3>
                                          <p className="specialty">Mother of Two</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="item testimonial-item">
                          <div className="testimonial-card">
                              <div className="profile-img-wrap">
                                  <img src="/assets/img/author/3.jpg" width="84" height="84" loading="lazy"  alt="Rohit Sharma" />
                              </div>
                              <div className="testimonial-body">
                                  <p className="quote-text">“My parents live alone, and for a long time I constantly worried about managing their care from a distance. SEWB changed that. I can now monitor updates, share reports directly with their specialist, and stay informed throughout their care journey. The peace of mind that brings is invaluable.”</p>
                                  <div className="card-footer-box d-flex justify-content-between align-items-end">
                                      <div className="user-info">
                                          <h3 className="name">Rohit Sharma</h3>
                                          <p className="specialty">Working Professional</p>
                                      </div>
                                  </div>
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
                                      How does SEWB help me with the right Health Professional?
                                  </button>
                              </h3>
                              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      SEWB helps match you with Health Professionals based on your health needs, preferences, location, availability, and areas of expertise. You can also browse professionals directly by specialty, consultation type, or availability to find the support that works best for you.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                      Are online consultations effective?
                                  </button>
                              </h3>
                              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      For many types of care — including wellness guidance, follow-up appointments, prescription renewals, mental health support, and general consultations — online appointments can provide a convenient and effective alternative to in-person visits. Through SEWB, Health Professionals can review the information you choose to share, including health records, reports, and wellness data, before your consultation begins. If an in-person assessment or physical examination is required, your Health Professional will advise you accordingly.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                      How quickly can I book an appointment?
                                  </button>
                              </h3>
                              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Many Health Professionals on SEWB offer same-day or next-day availability. Once you find the right match, appointments can be booked quickly and managed directly through the platform. Availability may vary depending on provider schedules and consultation type.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h3 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                      Is my health information secure and private?
                                  </button>
                              </h3>
                              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                  <div className="accordion-body">
                                      Yes. SEWB uses enterprise-grade security measures, encrypted data storage and transmission, and role-based access controls to help protect your personal information. You remain in control of your health records and decide what information is shared with Health Professionals and care providers. Your sharing preferences can be updated at any time.
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
