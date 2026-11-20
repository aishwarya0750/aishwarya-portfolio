
"use client";

import { motion } from "framer-motion";
import { User, Code, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-heading">
          <span>GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
          <p>A little introduction about myself</p>
        </div>

        <div className="about-container">
          <div className="about-card">
            <div className="about-icon">
              <User size={28} />
            </div>

            <h3>Who Am I?</h3>

            <p>
              Hello! I'm Aishwarya Patil, a Computer Science
              graduate-in-progress and passionate Full Stack
              Developer from Kolhapur, Maharashtra.
            </p>

            <p>
              I enjoy creating responsive websites and web
              applications. I have experience working with
              React, Next.js, JavaScript and database technologies.
              I am continuously learning and improving my skills
              through practical projects.
            </p>
          </div>

          <div className="about-info">
            <div className="info-card">
              <Code size={28} />
              <div>
                <h3>6+ Projects</h3>
                <p>Personal web development projects</p>
              </div>
            </div>

            <div className="info-card">
              <GraduationCap size={28} />
              <div>
                <h3>Computer Science</h3>
                <p>BCS – Final Year</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
