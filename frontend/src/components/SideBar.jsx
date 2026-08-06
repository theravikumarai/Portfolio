import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Link from "@mui/material/Link";
import { IoClose } from "react-icons/io5";

export default function SwipeableTemporaryDrawer({ showSidePanel, setShowSidePanel }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(showSidePanel);
  }, [showSidePanel]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setShowSidePanel(newOpen);
  };

  const handleNavClick = (path) => {
    toggleDrawer(false)();
  
    const id = path.replace("/#", "");
    const element = document.getElementById(id);
  
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const list = (
    <Box
      className="mobile-nav"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {[
        { label: "About", path: "/#about" },
        { label: "Proficiencies", path: "/#proficiencies" },
        { label: "Projects", path: "/#projects" },
        { label: "Certifications", path: "/#certifications" },
        { label: "Other Platforms", path: "/#other-platforms" },
        { label: "Contact", path: "/#contacts" },
      ].map((item) => (
        <Link
          key={item.label}
          href=""
          className="mobile-nav__link"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(item.path);
          }}
        >
          {item.label}
        </Link>
      ))}
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      PaperProps={{ className: "mobile-drawer" }}
    >
      <Box className="sidebar-close-btn" onClick={toggleDrawer(false)}>
        <IoClose />
      </Box>
      {list}
    </SwipeableDrawer>
  );
}
