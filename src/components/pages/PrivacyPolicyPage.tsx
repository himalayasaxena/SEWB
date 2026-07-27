export function PrivacyPolicyPage() {
  return (
    <>
      <link rel="stylesheet" href="assets/css/privacy.css" />
<section className="common-hero-section">
    <div className="custom-container container-fluid">
        <div className="row align-items-center g-4">
            <div className="col-lg-7">
                <div className="hero-content">
                    <div className="hero-badge-wrap">
                        <span className="hero-badge">Legal & Privacy</span>
                    </div>
                    <h1 className="hero-title">Privacy <span className="highlight">Policy</span></h1>
                    <p className="hero-subtitle">
                        Your privacy is our priority. Learn how we protect, handle, and secure your personal and medical information across our platform.
                    </p>
                </div>
            </div>
            <div className="col-lg-5 text-center">
                <div className="hero-image-wrap">
                    <img src="/assets/img/privacypolicy/glow-right.webp" width="357" height="400" loading="lazy" alt="Privacy Policy" className="hero-main-img img-fluid" style={{maxHeight: '300px', objectFit: 'contain'}} />
                </div>
            </div>
        </div>
    </div>
</section>
<section className="privacy-policy-section">
    <img src="/assets/img/privacypolicy/glow-left.webp" width="357" height="800" loading="lazy"  alt="glow-bg" className="glow-right" />
    <img src="/assets/img/privacypolicy/glow-right.webp"  width="357" height="800" loading="lazy"  alt="glow-bg" className="glow-left" />
    <div className=" container-fluid custom-container">
        <div className="row g-4">
            <div className="col-lg-4 col-xl-3 order-lg-2 privacy-sidebar-col">
                <aside className="privacy-nav-card">
                    <div className="privacy-nav-sticky">
                        <h2>Quick Navigation</h2>
                        <nav className="privacy-nav" aria-label="Privacy Policy Navigation">
                            <a href="#introduction" className="active">Introduction</a>
                            <a href="#information-collect">Information We Collect</a>
                            <a href="#how-we-use">How We Use Your Information</a>
                            <a href="#data-protection">Data Protection and Security</a>
                            <a href="#sharing-information">Sharing of Information</a>
                            <a href="#user-rights">User Rights and Control</a>
                            <a href="#cookies">Cookies and Usage Data</a>
                            <a href="#third-party">Third-Party Services</a>
                            <a href="#updates">Updates to This Privacy Policy</a>
                            <a href="#contact-information">Contact Information</a>
                        </nav>
                    </div>
                </aside>
            </div>
            <div className="col-lg-8 col-xl-9 order-lg-1">
                <div className="privacy-main-card">
                    <div className="privacy-sections">
                        <section id="introduction" className="policy-block">
                            <h3>Introduction</h3>
                            <p>We value your privacy and are committed to protecting your personal and medical
                                information. This Privacy Policy explains how our platform collects, uses, stores, and
                                protects the information you provide when using our services.</p>
                            <p>By accessing or using this platform, you agree to the practices described in this policy.
                            </p>
                        </section>
                        <section id="information-collect" className="policy-block">
                            <h3>Information We Collect</h3>
                            <p>To provide healthcare related services, we may collect certain personal and medical
                                information from users.</p>
                            <p>This may include:</p>
                            <ul>
                                <li>Name, email address, and phone number</li>
                                <li>Account login details</li>
                                <li>Health-related information such as symptoms or medical history</li>
                                <li>Uploaded medical documents and lab reports or prescriptions</li>
                                <li>Appointment and consultation records</li>
                                <li>Device or usage information when accessing the platform</li>
                            </ul>
                            <p>This information helps us provide better healthcare support and improve the user
                                experience.</p>
                        </section>
                        <section id="how-we-use" className="policy-block">
                            <h3>How We Use Your Information</h3>
                            <p>The information collected through the platform is used to support healthcare services and
                                improve functionality.</p>
                            <p>We may use your information to:</p>
                            <ul>
                                <li>Connect individuals with Health Professionals for consultations</li>
                                <li>Provide AI-powered health insights and recommendations</li>
                                <li>Allow Health Professionals to review medical information and lab reports</li>
                                <li>Facilitate appointment bookings and communication</li>
                                <li>Improve the platform and develop new features</li>
                                <li>Provide customer support and respond to enquiries</li>
                            </ul>
                            <p>Your information is used only for purposes related to the services offered on the
                                platform.</p>
                        </section>
                        <section id="data-protection" className="policy-block">
                            <h3>Data Protection and Security</h3>
                            <p>Protecting your information is a priority for us. We implement security measures designed
                                to safeguard your personal and medical data from unauthorized access, misuse, or
                                disclosure.<br />These security measures may include encrypted data transmission, secure
                                servers, and restricted access to sensitive information. Only authorized personnel
                                and healthcare professionals can access relevant information when necessary to
                                provide services.</p>
                        </section>
                        <section id="sharing-information" className="policy-block">
                            <h3>Sharing of Information</h3>
                            <p>We do not sell or rent your personal information to third parties.</p>
                            <p>Your information may be shared only in limited circumstances, such as:</p>
                            <ul>
                                <li>With verified Health Professionals for medical consultations</li>
                                <li>With diagnostic organisations for test requests or reports</li>
                                <li>With pharmacies for prescription fulfilment</li>
                                <li>When required by law or regulatory authorities</li>
                            </ul>
                            <p>All such sharing is done strictly for the purpose of providing healthcare services.</p>
                        </section>
                        <section id="user-rights" className="policy-block">
                            <h3>User Rights and Control</h3>
                            <p>Users have the right to access and manage their personal information on the platform.</p>
                            <p>You may request to:</p>
                            <ul>
                                <li>Review your stored personal data</li>
                                <li>Update incorrect information</li>
                                <li>Delete certain information from your account</li>
                                <li>Control how your information is used</li>
                            </ul>
                            <p>Requests related to personal data can be submitted through the platform's contact or
                                support channels.</p>
                        </section>
                        <section id="cookies" className="policy-block">
                            <h3>Cookies and Usage Data</h3>
                            <p>The platform may use cookies or similar technologies to improve the browsing experience
                                and analyze how users interact with the website.</p>
                            <p>Cookies help us understand usage patterns, remember user preferences, and enhance
                                platform performance.</p>
                            <p>Users can manage cookie preferences through their browser settings.</p>
                        </section>
                        <section id="third-party" className="policy-block">
                            <h3>Third-Party Services</h3>
                            <p>The platform may integrate with third-party services such as payment organisations,
                                communication tools, or analytics services.</p>
                            <p>These services may have their own privacy policies governing how they handle information.
                            </p>
                            <p>We recommend reviewing the privacy policies of any external services linked through the
                                platform.</p>
                        </section>
                        <section id="updates" className="policy-block">
                            <h3>Updates to This Privacy Policy</h3>
                            <p>This Privacy Policy may be updated from time to time to reflect changes in services,
                                technology, or legal requirements.</p>
                            <p>Any updates will be posted on this page, and users are encouraged to review the policy
                                periodically.</p>
                        </section>
                        <section id="contact-information" className="policy-block">
                            <h3>Contact Information</h3>
                            <p>If you have any questions about this Privacy Policy or how your information is handled,
                                please contact us through the platform's official contact channels.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
      
    </>
  )
}
