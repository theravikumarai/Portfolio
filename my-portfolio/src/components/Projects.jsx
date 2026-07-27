import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaArrowRight, FaCheck, FaCodeBranch, FaGithub, FaPlay, FaXmark } from "react-icons/fa6";
import { PROJECTS } from "../config/constants.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(() => {
    const projectContainer = projectRef.current;
    const heading = projectContainer?.querySelector(".section_heading");
    const captionText = projectContainer?.querySelector(".section_text_p1");
    const projectCards = projectContainer?.querySelectorAll(".project-card");

    if (!projectContainer || !heading || !captionText) return undefined;

    const timeline = gsap.timeline({
      scrollTrigger: { trigger: projectContainer, start: "top 80%", toggleActions: "play none none none" },
    });

    timeline
      .from(heading, { opacity: 0, y: 30, duration: 0.6 })
      .from(captionText, { opacity: 0, y: 24, duration: 0.55 }, "<")
      .from(projectCards, { opacity: 0, y: 30, duration: 0.6, stagger: 0.18 });

    return () => timeline.kill();
  }, { scope: projectRef });

  return (
    <Box ref={projectRef} component="section" id="projects" className="portfolio-section">
      <Typography variant="caption" className="section_text_p1">Products I&apos;ve built with real-world impact</Typography>
      <Typography variant="h3" className="section_heading">Featured Projects</Typography>

      <Box className="project-grid">
        {PROJECTS.map((item) => (
          <Card variant="outlined" className="project-card" key={item.id}>
            <Box className="project-image">
              {item.image}
              <Box className="project-image__overlay" />
              <Box className="project-card__badges">
                <span className="project-chip"><FaCodeBranch /> AI Product</span>
                <span className="project-chip project-chip--ready"><FaCheck /> Production ready</span>
              </Box>
              {item.demoLink ? (
                <a className="project-image__action" href={item.demoLink} target="_blank" rel="noopener noreferrer"><FaPlay /> View Demo</a>
              ) : (
                <button type="button" className="project-image__action" onClick={() => setSelectedProject(item)}>View Case Study <FaArrowRight /></button>
              )}
            </Box>

            <Box className="project-card__content">
              <Box className="project-card__intro">
                <Typography component="h3" className="project-card__title">{item.title}</Typography>
                <Typography className="project-card__summary">{item.summary}</Typography>
              </Box>

              <Box className="project-card__problem-line">
                <Typography component="span">Problem solved</Typography>
                <Typography component="p">{item.problem}</Typography>
              </Box>

              <Box className="project-card__snapshot">
                <Typography component="span">Built with</Typography>
                <Box className="project-card__techstack">
                  {item.techStack.slice(0, 6).map((tech) => <span key={tech} className="project-tech-pill">{tech}</span>)}
                </Box>
              </Box>

              <Box className="project-card__metrics" aria-label="Project highlights">
                {item.metrics.map((metric) => <span key={metric}>{metric}</span>)}
              </Box>

              <Box className="project-actions">
                {item.demoLink && <a className="view-project-btn" href={item.demoLink} target="_blank" rel="noopener noreferrer"><FaPlay /> Live Demo</a>}
                {!item.demoLink && <span className="view-project-btn view-project-btn--disabled">Demo coming soon</span>}
                <a className="view-project-btn view-project-btn--secondary" href={item.link} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                <button type="button" className="project-case-study__button" onClick={() => setSelectedProject(item)}>
                  Case study <FaArrowRight aria-hidden="true" />
                </button>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      <Dialog open={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} maxWidth="md" fullWidth PaperProps={{ className: "project-dialog" }}>
        {selectedProject && (
          <>
            <DialogTitle className="project-dialog__title">
              <span><small>Project case study</small>{selectedProject.title}</span>
              <IconButton onClick={() => setSelectedProject(null)} aria-label="Close case study"><FaXmark /></IconButton>
            </DialogTitle>
            <DialogContent className="project-dialog__content">
              <Typography className="project-dialog__summary">{selectedProject.summary}</Typography>
              <Box className="project-dialog__grid">
                <Box className="project-dialog__section project-dialog__section--problem">
                  <Typography component="h4">Problem solved</Typography>
                  <Typography component="p">{selectedProject.problem}</Typography>
                </Box>
                <Box className="project-dialog__section">
                  <Typography component="h4">Outcome</Typography>
                  <Typography component="p">{selectedProject.outcome}</Typography>
                </Box>
              </Box>
              <Box className="project-dialog__section">
                <Typography component="h4">Architecture</Typography>
                <Box className="project-architecture" aria-label={`${selectedProject.title} architecture`}>
                  {selectedProject.architecture.map((step, index) => (
                    <Box className="project-architecture__step" key={step}>
                      <span>{step}</span>
                      {index < selectedProject.architecture.length - 1 && <FaArrowRight aria-hidden="true" />}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box className="project-dialog__grid">
                <Box className="project-dialog__section">
                  <Typography component="h4">Key features</Typography>
                  <Box className="project-card__features">
                    {selectedProject.features.map((feature) => <span key={feature} className="project-feature-pill"><FaCheck /> {feature}</span>)}
                  </Box>
                </Box>
                <Box className="project-dialog__section">
                  <Typography component="h4">Tech stack</Typography>
                  <Box className="project-card__techstack">
                    {selectedProject.techStack.map((tech) => <span key={tech} className="project-tech-pill">{tech}</span>)}
                  </Box>
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
