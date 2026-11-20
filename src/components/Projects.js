
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Calculator",
    description: "A simple and interactive calculator with basic arithmetic operations.",
    tech: ["HTML", "CSS", "JavaScript","Next.js"],
    github: "https://github.com/aishwarya0750/calculator.git",
    number: "01",
  },
  {
    title: "Digital Clock",
    description: "A digital clock displaying real-time hours, minutes and seconds.",
    tech: ["HTML", "CSS", "JavaScript","Next.js"],
    github: "https://github.com/aishwarya0750/digital-clock.git",
    number: "02",
  },
  {
    title: "Personal Profile",
    description: "A personal profile website showcasing information and skills.",
    tech: ["HTML", "CSS", "JavaScript","Next.js"],
    github: "https://github.com/aishwarya0750/personal-profile.git",
    number: "03",
  },
  {
    title: "Shopping Cart",
    description: "An interactive shopping cart with product selection and cart management.",
    tech: ["React", "JavaScript", "CSS","Next.js"],
    github: "https://github.com/aishwarya0750/shopping-cart.git",
    number: "04",
  },
  {
    title: "Student Management",
    description: "A student management application to add, update and delete student records.",
    tech: ["React", "JavaScript", "CSS","Next.js"],
    github: "https://github.com/aishwarya0750/student-management.git",
    number: "05",
  },
  {
    title: "Weather App",
    description: "A weather application that displays weather information for searched cities.",
    tech: ["React", "API", "CSS","Next.js"],
        github: "https://github.com/aishwarya0750/weather-app.git",
    number: "06",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <span>MY RECENT WORK</span>
        <h2>My <span>Projects</span></h2>
        <p>Some projects I have created while learning and building.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
          >
            <div className="project-top">
              <div className="project-icon">
                <Code2 size={26} />
              </div>
              <span>{project.number}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <Code2 size={17} />
              View on GitHub
              <ExternalLink size={15} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
