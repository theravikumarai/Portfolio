import { createElement, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import { FaBolt, FaBriefcase, FaEnvelope, FaLocationDot, FaPaperPlane } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  { icon: FaLocationDot, label: "Based in", value: "Pune, India" },
  { icon: FaEnvelope, label: "Email", value: "raviikrds@gmail.com", href: "mailto:raviikrds@gmail.com" },
  { icon: FaBriefcase, label: "Availability", value: "Open to work" },
  { icon: FaBolt, label: "Response time", value: "Replies within 24 hrs" },
];

const Contacts = () => {
  const contactRef = useRef(null);
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  useGSAP(() => {
    const contactContainer = contactRef.current;
    const heading = contactContainer?.querySelector(".section_heading");

    if (!contactContainer || !heading) return undefined;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: contactContainer,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    timeline.from(heading, { opacity: 0, y: 30, duration: 0.6 });
    return () => timeline.kill();
  }, []);

  const handleChange = (event) => {
    setContactInfo((currentInfo) => ({ ...currentInfo, [event.target.id]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await axios.post(
        "https://q9078pp8b7.execute-api.ap-south-1.amazonaws.com/prod/api/v1/contact",
        contactInfo,
      );
      if (response.status >= 200 && response.status < 300) {
        setStatus("Message sent successfully! I’ll get back to you soon.");
        setContactInfo({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred while sending the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box ref={contactRef} component="section" id="contacts" className="contact-section">
      <Typography variant="caption" className="section_text_p1">Let&apos;s Connect</Typography>
      <Typography variant="h3" className="section_heading">Contact Me</Typography>

      <Box className="contact-container">
        <Box className="contact-intro">
          <span className="contact-eyebrow">Open to Opportunities</span>
          <Typography component="h3" className="contact-title">Let&apos;s Build Something Amazing Together</Typography>
          <Typography className="contact-copy">
            Looking for an AI Engineer or interested in collaborating on innovative AI solutions? I'd love to hear from you.
          </Typography>
          <Box className="contact-details" component="ul">
            {contactDetails.map(({ icon, label, value, href }) => (
              <Box component="li" className="contact-detail" key={label}>
                <span className="contact-detail__icon" aria-hidden="true">{createElement(icon)}</span>
                <span>
                  <span className="contact-detail__label">{label}</span>
                  {href ? <a className="contact-detail__value" href={href}>{value}</a> : <span className="contact-detail__value">{value}</span>}
                </span>
              </Box>
            ))}
          </Box>
        </Box>

        <Box component="form" className="contact-card contact-form" onSubmit={handleSubmit}>
          <Box className="contact-form__heading">
            <Typography component="h3">Get in Touch</Typography>
          </Box>
          <TextField id="name" label="Your Name" autoComplete="name" value={contactInfo.name} onChange={handleChange} fullWidth required className="contact-field" />
          <TextField id="email" label="Email Address" type="email" autoComplete="email" value={contactInfo.email} onChange={handleChange} fullWidth required className="contact-field" />
          <TextField id="message" label="Message" multiline rows={5} value={contactInfo.message} onChange={handleChange} fullWidth required className="contact-field" />
          <Button type="submit" className="contact-submit" variant="contained" disabled={isSubmitting} endIcon={<FaPaperPlane />}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          {status && <Typography role="status" className={status.includes("success") ? "contact-status contact-status--success" : "contact-status contact-status--error"}>{status}</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
