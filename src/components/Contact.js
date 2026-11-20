
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Code2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Unable to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <span>LET'S CONNECT</span>
        <h2>Contact <span>Me</span></h2>
        <p>Have a project or opportunity? Feel free to contact me.</p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Let's Talk</h3>

          <p>
            I'm open to learning opportunities, internships and
            entry-level developer roles. Let's connect!
          </p>

          <div className="contact-detail">
            <Mail />
            <div>
              <h4>Email</h4>
              <p>aishwaryapatil0750@gmail.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <MapPin />
            <div>
              <h4>Location</h4>
              <p>Kolhapur, Maharashtra, India</p>
            </div>
          </div>

          <a
            href="https://github.com/aishwarya0750"
            target="_blank"
            rel="noreferrer"
            className="contact-github"
          >
            <Code2 />
            Visit My GitHub
          </a>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            maxLength={100}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            maxLength={150}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            maxLength={200}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            maxLength={5000}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
            <Send size={17} />
          </button>

          {status && <p className="contact-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
