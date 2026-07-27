import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { FaArrowRight, FaGithub, FaKaggle, FaLinkedin, FaMedium, FaYoutube } from "react-icons/fa6";
import { OTHER_PLATFORMS } from "../config/constants.jsx";
const platformIcons = { GitHub: FaGithub, Medium: FaMedium, LinkedIn: FaLinkedin, Kaggle: FaKaggle, Youtube: FaYoutube };
const OtherPlatform = () => {

return (
  <Box
    component="section"
    id="other-platforms"
    className="portfolio-section platforms-section"
  >
    <Typography variant="caption" className="section_text_p1">
      Beyond the portfolio
    </Typography>

    <Typography variant="h3" className="section_heading">
      Explore My Work
    </Typography>

    <Typography component="p" className="platforms-intro">
      Explore my open-source projects, technical articles, machine learning
      notebooks, and professional journey across the platforms where I actively
      build, learn, and share.
    </Typography>

    <Box className="platform-grid">
      {OTHER_PLATFORMS.map((item) => {
        const Icon = platformIcons[item.title];

        return (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="platform-link"
          >
            <Card variant="outlined" className="subdetail_container platform-card">
              <Box className="platform-media">
                  <img
                      src={item.image}
                      alt={item.title}
                      className="platform-image"
                  />
              </Box>

              <Box className="platform-card__content">
                <Typography component="h3" className="platform-card__title">
                  {item.title}
                </Typography>

                <Typography component="p" className="platform-card__description">
                  {item.description}
                </Typography>

                <span className="platform-card__action">
                  {item.cta} <FaArrowRight />
                </span>
              </Box>
            </Card>
          </a>
        );
      })}
    </Box>
  </Box>
);
};

export default OtherPlatform;