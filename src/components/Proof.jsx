function Proof() {
  return (
    <section id="proof" className="proof-section">

      <div className="section-container">

        {/* =====================================
            SECTION LABEL
        ====================================== */}

        <div className="section-label">
          <span>06 /</span>
          PROOF OF WORK
        </div>


        {/* =====================================
            HEADING
        ====================================== */}

        <div className="proof-heading">

          <h2>
            DON'T TAKE
            <br />
            MY <span>WORD.</span>
          </h2>

          <p>
            Projects, code and technical work that
            show how I learn, experiment and build
            practical systems.
          </p>

        </div>


        {/* =====================================
            PROOF GRID
        ====================================== */}

        <div className="proof-grid">


          {/* =================================
              GITHUB
          ================================= */}

          <a
            href="https://github.com/Nishantpatil787"
            target="_blank"
            rel="noreferrer"
            className="proof-card proof-github"
          >

            <div className="proof-card-top">

              <span>
                01 / CODE
              </span>

              <span className="proof-arrow">
                ↗
              </span>

            </div>


            <div className="proof-card-content">

              <div className="proof-icon">
                GH
              </div>

              <h3>
                GitHub
              </h3>

              <p>
                Explore my repositories, projects,
                experiments and source code.
              </p>

            </div>


            <div className="proof-card-bottom">

              <span>
                github.com/Nishantpatil787
              </span>

              <strong>
                EXPLORE ↗
              </strong>

            </div>

          </a>


          {/* =================================
              PROJECTS
          ================================= */}

          <a
            href="/#projects"
            className="proof-card"
          >

            <div className="proof-card-top">

              <span>
                02 / BUILDS
              </span>

              <span className="proof-arrow">
                ↗
              </span>

            </div>


            <div className="proof-card-content">

              <div className="proof-icon">
                03
              </div>

              <h3>
                Projects
              </h3>

              <p>
                Real applications built around
                practical problems using code,
                data and technology.
              </p>

            </div>


            <div className="proof-card-bottom">

              <span>
                SEATMATRIX • IPL • KRISHISHAYOG
              </span>

              <strong>
                VIEW BUILDS ↗
              </strong>

            </div>

          </a>


          {/* =================================
              LEARNING
          ================================= */}

          <div className="proof-card proof-learning">

            <div className="proof-card-top">

              <span>
                03 / LEARNING
              </span>

              <span className="proof-arrow">
                ↗
              </span>

            </div>


            <div className="proof-card-content">

              <div className="proof-icon">
                AI
              </div>

              <h3>
                Always Learning
              </h3>

              <p>
                Continuously developing my knowledge
                across AI, machine learning,
                software and data.
              </p>

            </div>


            <div className="proof-card-bottom">

              <span>
                AI / ML • SOFTWARE • DATA
              </span>

              <strong>
                KEEP BUILDING
              </strong>

            </div>

          </div>

        </div>


        {/* =====================================
            GITHUB CTA
        ====================================== */}

        <div className="proof-cta">

          <div>

            <span>
              OPEN SOURCE / CODE
            </span>

            <h3>
              Explore what I'm building.
            </h3>

          </div>


          <a
            href="https://github.com/Nishantpatil787"
            target="_blank"
            rel="noreferrer"
          >
            VISIT GITHUB
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Proof