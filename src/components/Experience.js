

"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle,
} from "lucide-react";

export default function Experience() {
  const technologies = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Git",
    "GitHub",
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <span>MY LEARNING JOURNEY</span>
        <h2>My <span>Training</span></h2>
        <p>My web development learning and practical experience</p>
      </div>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="experience-header">
          <div className="experience-icon">
            <BriefcaseBusiness size={30} />
          </div>

          <div>
            <h3>MERN Stack Development Course</h3>
            <h4>Web Development Training</h4>
          </div>

          <span className="experience-badge">Course Completed</span>
        </div>

        <div className="experience-details">
          <span>
            <CalendarDays size={16} />
            Course Completed
          </span>

          <span>
            <MapPin size={16} />
            Offline / Practical Learning
          </span>
        </div>

        <div className="experience-divider"></div>

        <h4 className="experience-subtitle">
          What I Learned & Practiced
        </h4>

        <ul className="experience-list">
          <li>
            <CheckCircle size={17} />
            Learned HTML, CSS and JavaScript for frontend development.
          </li>
          <li>
            <CheckCircle size={17} />
            Developed interactive user interfaces using React.js.
          </li>
          <li>
            <CheckCircle size={17} />
            Practiced React Hooks, components and state management.
          </li>
          <li>
            <CheckCircle size={17} />
            Learned Node.js and Express.js for backend development.
          </li>
          <li>
            <CheckCircle size={17} />
            Practiced REST APIs, CRUD operations and database connectivity.
          </li>
          <li>
            <CheckCircle size={17} />
            Used Git and GitHub for version control and project management.
          </li>
        </ul>

        <h4 className="experience-subtitle">Technologies Learned</h4>

        <div className="experience-tech">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
