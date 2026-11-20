
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Wrench
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    icon: Code2,
    skills: ["Node.js", "Express.js", "Java", "REST APIs"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <span>MY TECHNICAL EXPERTISE</span>
        <h2>My <span>Skills</span></h2>
        <p>Technologies and tools I work with</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="skill-icon">
                <Icon size={28} />
              </div>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
