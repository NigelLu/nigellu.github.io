/** @format */

"use client";

import Image from "next/image";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Chip as MuiChip } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

const items = [
  {
    icon: <SchoolIcon />,
    title: "Education",
    description: "All my education experiences",
  },
  {
    icon: <WorkIcon />,
    title: "Professional",
    description: "All my professional experiences",
  },
  {
    icon: <AudiotrackIcon />,
    title: "Misc",
    description: "My other experiences I wanna share",
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background: "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color: "hsl(0, 0%, 100%)",
        borderColor: theme.palette.primary.light,
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)",
        },
        ...theme.applyStyles("dark", {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}));

export default function Experience() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id='experience' sx={{ py: { xs: 4, sm: 8 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component='h2' variant='h4' sx={{ color: "text.primary", mb: { xs: 2, sm: 4 } }}>
              Experience
            </Typography>
          </div>
          <Grid container item sx={{ gap: 1, display: { xs: "auto", sm: "none" } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                selected={selectedItemIndex === index}
              />
            ))}
          </Grid>
          <Card variant='outlined' sx={{ display: { xs: "auto", sm: "none" }, mt: 4 }}>
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography gutterBottom sx={{ color: "text.primary", fontWeight: "medium" }}>
                {selectedFeature.title}
              </Typography>
              <Typography variant='body2' sx={{ color: "text.secondary", mb: 1.5 }}>
                {selectedFeature.description}
              </Typography>
            </Box>
          </Card>
          <Stack
            direction='column'
            spacing={2}
            useFlexGap
            sx={{
              justifyContent: "center",
              alignItems: "flex-start",
              width: "100%",
              display: { xs: "none", sm: "flex" },
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 3,
                    height: "fit-content",
                    width: "100%",
                    background: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)",
                      borderColor: "primary.light",
                      boxShadow: "0px 2px 8px hsla(0, 0%, 0%, 0.1)",
                      ...theme.applyStyles("dark", {
                        background:
                          "linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)",
                        borderColor: "primary.dark",
                        boxShadow: "0px 1px 8px hsla(210, 100%, 25%, 0.5) ",
                      }),
                    },
                  }),
                  selectedItemIndex === index &&
                    ((theme) => ({
                      backgroundColor: "action.selected",
                      borderColor: "primary.light",
                      ...theme.applyStyles("dark", {
                        borderColor: "primary.dark",
                      }),
                    })),
                ]}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={[
                      (theme) => ({
                        color: "grey.400",
                        ...theme.applyStyles("dark", {
                          color: "grey.600",
                        }),
                      }),
                      selectedItemIndex === index && {
                        color: "primary.main",
                      },
                    ]}
                  >
                    {icon}
                  </Box>
                  <div>
                    <Typography gutterBottom sx={{ color: "text.primary", fontWeight: "medium" }}>
                      {title}
                    </Typography>
                    <Typography variant='body2' sx={{ color: "text.secondary", mb: 1.5 }}>
                      {description}
                    </Typography>
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}>
          <Card
            variant='outlined'
            sx={{
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={(theme) => ({
                width: 400,
                height: 550,
                backgroundSize: "contain",
                backgroundImage: "var(--items-imageLight)",
                ...theme.applyStyles("dark", {
                  backgroundImage: "var(--items-imageDark)",
                }),
              })}
            >
              <Image src='/experiences/resume.png' width={1378} height={1800} alt='Resume' />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
