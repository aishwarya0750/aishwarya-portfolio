
"use client";

import { Code2, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Aishwarya<span>.</span>
          </a>
          <p>
            Building my skills, creating projects, and growing
            as a developer.
          </p>

          <a
            href="https://github.com/aishwarya0750E"
            target="_blank"
            rel="noreferrer"
            className="footer-github"
          >
            <Code2 size={18} />
            GitHub Profile
          </a>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-message">
          <h3>Let's Connect</h3>
          <p>
            Interested in working together or have an opportunity?
            Feel free to contact me.
          </p>
          <a href="#contact" className="footer-contact-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Aishwarya Patil. All rights reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to Top <ArrowUp size={16} />
        </a>
      </div>

      <p className="footer-made">
        Made with <Heart size={14} /> by Aishwarya
      </p>
    </footer>
  );
}
