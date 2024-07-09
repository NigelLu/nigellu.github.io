/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import { AxiosResponse } from "axios";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Instagram from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import client from "../lib/axios/index";
import PersonalIcon from "./PersonalIcon";

interface Repo {
  name: string;
  pushed_at: string;
}

export default function Footer() {
  React.useEffect(() => {
    client.get("https://api.github.com/users/NigelLu/repos").then((res: AxiosResponse) => {
      const repos: Repo[] = res.data;
      repos.forEach((repo) => {
        let target = null;
        switch (repo.name) {
          case "Resumes":
            target = document.getElementById("resumeUpdateTime");
            if (target && !target.childNodes.length)
              target.append(`Resume Last Updated: ${new Date(repo.pushed_at).toLocaleString()}`);
            break;
          case "nigellu.github.io":
            target = document.getElementById("websiteUpdateTime");
            if (target && !target.childNodes.length)
              target.append(`Website Last Updated: ${new Date(repo.pushed_at).toLocaleString()}`);
            break;
          default:
            break;
        }
      });
    });
  }, []);
  return (
    <Container
      id='contact & links'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          py: { xs: 1, sm: 2 },
          justifyContent: "space-between",
        }}
      >
        <Stack direction='row' style={{ marginTop: "0.6rem" }}>
          <PersonalIcon />
          <div>
            <Link
              target='_blank'
              variant='body1'
              sx={{ fontWeight: 600, ml: -4 }}
              href='https://raw.githubusercontent.com/NigelLu/Resumes/master/resume.pdf'
            >
              Resume
            </Link>
          </div>
        </Stack>
        <Typography variant='body2' sx={{ color: "grey.400", mt: 1.5, ml: -3 }} align='center'>
          {">"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for visiting my site&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}
        </Typography>
        <Stack direction='row' spacing={1} useFlexGap sx={{ justifyContent: "left", color: "text.secondary" }}>
          <IconButton
            color='inherit'
            href='https://github.com/NigelLu'
            aria-label='GitHub'
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color='inherit'
            href='https://instagram.com/lu_nigel'
            aria-label='Instagram'
            sx={{ alignSelf: "center" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color='inherit'
            href='https://www.linkedin.com/in/nigel-lu-6b854b1a2'
            aria-label='LinkedIn'
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: { xs: 1, sm: 2 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack direction='column' spacing={0.5} useFlexGap sx={{ ml: -3 }}>
          <Typography variant='body2' sx={{ color: "grey.300" }} align='center' id='resumeUpdateTime' />
          <Typography variant='body2' sx={{ color: "grey.300" }} align='center' id='websiteUpdateTime' />
        </Stack>
      </Box>
    </Container>
  );
}
