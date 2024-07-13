/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import { AxiosResponse } from "axios";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

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
        const progressCircle = document.getElementById("circularProgress");
        if (progressCircle) progressCircle.style.display = "none";
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
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Typography variant='body2' gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              Maintenance Timestamps:
            </Typography>
            <Stack direction='column' spacing={0.5} sx={{ ml: 0.5 }} useFlexGap>
              <CircularProgress id='circularProgress' size={20} sx={{ ml: 5, mt: 3 }} />
              <Typography variant='body2' sx={{ color: "grey.300" }} align='left' id='resumeUpdateTime' />
              <Typography variant='body2' sx={{ color: "grey.300" }} align='left' id='websiteUpdateTime' />
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant='body2' sx={{ fontWeight: "medium" }}>
            Contact
          </Typography>
          <Typography color='text.secondary' variant='body2'>
            xl3139@nyu.edu
          </Typography>
          <Typography color='text.secondary' variant='body2'>
            xl3139@stern.nyu.edu
          </Typography>
          <Typography color='text.secondary' variant='body2'>
            nigellu@outlook.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant='body2' sx={{ fontWeight: "medium" }}>
            Links
          </Typography>
          <Link color='text.secondary' variant='body2' href='https://haorui.li'>
            Harry Lee
          </Link>
          <Link color='text.secondary' variant='body2' href='https://victor-wang-902.github.io'>
            Victor Wang
          </Link>
          <Link color='text.secondary' variant='body2' href='https://hmdliu.site'>
            Hammond Liu
          </Link>
          <Link color='text.secondary' variant='body2' href='https://mstxy.github.io'>
            William Zhang
          </Link>
          <Link color='text.secondary' variant='body2' href='https://sctyang.com'>
            Scottie Yang
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant='body2' sx={{ fontWeight: "medium" }}>
            Legal
          </Typography>
          <Link color='text.secondary' variant='body2' href='#'>
            Terms
          </Link>
          <Link color='text.secondary' variant='body2' href='#'>
            Privacy
          </Link>
          <Link color='text.secondary' variant='body2' href='#'>
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          pt: { xs: 1, sm: 2 },
          pb: { xs: 1.5, sm: 3 },
          justifyContent: "space-between",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack direction='row' style={{ marginTop: "0.6rem" }}>
          <PersonalIcon />
          <div>
            <Link
              target='_blank'
              variant='body1'
              sx={{ fontWeight: 600, ml: -4 }}
              href='https://raw.githubusercontent.com/NigelLu/Resumes/master/resumeLatest.docx'
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
    </Container>
  );
}
