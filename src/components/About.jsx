function About() {
  return (
    <section id="about" className="about-section">

      <div className="section-container">

        {/* Section heading */}
        <div className="section-label">
          <span>02 /</span>
          ABOUT
        </div>

        <div className="about-grid">

          {/* Main statement */}
          <div className="about-intro">

            <h2>
              I'M NISHANT.
              <br />
              I <span>BUILD.</span>
              <br />
              I LEARN.
              <br />
              I SHIP.
            </h2>

          </div>

          {/* Description */}
          <div className="about-content">

            <p className="about-lead">
              I'm an AI/ML student and developer interested
              in turning ideas, data and algorithms into
              practical applications.
            </p>

            <p className="about-text">
              I enjoy building systems that solve real
              problems—from intelligent examination
              seating to data-driven dashboards and
              technology-focused applications.
            </p>

            <div className="about-meta">

              <div className="meta-item">
                <span className="meta-label">
                  CURRENTLY
                </span>

                <span className="meta-value">
                  AI / ML
                </span>
              </div>

              <div className="meta-item">
                <span className="meta-label">
                  FOCUS
                </span>

                <span className="meta-value">
                  Machine Learning
                  <br />
                  Software Development
                </span>
              </div>

              <div className="meta-item">
                <span className="meta-label">
                  BUILDING WITH
                </span>

                <span className="meta-value">
                  DATA • CODE • PROBLEM SOLVING
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About