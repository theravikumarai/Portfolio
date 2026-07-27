import { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PROFICIENCIES } from "../config/constants.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBrain, FaChartLine, FaCloud, FaRobot, FaServer, FaShieldHalved } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const skillIcons = {
  1: FaBrain,
  2: FaRobot,
  3: FaChartLine,
  4: FaServer,
  5: FaCloud,
  6: FaShieldHalved,
};

const Proficiencies = () => {
  const proficienciesRef = useRef(null);

  useGSAP(() => {
    const proficienciesContainer = proficienciesRef.current;
    const heading = proficienciesRef.current?.querySelector(".section_heading");
    const captionText = proficienciesRef.current?.querySelector(".section_text_p1");
    const skillCards = proficienciesRef.current?.querySelectorAll(".skill-card");

    if (!proficienciesContainer || !heading || !captionText) return undefined;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: proficienciesContainer,
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none none",
      },
    });

    timeline.from(heading, {
      opacity: 0,
      y: 30,
      duration: 0.6,
    })
      .from(captionText, {
        opacity: 0,
        y: 24,
        duration: 0.55,
      })
      .from(skillCards, {
        opacity: 0,
        y: 24,
        duration: 0.55,
        stagger: 0.12,
      });
    return () => timeline.kill();
  }, { scope: proficienciesRef });

  return (
    <Box ref={proficienciesRef} component="section" id="proficiencies" className="portfolio-section expertise-section">
      <Typography variant="caption" className="section_text_p1">
        AI Engineering · Data Science · Cloud
      </Typography>
      <Typography variant="h3" className="section_heading">
        Technical Expertise
      </Typography>
      <Typography component="p" className="expertise-intro">
        End-to-end expertise in designing, deploying, and scaling production-ready AI systems from machine learning models to cloud-native applications.
      </Typography>

      <Box className="skills-grid">
        {PROFICIENCIES?.details.map((item) => {
          const Icon = skillIcons[item.id];
          return (
          <Box component="article" key={item?.id} className="skill-card">
            <Box className="skill-card__header">
              <Box className="skill-card__icon" aria-hidden="true"><Icon /></Box>
              <span className="skill-card__count">Core</span>
            </Box>
            <Typography component="h3" className="skill-card__title">{item?.title}</Typography>
            <Typography component="p" className="skill-card__label">Core capabilities</Typography>
            {item.groups ? item.groups.map((group) => (
              <Box className="skill-card__group" key={group.label}>
                <span>{group.label}</span>
                <Box className="skill-card__badges">
                  {group.items.map((badge) => <span key={badge} className="skill-badge">{badge}</span>)}
                </Box>
              </Box>
            )) : (
              <Box className="skill-card__badges">
                {item?.badges?.map((badge) => <span key={badge} className="skill-badge">{badge}</span>)}
              </Box>
            )}
          </Box>
          );
        })}
      </Box>
      <Box className="learning-strip">
        <span>Currently exploring</span>
        <p><b>✓</b> Agentic AI <b>✓</b> LangGraph <b>✓</b> MCP <b>✓</b> AI Agents</p>
      </Box>
    </Box>
  );
};

export default Proficiencies;
