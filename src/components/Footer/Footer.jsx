import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">

          {/* Brand */}
          <div className="footer-col">
            <h2 className="footer-logo">Omega</h2>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding.
            </p>
          </div>

          {/* About */}
          <div className="footer-col">
            <h3>About</h3>
            <ul>
              <li>Our mission</li>
              <li>Our story</li>
              <li>Team Members</li>
            </ul>
          </div>

          {/* Learn */}
          <div className="footer-col">
            <h3>Learn</h3>
            <ul>
              <li>Tutorials</li>
              <li>How it works</li>
              <li>F.A.Q</li>
            </ul>
          </div>

          {/* Stories */}
          <div className="footer-col">
            <h3>Stories</h3>
            <ul>
              <li>Blog</li>
              <li>Tech stories</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3>Contact us</h3>
            <ul>
              <li>support@uxtheme.net</li>
              <li>+133-394-3439-1435</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Omega. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
