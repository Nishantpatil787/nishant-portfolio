function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="section-container">

        {/* =====================================
            SECTION LABEL
        ====================================== */}

        <div className="section-label">
          <span>05 /</span>
          EXPERIENCE & LEADERSHIP
        </div>


        {/* =====================================
            HEADING
        ====================================== */}

        <div className="experience-heading">

          <h2>
            LEARNING.
            <br />
            LEADING.
            <br />
            <span>CONTRIBUTING.</span>
          </h2>

          <p>
            Beyond building software, I actively
            participate in technical communities,
            leadership opportunities and programming
            activities that help me learn, collaborate
            and contribute.
          </p>

        </div>


        {/* =====================================
            EXPERIENCE LIST
        ====================================== */}

        <div className="experience-list">


          {/* =================================
              GFG
          ================================= */}

          <article className="experience-item">

            <div className="experience-number">
              01
            </div>

            <div className="experience-main">

              <div className="experience-meta">
                COMMUNITY
              </div>

              <h3>
                Campus Mantri
              </h3>

              <h4>
                GeeksforGeeks
              </h4>

              <p>
                Contributing to the student technical
                community through the GeeksforGeeks
                campus ecosystem and helping promote
                learning and programming activities.
              </p>

            </div>

            <div className="experience-arrow">
              ↗
            </div>

          </article>


          {/* =================================
              TECHFEST
          ================================= */}

          <article className="experience-item">

            <div className="experience-number">
              02
            </div>

            <div className="experience-main">

              <div className="experience-meta">
                OUTREACH
              </div>

              <h3>
                Campus Ambassador
              </h3>

              <h4>
                Techfest, IIT Bombay
              </h4>

              <p>
                Representing and promoting the Techfest
                ecosystem within the student community
                while developing communication,
                outreach and networking experience.
              </p>

            </div>

            <div className="experience-arrow">
              ↗
            </div>

          </article>


          {/* =================================
              CODASTRA
          ================================= */}

          <article className="experience-item">

            <div className="experience-number">
              03
            </div>

            <div className="experience-main">

              <div className="experience-meta">
                PROGRAMMING
              </div>

              <h3>
                Core Member
              </h3>

              <h4>
                Codastra Programming Club
              </h4>

              <p>
                Participating in a programming-focused
                student community and contributing to
                technical activities, collaboration and
                peer learning.
              </p>

            </div>

            <div className="experience-arrow">
              ↗
            </div>

          </article>


        </div>


        {/* =====================================
            LEADERSHIP SUMMARY
        ====================================== */}

        <div className="experience-footer">

          <span>
            BEYOND CODE
          </span>

          <strong>
            COMMUNITY • LEADERSHIP • COLLABORATION
          </strong>

        </div>

      </div>

    </section>
  )
}

export default Experience