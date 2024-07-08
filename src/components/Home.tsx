/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Typing from "./Typing";

export default function Home() {
  return (
    <Box
      id='home'
      sx={(theme) => ({
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: "40vh",
          pb: { xs: 4, sm: 6 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant='h1'
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Xiaochen&nbsp;Lu&nbsp;
            <Typography
              component='span'
              variant='h1'
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              (Nigel)
            </Typography>
          </Typography>
          <Typing
            s={[
              "I'm Xiaochen (Nigel)",
              "I belong to the <b><i>outdoor<i/><b/> ☀️",
              "I'm a <b><i>cyclist<i/><b/> 🚵‍♂️",
              "I'm a <b><i>civil aviation lover<i/><b/> ✈️",
            ]}
          />
        </Stack>
      </Container>
    </Box>
  );
}
