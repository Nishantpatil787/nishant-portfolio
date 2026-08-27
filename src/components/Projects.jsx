function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="section-container">

        {/* =====================================
            SECTION HEADING
        ====================================== */}

        <div className="section-label">
          <span>03 /</span>
          SELECTED WORK
        </div>

        <div className="projects-heading">

          <h2>
            THINGS
            <br />
            I'VE <span>BUILT.</span>
          </h2>

          <p>
            A selection of projects where I turn
            ideas, data and technology into
            practical applications.
          </p>

        </div>


        {/* =====================================
            FEATURED PROJECT — SEATMATRIX AI
        ====================================== */}

        <article className="featured-project">

          <div className="project-visual">

            <div className="project-number">
              01
            </div>

            <div className="seatmatrix-visual">

              <div className="visual-node node-input">
                EXCEL
              </div>

              <div className="visual-line line-one"></div>

              <div className="visual-node node-process">
                SEATING
                <br />
                ENGINE
              </div>

              <div className="visual-line line-two"></div>

              <div className="visual-node node-output">
                PDF
              </div>

            </div>

            <div className="project-year">
              SOFTWARE / SYSTEM
            </div>

          </div>


          <div className="project-info">

            <div className="project-category">
              SOFTWARE • AUTOMATION
            </div>

            <h3>
              SeatMatrix AI
            </h3>

            <p className="project-description">
              An examination seating arrangement
              system designed to automate student
              allocation, hall management and
              structured seating output.
            </p>


            <div className="project-tags">

              <span>Python</span>
              <span>Flask</span>
              <span>Data Processing</span>
              <span>Automation</span>

            </div>


            <div className="project-actions">

              <a
                href="/projects/seatmatrix-ai"
                className="project-link primary-project-link"
              >
                VIEW CASE STUDY
                <span>↗</span>
              </a>


              <a
                href="https://github.com/Nishantpatil787/SeatMatrix-AI"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GITHUB
                <span>↗</span>
              </a>

            </div>

          </div>

        </article>


        {/* =====================================
            SECONDARY PROJECTS
        ====================================== */}

        <div className="project-grid">


          {/* =================================
              IPL SCORE ANALYSIS
          ================================= */}

          <article className="project-card">

            <div className="project-card-top">

              <span className="card-number">
                02
              </span>

              <span className="card-arrow">
                ↗
              </span>

            </div>


            <div className="project-card-content">

              <span className="project-category">
                DATA • ANALYTICS • VISUALIZATION
              </span>

              <h3>
                IPL Score Analysis
              </h3>

              <p>
                A Python-based IPL data analysis
                project exploring team performance,
                scoring trends, player statistics
                and match insights.
              </p>

            </div>


            <div className="project-card-bottom">

              <div className="project-tags">

                <span>Python</span>
                <span>Pandas</span>
                <span>Matplotlib</span>
                <span>Seaborn</span>

              </div>


              <div className="project-actions">

  <a
    href="/projects/ipl-dashboard"
    className="project-link primary-project-link"
  >
    VIEW CASE STUDY
    <span>↗</span>
  </a>

  <a
    href="https://github.com/Nishantpatil787/IPL-Score-Analysis"
    target="_blank"
    rel="noreferrer"
    className="project-link"
  >
    GITHUB
    <span>↗</span>
  </a>

</div>
            </div>

          </article>


          {/* =================================
              KRISHISHAYOG
          ================================= */}

          <article className="project-card">

            <div className="project-card-top">

              <span className="card-number">
                03
              </span>

              <span className="card-arrow">
                ↗
              </span>

            </div>


            <div className="project-card-content">

              <span className="project-category">
                REAL WORLD • TECHNOLOGY
              </span>

              <h3>
                Krishishayog
              </h3>

              <p>
                A technology-focused project aimed
                at addressing practical agricultural
                challenges through digital solutions.
              </p>

            </div>


            <div className="project-card-bottom">

              <div className="project-tags">

                <span>Technology</span>
                <span>Problem Solving</span>

              </div>


              <a
                href="/projects/krishishayog"
                className="card-link"
              >
                VIEW PROJECT ↗
              </a>

            </div>

          </article>


        </div>

      </div>

    </section>
  )
}

export default Projects