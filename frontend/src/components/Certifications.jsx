import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { FaArrowUpRightFromSquare, FaAward } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CERTIFICATIONS } from "../config/constants.jsx";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import './profifciencies.css'



gsap.registerPlugin(ScrollToPlugin);

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const platformRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);



  useGSAP(() => {
    const caption = platformRef.current.querySelector('.section_text_p1');
    const heading = platformRef.current.querySelector('.section_heading');
    const subDetailBox = platformRef.current.querySelectorAll('.cert-card');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: platformRef.current,
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none none",
      }
    });

    tl.from(caption, { opacity: 0, y: 30, duration: 0.6 })
      .from(heading, { opacity: 0, y: 30, duration: 0.6 })
      .from(subDetailBox, { opacity: 0, y: 30, duration: 0.6, stagger: 0.2 });

  }, { scope: platformRef });

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "24px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerPadding: "16px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        }
      }
    ]
  };

  return (
    <Box ref={platformRef} component="section" className="certifications-section" id="certifications">
      <Typography className="section_text_p1" variant="caption">
        CONTINUOUS LEARNING • PROFESSIONAL GROWTH
      </Typography>
      <Typography className="section_heading" variant="h3">
        Achievements & Certifications
      </Typography>
      <Typography component="p" className="certifications-intro">
        Continuous learning through industry-recognized certifications in AI, cloud, data science, and software engineering.
      </Typography>


      <Box className="certifications-carousel">
        <Slider {...settings}>
          {CERTIFICATIONS.map((cert, index) => (
            <Card key={index} className="cert-card">
              <Box className="cert-card__media-wrap">
                <span className="cert-card__credential"><FaAward /> Credential</span>
                <CardMedia component="img" image={cert.image} alt={cert.title} className="cert-card__media" />
              </Box>
              <CardContent className="cert-card__content">
                <Typography variant="h6" className="cert-card__title">
                  {cert.title}
                </Typography>
                <Typography variant="body2" className="cert-card__platform">
                  {cert.platform}
                </Typography>
                <Button size="small" className="cert-card__button" onClick={() => handleOpen(cert)} endIcon={<FaArrowUpRightFromSquare />}>
                  View credential
                </Button>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedCert?.title}</DialogTitle>
        <DialogContent>
          <img src={selectedCert?.image} alt={selectedCert?.title} className="cert-dialog__image" />
          <Typography variant="body1" gutterBottom>
            {selectedCert?.description || "This certification demonstrates my understanding and completion of a professional-level course."}
          </Typography>
          <Box className="cert-dialog__actions">
            <Button onClick={handleClose} variant="outlined">
              Close
            </Button>
            {selectedCert?.link && (
              <Button variant="contained" color="primary" href={selectedCert.link} target="_blank" rel="noopener noreferrer">
                Open Certificate
              </Button>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Certifications;
