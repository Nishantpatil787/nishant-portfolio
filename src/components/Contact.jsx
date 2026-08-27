import npLogo from "../assets/brand/np-logo.png"

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="section-container">

        <div className="section-label">
          <span>07 /</span>
          CONTACT
        </div>


        <div className="contact-heading">

          <h2>
            LET'S
            <br />
            <span>BUILD.</span>
          </h2>

          <p>
            Have an opportunity, project or idea?
            I'm always open to connecting, learning
            and building something useful.
          </p>

        </div>


        <div className="contact-links">

          <a
            href="https://www.linkedin.com/in/nishant-patil-0590253a3"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
            <span>↗</span>
          </a>


          <a
            href="https://github.com/Nishantpatil787"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <span>↗</span>
          </a>


          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
            <span>↗</span>
          </a>

        </div>


        {/* =====================================
            FOOTER BRAND
        ====================================== */}

        <div className="contact-footer">

          <div className="contact-brand">

            <img
              src={npLogo}
              alt="Nishant Rajesh Patil"
              className="footer-logo"
            />

            <div className="contact-brand-name">
              Nishant Rajesh Patil

              <br />

              <span>
                AI/ML STUDENT • DEVELOPER • BUILDER
              </span>
            </div>

          </div>


          <div className="contact-year">
            © 2026
          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact