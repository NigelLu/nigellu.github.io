/** @format */
"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import { PaletteMode } from "@mui/material";
import Divider from "@mui/material/Divider";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import getLPTheme from "./getLPTheme";
import Home from "../components/Home";
import Blogs from "../components/Blogs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>(
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark",
  );
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Home />
      <Box sx={{ bgcolor: "background.default" }}>
        <Experience />
        <Divider />
        <Blogs />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
