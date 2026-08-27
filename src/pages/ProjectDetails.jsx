import { Link, useParams } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetails() {
  const { projectId } = useParams()

  const project = projects.find(
    (item) => item.id === projectId
  )

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Project not found.</h1>

        <Link to="/">
          ← Back to portfolio
        </Link>
      </main>
    )
  }

  const isSeatMatrix = project.id === "seatmatrix-ai"
  const isIPL = project.id === "ipl-dashboard"
  const isKrishishayog = project.id === "krishishayog"

  return (
    <main className="project-detail-page">

      <div className="project-detail-container">

        {/* =====================================
            BACK TO PORTFOLIO
        ====================================== */}

        <Link
          to="/"
          className="back-link"
        >
          ← BACK TO PORTFOLIO
        </Link>


        {/* =====================================
            PROJECT HEADER
        ====================================== */}

        <header className="project-detail-header">

          <div className="project-detail-meta">

            <span className="project-detail-number">
              {project.number} /
            </span>

            <span className="project-detail-category">
              {project.category}
            </span>

          </div>


          <h1>
            {project.title}
          </h1>


          <p>
            {project.description}
          </p>

        </header>


        {/* =====================================
            PROJECT LINKS
        ====================================== */}

        <div className="project-detail-actions">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
          )}


          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              LIVE DEMO ↗
            </a>
          )}

        </div>


        {/* =====================================
            PROJECT VISUAL
        ====================================== */}

        <div className="case-study-visual">


          {/* =================================
              SEATMATRIX IMAGE
          ================================= */}

          {isSeatMatrix && project.image && (
            <img
              src={project.image}
              alt="SeatMatrix AI dashboard"
              className="case-study-image"
            />
          )}


          {/* =================================
              IPL IMAGE
          ================================= */}

          {isIPL && project.image && (
            <img
              src={project.image}
              alt="IPL Score Analysis dashboard"
              className="case-study-image"
            />
          )}


          {/* =================================
              KRISHISHAYOG VISUAL
          ================================= */}
{isKrishishayog && project.image && (
  <img
    src={project.image}
    alt="Krishishayog project"
    className="case-study-image"
  />
)}

        </div>


        {/* =====================================
            SEATMATRIX CASE STUDY
        ====================================== */}

        {isSeatMatrix && (

          <>

            {/* OVERVIEW */}

            <section className="case-study-section">

              <span className="case-study-label">
                01 / OVERVIEW
              </span>

              <h2>
                From manual work to a structured
                digital workflow.
              </h2>

              <p>
                SeatMatrix AI is designed to simplify
                the examination seating arrangement
                process by bringing student data,
                seating allocation and generated
                outputs into a single workflow.
              </p>

            </section>


            {/* PROBLEM */}

            <section className="case-study-section">

              <span className="case-study-label">
                02 / THE PROBLEM
              </span>

              <h2>
                Examination seating can become
                repetitive and difficult to manage manually.
              </h2>

              <p>
                Managing student lists, examination halls
                and seating assignments manually can require
                repetitive administrative work. The goal of
                SeatMatrix AI is to make that workflow more
                systematic and easier to manage.
              </p>

            </section>


            {/* APPROACH */}

            <section className="case-study-section">

              <span className="case-study-label">
                03 / THE APPROACH
              </span>

              <h2>
                A workflow built around structured data.
              </h2>

              <div className="approach-grid">

                <div>
                  <span>01</span>

                  <h3>
                    Upload
                  </h3>

                  <p>
                    Bring student information into the
                    system through structured input data.
                  </p>
                </div>


                <div>
                  <span>02</span>

                  <h3>
                    Process
                  </h3>

                  <p>
                    Process the available information and
                    prepare it for seating allocation.
                  </p>
                </div>


                <div>
                  <span>03</span>

                  <h3>
                    Allocate
                  </h3>

                  <p>
                    Generate an organized seating arrangement
                    based on the configured allocation logic.
                  </p>
                </div>


                <div>
                  <span>04</span>

                  <h3>
                    Generate
                  </h3>

                  <p>
                    Produce useful hall-wise and official
                    output for examination administration.
                  </p>
                </div>

              </div>

            </section>


            {/* TECHNOLOGY */}

            <section className="case-study-section">

              <span className="case-study-label">
                04 / TECHNOLOGY
              </span>

              <h2>
                Built with.
              </h2>

              <div className="case-study-tags">

                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}

              </div>

            </section>


            {/* FEATURES */}

            <section className="case-study-section">

              <span className="case-study-label">
                05 / FEATURES
              </span>

              <h2>
                What the system is designed to handle.
              </h2>

              <div className="feature-list">

                <div>
                  <span>01</span>

                  <strong>
                    Student Data
                  </strong>

                  <p>
                    Structured student information as the
                    foundation for allocation.
                  </p>
                </div>


                <div>
                  <span>02</span>

                  <strong>
                    Hall Management
                  </strong>

                  <p>
                    Organizing seating across examination halls.
                  </p>
                </div>


                <div>
                  <span>03</span>

                  <strong>
                    Seating Allocation
                  </strong>

                  <p>
                    Automating the arrangement process.
                  </p>
                </div>


                <div>
                  <span>04</span>

                  <strong>
                    Generated Output
                  </strong>

                  <p>
                    Producing structured examination
                    seating documents.
                  </p>
                </div>

              </div>

            </section>


            {/* LEARNING */}

            <section className="case-study-section">

              <span className="case-study-label">
                06 / WHAT I LEARNED
              </span>

              <h2>
                Building the system taught me to think
                beyond individual features.
              </h2>

              <p>
                The project provided practical experience
                in connecting data processing, application
                logic, user workflows and generated outputs
                into one working system.
              </p>

            </section>

          </>

        )}


        {/* =====================================
            IPL CASE STUDY
        ====================================== */}

        {isIPL && (

          <>

            {/* OVERVIEW */}

            <section className="case-study-section">

              <span className="case-study-label">
                01 / OVERVIEW
              </span>

              <h2>
                Turning IPL match data into
                meaningful insights.
              </h2>

              <p>
                IPL Score Analysis is a Python-based
                data analysis project focused on exploring
                cricket statistics, team performance,
                scoring patterns and player-level insights.
              </p>

            </section>


            {/* OBJECTIVE */}

            <section className="case-study-section">

              <span className="case-study-label">
                02 / THE OBJECTIVE
              </span>

              <h2>
                Understand the numbers behind
                the game.
              </h2>

              <p>
                The project uses structured IPL data to
                investigate patterns across matches,
                teams, players and scoring performance.
              </p>

            </section>


            {/* APPROACH */}

            <section className="case-study-section">

              <span className="case-study-label">
                03 / THE APPROACH
              </span>

              <h2>
                Analyze. Visualize. Understand.
              </h2>

              <div className="approach-grid">

                <div>
                  <span>01</span>

                  <h3>
                    Collect
                  </h3>

                  <p>
                    Work with structured IPL match data.
                  </p>
                </div>


                <div>
                  <span>02</span>

                  <h3>
                    Analyze
                  </h3>

                  <p>
                    Explore teams, players, scores and
                    match-level statistics.
                  </p>
                </div>


                <div>
                  <span>03</span>

                  <h3>
                    Visualize
                  </h3>

                  <p>
                    Represent patterns and comparisons
                    through data visualizations.
                  </p>
                </div>


                <div>
                  <span>04</span>

                  <h3>
                    Interpret
                  </h3>

                  <p>
                    Extract useful observations from
                    the analyzed cricket data.
                  </p>
                </div>

              </div>

            </section>


            {/* TECHNOLOGY */}

            <section className="case-study-section">

              <span className="case-study-label">
                04 / TECHNOLOGY
              </span>

              <h2>
                Built with.
              </h2>

              <div className="case-study-tags">

                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}

              </div>

            </section>


            {/* ANALYSIS */}

            <section className="case-study-section">

              <span className="case-study-label">
                05 / ANALYSIS
              </span>

              <h2>
                Exploring cricket performance
                through data.
              </h2>

              <div className="feature-list">

                <div>
                  <span>01</span>

                  <strong>
                    Team Performance
                  </strong>

                  <p>
                    Explore team-level performance
                    and comparisons.
                  </p>
                </div>


                <div>
                  <span>02</span>

                  <strong>
                    Player Statistics
                  </strong>

                  <p>
                    Examine individual player
                    performance and statistics.
                  </p>
                </div>


                <div>
                  <span>03</span>

                  <strong>
                    Scoring Trends
                  </strong>

                  <p>
                    Analyze scoring patterns across
                    matches and teams.
                  </p>
                </div>


                <div>
                  <span>04</span>

                  <strong>
                    Visualization
                  </strong>

                  <p>
                    Present patterns through
                    data visualization.
                  </p>
                </div>

              </div>

            </section>


            {/* LEARNING */}

            <section className="case-study-section">

              <span className="case-study-label">
                06 / WHAT I LEARNED
              </span>

              <h2>
                Data becomes useful when
                you can explain it.
              </h2>

              <p>
                This project provided practical experience
                with data cleaning, analysis, visualization
                and interpreting patterns from real-world
                sports data.
              </p>

            </section>

          </>

        )}


        {/* =====================================
            KRISHISHAYOG CASE STUDY
        ====================================== */}

        {isKrishishayog && (

          <>

            {/* OVERVIEW */}

            <section className="case-study-section">

              <span className="case-study-label">
                01 / OVERVIEW
              </span>

              <h2>
                Technology focused on solving
                practical problems.
              </h2>

              <p>
                Krishishayog is a technology-focused
                project aimed at addressing practical
                agricultural challenges through digital
                solutions.
              </p>

            </section>


            {/* IDEA */}

            <section className="case-study-section">

              <span className="case-study-label">
                02 / THE IDEA
              </span>

              <h2>
                Connecting technology with
                real-world needs.
              </h2>

              <p>
                The project explores how digital technology
                can be used to approach practical challenges
                in agriculture and create useful solutions.
              </p>

            </section>


            {/* TECHNOLOGY */}

            <section className="case-study-section">

              <span className="case-study-label">
                03 / TECHNOLOGY
              </span>

              <h2>
                Built around problem solving.
              </h2>

              <div className="case-study-tags">

                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}

              </div>

            </section>

          </>

        )}


        {/* =====================================
            NEXT PROJECTS
        ====================================== */}

        <div className="next-project">

          <span>
            BACK TO WORK
          </span>

          <Link to="/#projects">
            VIEW ALL PROJECTS →
          </Link>

        </div>

      </div>

    </main>
  )
}

export default ProjectDetails