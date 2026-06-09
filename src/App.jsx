import {
  FaAws,
  FaDocker,
  FaLinux,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaServer,
  FaCloud,
  FaCodeBranch,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
} from "react-icons/si";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Kubernetes Monitoring Stack",
      desc: "Prometheus + Grafana monitoring setup with Kubernetes and Helm.",
    },

    {
      title: "Terraform AWS Infrastructure",
      desc: "Provisioned scalable AWS infrastructure using Terraform IaC.",
    },

    {
      title: "CI/CD Automation",
      desc: "Automated deployment pipeline using Jenkins, Docker and GitHub Actions.",
    },
  ];

  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 lg:px-12 py-6">

          <h1 className="text-3xl font-bold text-cyan-400">
            NJ
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 uppercase text-sm">

            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400"
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400"
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* Mobile Menu */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (

          <div className="md:hidden bg-[#111] px-8 py-6 space-y-6 uppercase text-sm">

            {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (

              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block cursor-pointer hover:text-cyan-400"
              >
                {item}
              </Link>

            ))}

          </div>

        )}

      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-8 lg:px-12 pt-40 pb-52"
      >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-cyan-400 uppercase tracking-[5px]"
        >
          Welcome To My Portfolio
        </motion.p>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.9] mt-6"
        >
          Building Reliable <br />
          Cloud Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-10 text-gray-400 text-xl leading-9 max-w-2xl"
        >
          I'm Nikita Jadhav, a DevOps & Cloud Engineer focused on AWS,
          Kubernetes, Docker, Terraform and cloud automation.
        </motion.p>

        <div className="mt-12 flex flex-wrap gap-6">

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="bg-cyan-400 text-black px-10 py-4 rounded-full font-bold cursor-pointer hover:scale-105 transition"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            download
            className="border border-cyan-400 px-10 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </a>

        </div>

      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-8 lg:px-12 pb-32">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center">

            <FaCloud size={45} className="mx-auto text-cyan-400 mb-5" />

            <h3 className="text-5xl font-bold mb-3">
              15+
            </h3>

            <p className="text-gray-400">
              Cloud Projects
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center">

            <FaServer size={45} className="mx-auto text-cyan-400 mb-5" />

            <h3 className="text-5xl font-bold mb-3">
              20+
            </h3>

            <p className="text-gray-400">
              Deployments
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center">

            <FaCodeBranch size={45} className="mx-auto text-cyan-400 mb-5" />

            <h3 className="text-5xl font-bold mb-3">
              10+
            </h3>

            <p className="text-gray-400">
              CI/CD Pipelines
            </p>

          </div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-8 lg:px-12 py-40"
      >

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div>

            <h2 className="text-6xl md:text-8xl font-bold leading-tight">
              Building <br />
              for the cloud.
            </h2>

          </div>

          <div>

            <p className="text-gray-400 text-xl leading-10">

              I'm <span className="text-cyan-400 font-bold">Nikita Jadhav</span>,
              a DevOps & Cloud Engineer focused on scalable,
              automated and production-ready infrastructure systems.

              <br /><br />

              My expertise includes AWS, Docker, Kubernetes,
              Terraform, Jenkins, Linux, GitHub Actions,
              Infrastructure as Code and CI/CD automation.

            </p>

          </div>

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-8 lg:px-12 py-40"
      >

        <h2 className="text-5xl md:text-7xl font-bold mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            {
              icon: <FaAws size={50} />,
              name: "AWS",
            },

            {
              icon: <FaDocker size={50} />,
              name: "Docker",
            },

            {
              icon: <SiKubernetes size={50} />,
              name: "Kubernetes",
            },

            {
              icon: <SiTerraform size={50} />,
              name: "Terraform",
            },

            {
              icon: <SiJenkins size={50} />,
              name: "Jenkins",
            },

            {
              icon: <FaLinux size={50} />,
              name: "Linux",
            },

            {
              icon: <FaGithub size={50} />,
              name: "GitHub",
            },

            {
              icon: <SiGithubactions size={50} />,
              name: "GitHub Actions",
            },

          ].map((skill) => (

            <motion.div
              whileHover={{ scale: 1.05 }}
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:-translate-y-3 transition duration-300"
            >

              <div className="text-cyan-400 mb-6">
                {skill.icon}
              </div>

              <h3 className="text-3xl font-bold">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Experience */}
      <section
        id="experience"
        className="max-w-7xl mx-auto px-8 lg:px-12 py-40"
      >

        <h2 className="text-5xl md:text-7xl font-bold mb-20">
          Experience
        </h2>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">

          <p className="text-cyan-400 mb-3">
            2025 - Present
          </p>

          <h3 className="text-4xl font-bold mb-5">
            DevOps & Cloud Engineer
          </h3>

          <p className="text-gray-400 text-lg leading-8">
            Working on AWS infrastructure, Kubernetes deployments,
            Docker containerization, CI/CD automation and monitoring systems.
          </p>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-8 lg:px-12 py-40"
      >

        <h2 className="text-5xl md:text-7xl font-bold mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project) => (

            <motion.div
              whileHover={{ y: -10 }}
              key={project.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 transition duration-300 hover:border-cyan-400"
            >

              <h3 className="text-3xl font-bold mb-6">
                {project.title}
              </h3>

              <p className="text-gray-400 text-lg leading-8">
                {project.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-8 lg:px-12 py-40"
      >

        <h2 className="text-5xl md:text-7xl font-bold mb-12">
          Contact
        </h2>

        {/* Working Contact Form */}
        <form
          action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
          method="POST"
          className="max-w-2xl"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 mb-6 bg-[#111] rounded-xl outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 mb-6 bg-[#111] rounded-xl outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-4 mb-6 bg-[#111] rounded-xl outline-none"
          ></textarea>

          <button className="bg-cyan-400 text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition">
            Send Message
          </button>

        </form>

        {/* Social Icons */}
        <div className="flex gap-6 mt-12">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={40}
              className="hover:text-cyan-400 transition"
            />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={40}
              className="hover:text-cyan-400 transition"
            />
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">

        © 2026 Nikita Jadhav. All rights reserved.

      </footer>

    </div>
  );
}

export default App;