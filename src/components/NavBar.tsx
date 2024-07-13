/** @format */
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { PaletteMode } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import ToggleColorMode from "./ToggleColorMode";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import PersonalIcon from "./PersonalIcon";

interface NavBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

const capitalize: (s: string) => string = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const navBarItems = ["home", "experience", "resume", "contact & links"];

export default function NavBar({ mode, toggleColorMode }: NavBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "resume") {
      window.open("https://raw.githubusercontent.com/NigelLu/Resumes/master/resumeLatest.docx");
      return;
    }
    const sectionElement = document.getElementById(sectionId);
    const offset = 64;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <AppBar position='fixed' sx={{ boxShadow: 0, bgcolor: "transparent", backgroundImage: "none", mt: 2 }}>
      <Container maxWidth='lg'>
        <Toolbar
          variant='regular'
          sx={(theme) => ({
            flexShrink: 0,
            maxHeight: 40,
            display: "flex",
            border: "1px solid",
            alignItems: "center",
            borderRadius: "999px",
            borderColor: "divider",
            backdropFilter: "blur(24px)",
            justifyContent: "space-between",
            bgcolor: "hsla(220, 60%, 99%, 0.6)",
            boxShadow: "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)",
            ...theme.applyStyles("dark", {
              bgcolor: "hsla(220, 0%, 0%, 0.7)",
              boxShadow: "0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)",
            }),
          })}
        >
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}>
            <PersonalIcon />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navBarItems.map((ele) => (
                <Button key={ele} variant='text' color='info' size='small' onClick={() => scrollToSection(ele)}>
                  {capitalize(ele)}
                </Button>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton aria-label='Menu button' onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                {navBarItems.map((ele) => (
                  <MenuItem key={ele} onClick={() => scrollToSection(ele)}>
                    {capitalize(ele)}
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
