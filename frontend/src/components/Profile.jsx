import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { TbDownload } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaKaggle, FaTrophy } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";
import gsap from "gsap";
import ProfileImg from "../assets/profile.png";

const roles = ["AI Products", "Production AI Systems", "Generative AI Applications", "LLM Solutions"];

const socialLinks = [
  { href: "https://github.com/theravikumarai", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/theravikumarai/", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://theravikumarai.medium.com/", label: "Medium", icon: FaMedium },
  { href: "https://www.kaggle.com/theravikumarai", label: "Kaggle", icon: FaKaggle },
  { href: "https://huggingface.co/theravikumarai", label: "HuggingFace", icon: SiHuggingface },
  { href: "mailto:theravikumarai@gmail.com", label: "Email", icon: FaEnvelope },
];

const Profile = ({ timeline }) => {
  const profileRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      const profilePic = profileRef.current?.querySelector(".profile-card__image");
      const badge = profileRef.current?.querySelector(".profile-badge");
      const greetingText = profileRef.current?.querySelector(".profile-greeting");
      const profileName = profileRef.current?.querySelector(".profile-name");
      const roleText = profileRef.current?.querySelector(".profile-role");
      const description = profileRef.current?.querySelector(".profile-description");
      const actions = profileRef.current?.querySelector(".profile-actions");
      const socialLinkItems = profileRef.current?.querySelectorAll(".profile-social-link");
      const resumeIcon = profileRef.current?.querySelector(".resume-icon");
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!profilePic || !badge || !greetingText || !profileName || !roleText || !description || !actions || !resumeIcon) {
        return;
      }

      if (prefersReducedMotion) {
        gsap.set([badge, greetingText, profileName, roleText, description, actions, ...Array.from(socialLinkItems || [])], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      timeline.from(
        profilePic,
        {
          opacity: 0,
          duration: 0.6,
          scale: 0.95,
          y: 20,
        },
        "-=0.2"
      );

      timeline.from([badge, greetingText], {
        opacity: 0,
        y: 16,
        duration: 0.45,
      });

      timeline.from([profileName, roleText], {
        opacity: 0,
        y: 18,
        duration: 0.55,
      });

      timeline.from(description, {
        opacity: 0,
        y: 18,
        duration: 0.5,
      });

      timeline.from(actions, {
        opacity: 0,
        y: 16,
        duration: 0.45,
      });

      timeline.from(Array.from(socialLinkItems || []), {
        opacity: 0,
        y: 10,
        duration: 0.35,
        stagger: 0.08,
      });

      gsap.fromTo(
        resumeIcon,
        { y: -4 },
        {
          y: 4,
          duration: 0.9,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    },
    { scope: profileRef, dependencies: [timeline] }
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Frontend/public/RAVI_KUMAR_RESUME.pdf";
    link.download = "RAVI_KUMAR_RESUME.pdf";
    link.click();
  };

  return (
    <section ref={profileRef} id="profile" className="profile-hero" aria-labelledby="profile-title">
      <div className="profile-hero__content">
        <span className="profile-badge"><span className="profile-badge__dot" aria-hidden="true" /> Available for AI / ML opportunities</span>
        <p className="profile-greeting">Hello, I&apos;m</p>
        <h1 id="profile-title" className="profile-name">
          Ravi Kumar
        </h1>
        <div className="profile-role-wrap">
          <span className="profile-role-label">I build</span>
          <span className="profile-role" aria-live="polite">
            {roles[roleIndex]}
          </span>
        </div>
        <p className="profile-description">
          I build production-ready AI products with Machine Learning, DL, NLP, LLMs, and cloud engineering.
        </p>

        <p className="profile-achievement"><FaTrophy aria-hidden="true" /> Top 9 Finalist - Google Cloud Agentic AI Hackathon 2025</p>

        <div className="profile-actions">
          <a className="profile-btn profile-btn--primary" href="#projects">
            View Projects
          </a>
          <button type="button" className="profile-btn profile-btn--secondary" onClick={handleDownload} aria-label="Download Ravi Kumar resume">
            <TbDownload className="resume-icon" />
            <span>Download Resume</span>
          </button>
        </div>

        <ul className="profile-social" aria-label="Social links">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.label}>
                <a className="profile-social-link" href={link.href} target="_blank" rel="noreferrer noopener" aria-label={link.label}>
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="profile-hero__visual">
        <div className="profile-image-float">
          <div className="profile-card__image">
            <img src={ProfileImg} alt="Portrait of Ravi Kumar" className="profile-pic-img" width="640" height="640" loading="eager" decoding="async" />
          </div>
        </div>
        <div className="profile-highlight-card" aria-label="Career highlight">
          <div className="profile-highlight-card__metric">
            <strong>5+ years</strong>
            <span>Years Experience</span>
          </div>
          <p>Building AI solutions for production systems.</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
