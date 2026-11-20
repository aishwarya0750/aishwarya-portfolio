
"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-bg-circle circle-one"></div>
      <div className="hero-bg-circle circle-two"></div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">
            <span className="online-dot"></span>
            Available for opportunities
          </span>

          <h1>
            Hi, I'm <span>Aishwarya Patil</span>
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p>
            I build responsive and interactive web applications
            using modern web technologies. I enjoy turning ideas
            into practical digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects
            </a>

            <a href="/resume.pdf" download className="secondary-btn">
              <Download size={17} />
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/aishwarya0750"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <Code2 />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.7, rotateY: 25 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="profile-orbit orbit-one"></div>
        <div className="profile-orbit orbit-two"></div>

        <div className="profile-card">
          <div className="profile-glow"></div>

          <img
            src="/profile.png"
            alt="Aishwarya Patil"
            className="profile-image"
          />

          <div className="profile-card-info">
            <span>DEVELOPER PORTFOLIO</span>
            <h3>Aishwarya Patil</h3>
            <p>Creative Developer</p>
          </div>
        </div>

        <div className="floating-badge badge-one">⚛ React</div>
        <div className="floating-badge badge-two">⌘ JavaScript</div>
        <div className="floating-badge badge-three">✦ Next.js</div>
      </motion.div>

      <a href="#about" className="scroll-down">
        <ArrowDown size={18} />
        Scroll to explore
      </a>
    </section>
  );
}
