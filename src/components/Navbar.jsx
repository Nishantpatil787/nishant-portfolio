import npLogo from "../assets/brand/np-logo.png"

function Navbar() {
  return (
    <nav className="navbar">

      {/* =====================================
          LOGO
      ====================================== */}

      <a
        href="/#home"
        className="logo"
        aria-label="Nishant Rajesh Patil - Home"
      >
        <img
          src={npLogo}
          alt="NP"
          className="navbar-logo"
        />
      </a>


      {/* =====================================
          NAVIGATION
      ====================================== */}

      <div className="nav-links">

        <a href="/#about">
          About
        </a>

        <a href="/#projects">
          Projects
        </a>

        <a href="/#skills">
          Skills
        </a>

        <a href="/#experience">
          Experience
        </a>

        <a href="/#proof">
          Proof
        </a>

        <a href="/#contact">
          Contact
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>

      </div>

    </nav>
  )
}

export default Navbar