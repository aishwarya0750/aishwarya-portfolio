
"use client";

import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science (BCS)",
    college: "New College, Kolhapur",
    university: "Shivaji University, Kolhapur",
    duration: "2024 – 2027",
    status: "Final Year",
    description:
      "Studying programming, web development, databases and computer science concepts.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    college: "Bhogawati Mahavidyalaya Kurukali",
    university: "Maharashtra State Board",
    duration: "2023-2024",
    status: "Completed",
    description: "Completed higher secondary education with 61.50%.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    college: "Vidya Mandir Kothali",
    university: "Maharashtra State Board",
    duration: "2021-2022",
    status: "Completed",
    description: "Completed secondary education with 89.20%.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-heading">
        <span>MY ACADEMIC BACKGROUND</span>
        <h2>My <span>Education</span></h2>
        <p>My educational journey and qualifications</p>
      </div>

      <div className="education-list">
        {education.map((item, index) => (
          <motion.div
            className="education-card"
            key={item.degree}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="education-icon">
              <GraduationCap size={28} />
            </div>

            <div className="education-content">
              <div className="education-top">
                <span className="education-status">{item.status}</span>
                <span className="education-date">
                  <CalendarDays size={15} />
                  {item.duration}
                </span>
              </div>

              <h3>{item.degree}</h3>
              <h4>{item.college}</h4>

              <p className="education-university">
                <MapPin size={15} />
                {item.university}
              </p>

              <p className="education-description">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
