import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Proof from "./components/Proof"
import Contact from "./components/Contact"
import Cursor from "./components/Cursor"

import ProjectDetails from "./pages/ProjectDetails"


function PortfolioHome() {
  return (
    <>
      <Navbar />

      <main className="page-content">

        {/* =====================================
            HERO
        ====================================== */}

        <section id="home" className="hero">

          <div className="hero-content">

            <div className="hero-label">
              <span>01 /</span>

              <span className="hero-status">
                AVAILABLE TO BUILD
              </span>

              <span>
                AI • ML • SOFTWARE
              </span>
            </div>


            <h1 className="hero-title">
              BUILDING
              <br />
              INTELLIGENT
              <br />
              <span>SYSTEMS.</span>
            </h1>


            <div className="hero-bottom">

              {/* NAME + DESCRIPTION */}

              <div className="hero-description">

                <div className="hero-name">
                  Nishant Rajesh Patil
                </div>

                <div className="hero-role">
                  AI/ML STUDENT • DEVELOPER • BUILDER
                </div>

                <p className="hero-summary">
                  I build practical systems using
                  code, data and intelligent algorithms.
                </p>

              </div>


              {/* ACTIONS */}

              <div className="hero-actions">

                <div className="hero-stack">

                  <span>PYTHON</span>
                  <span>C</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>MACHINE LEARNING</span>

                </div>


                <div className="hero-buttons">

                  <a
                    href="#projects"
                    className="primary-button"
                  >
                    EXPLORE PROJECTS
                    <span>↗</span>
                  </a>


                  <a
                    href="https://github.com/Nishantpatil787"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    GITHUB
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* HERO MARK */}

          <div className="hero-mark">

            <span>
              NP.
            </span>

            <div className="hero-year">
              PORTFOLIO
              <br />
              2026
            </div>

          </div>

        </section>


        {/* =====================================
            ABOUT
        ====================================== */}

        <About />


        {/* =====================================
            PROJECTS
        ====================================== */}

        <Projects />


        {/* =====================================
            SKILLS
        ====================================== */}

        <Skills />


        {/* =====================================
            EXPERIENCE
        ====================================== */}

        <Experience />


        {/* =====================================
            PROOF
        ====================================== */}

        <Proof />


        {/* =====================================
            CONTACT
        ====================================== */}

        <Contact />

      </main>
    </>
  )
}


function App() {
  return (
    <BrowserRouter>

      <Cursor />

      <Routes>

        {/* Homepage */}

        <Route
          path="/"
          element={<PortfolioHome />}
        />


        {/* Project case studies */}

        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />

      </Routes>

    </BrowserRouter>
  )
}


export default App