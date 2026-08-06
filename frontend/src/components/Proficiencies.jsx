import { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PROFICIENCIES } from "../config/constants.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBrain, FaChartLine, FaCloud, FaRobot, FaServer, FaShieldHalved, FaDiagramProject, FaMicrochip, FaCubes,} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const skillIcons = {
  1: FaBrain,
  2: FaRobot,
  3: FaChartLine,
  4: FaServer,
  5: FaCloud,
  6: FaShieldHalved,
  7: FaShieldHalved,
  8: FaMicrochip,
  9: FaCubes,
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
        AI Engineering Expertise
      </Typography>
      <Typography component="p" className="expertise-intro">
        Building intelligent applications with Machine Learning, Generative AI, Multi-Agent Systems, Cloud and Production AI.
      </Typography>

      <Box className="skills-grid">
        {PROFICIENCIES?.details.map((item) => {
          const Icon = skillIcons[item.id];
          return (
          <Box
  component="article"
  key={item.id}
  className={`skill-card skill-card-${item.id}`}
>
            <Box className="skill-card__header">
              <Box className="skill-card__icon" aria-hidden="true"><Icon /></Box>
              {/* <span className="skill-card__count">Core</span> */}
              <span className="skill-card__count">{item.level}</span>
            </Box>
            <Typography component="h3" className="skill-card__title">{item?.title}</Typography>
            <Typography component="p" className="skill-card__label"></Typography>
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
        <span>SPECIALIZING IN</span>
        <p><b></b><b></b> AI System Design <b>✓</b> Multi-Agent Architectures<b>✓</b></p>
      </Box>
    </Box>
  );
};

export default Proficiencies;
