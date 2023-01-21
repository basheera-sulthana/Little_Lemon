import React from "react";

function NavBar() {
  return (
    <div>
      <header className="nav-header">
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#222629" }}
        >
          <a
            className="navbar-brand"
            href="/"
            style={{
              paddingLeft: "1%",
              color: "white",
              fontFamily: "Comic Sans MS",
              //fontSize: "200%",
            }}
          >
            Little Lemon
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="HomePage"
                  style={{ color: "white" }}
                >
                  AboutUS
                </a>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="Register"
                style={{ color: "white" }}
              >
                Bookings Page
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
