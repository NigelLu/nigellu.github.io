/** @format */

"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import WorkIcon from "@mui/icons-material/Work";
import { Chip as MuiChip } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import SchoolIcon from "@mui/icons-material/School";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

const items = [
  {
    icon: <SchoolIcon />,
    title: "Education",
    description: (
      <>
        M.S. in Computer Science @NYU
        <br />
        B.S. in Data Science @NYU Shanghai
        <br />
      </>
    ),
    content: (
      <Card sx={{ width: "100%", overflowY: "scroll" }}>
        <CardMedia sx={{ height: "40%" }} image='/imgs/Wsq.jpg' title='Washington Square Park - Summer' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            New York University
          </Typography>
          <Stack direction='column' gap={1} sx={{ pb: 1 }}>
            <Typography variant='body2' color='text.secondary'>
              - <b>M.S. in Computer Science</b> (2023 - Present)
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              - Cumulative GPA: 3.95
            </Typography>
          </Stack>
          <Stack direction='column' gap={1} sx={{ pt: 1, borderTop: "1px solid", borderColor: "divider" }}>
            <Typography variant='body2' color='text.secondary'>
              - <b>B.S. in Data Science</b> (2019 - 2023)
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              - Double major in Business &amp; Finance, with a minor in Computer Science
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              - Cumulative GPA: 3.91; Major GPA: 3.97
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              - Honors: <i>Magna Cum Laude; NYU Honors Scholar; Dean&apos;s List 2019-2023</i>
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    ),
  },
  {
    icon: <WorkIcon />,
    title: "Professional",
    description: (
      <>
        Intern @NYC DDC
        <br />
        ex-Intern @eBay
        <br />
        ex-Software Engineer @Kaizntree
        <br />
        ex-Intern @Expsoft
      </>
    ),
    content: (
      <Card sx={{ width: "100%", overflowY: "scroll" }}>
        <CardMedia sx={{ height: "40%" }} image='/imgs/TheGetty.jpg' title='Sunset at the Getty Centre - LA' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Seeking 2025 Full-time
          </Typography>
          <Stack direction='column' gap={1} sx={{ pb: 1 }}>
            <Stack direction='row' gap={1} alignItems='center'>
              <Avatar sx={{ backgroundColor: "white" }} alt='NYC DDC' src='/imgs/NYC_DDC_Logo.png' />
              <Stack direction='column' gap={0.5}>
                <Typography variant='body2' color='text.secondary'>
                  <b>Department of Design and Construction (DDC), NYC Gov</b> (2024.06 - 2024.08)
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Software Engineer Intern
                </Typography>
              </Stack>
            </Stack>
            <Typography variant='body2' color='text.secondary'>
              Developed and optimized machine learning models (Azure ML Studio, PySpark) for predictive construction
              planning, and presented the results as a React app with Django to deliver data insights to 700+ non-data
              scientist users at DDC.
            </Typography>
          </Stack>
          <Stack direction='column' gap={1} sx={{ pb: 1 }}>
            <Stack direction='row' gap={1} alignItems='center'>
              <Avatar sx={{ backgroundColor: "white" }} alt='NYU' src='/imgs/NYU_Logo.jpg' />
              <Stack direction='column' gap={0.5}>
                <Typography variant='body2' color='text.secondary'>
                  <b>Nexus, New York University</b> (2024.01 - Present)
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Graduate Assistant
                </Typography>
              </Stack>
            </Stack>
            <Typography variant='body2' color='text.secondary'>
              Enhanced NYU SPS faculty&apos;s digital proficiency through workshops and data analysis, improving
              students&apos; learning outcomes and faculty satisfaction, while also making resource accessibility on the
              Nexus Wix site.
            </Typography>
          </Stack>
          <Stack direction='column' gap={1} sx={{ pb: 1 }}>
            <Stack direction='row' gap={1} alignItems='center'>
              <Avatar sx={{ backgroundColor: "white" }} alt='eBay' src='/imgs/eBay_Logo.png' />
              <Stack direction='column' gap={0.5}>
                <Typography variant='body2' color='text.secondary'>
                  <b>eBay Inc.</b> (2022.09 - 2023.08)
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Software Engineer Intern
                </Typography>
              </Stack>
            </Stack>
            <Typography variant='body2' color='text.secondary'>
              Drove innovative project initiatives (live cluster status monitoring), modernized UIs (encrypted password
              exchange system), and automated tasks (L7 rule configuration) for infrastructure engineering using React,
              Redux, Django, and PostgreSQL.
            </Typography>
          </Stack>
          <Stack direction='column' gap={1} sx={{ pb: 1 }}>
            <Stack direction='row' gap={1} alignItems='center'>
              <Avatar sx={{ backgroundColor: "white" }} alt='Kaizntree' src='/imgs/Kaizntree_Logo.jpg' />
              <Stack direction='column' gap={0.5}>
                <Typography variant='body2' color='text.secondary'>
                  <b>Kaizntree Co.</b> (2021.09 - 2022.03 &amp; 2023.09-2024.02)
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Full-stack Engineer
                </Typography>
              </Stack>
            </Stack>
            <Typography variant='body2' color='text.secondary'>
              Pioneered a small business management solution using Vue.js, Django, and PostgreSQL, reducing small
              business management time by over 85% (e.g., sync stock across sales channels, update/manage stock at
              different warehouses).
            </Typography>
          </Stack>
          <Stack direction='column' gap={1} sx={{ pb: 1 }}>
            <Stack direction='row' gap={1} alignItems='center'>
              <Avatar sx={{ backgroundColor: "white" }} alt='Expsoft' src='/imgs/Expsoft_Logo.png' />
              <Stack direction='column' gap={0.5}>
                <Typography variant='body2' color='text.secondary'>
                  <b>Expsoft LLC.</b> (2021.05 - 2021.09)
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Software Engineer Intern
                </Typography>
              </Stack>
            </Stack>
            <Typography variant='body2' color='text.secondary'>
              Developed customizable online auditing platforms for government use with Spring Boot and MySQL, which
              secured a $400,000 project from the Soochow government
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    ),
  },
  {
    icon: <AudiotrackIcon />,
    title: "Misc",
    description: (
      <>
        Volunteer @SteppingStones
        <br />
        Tech nerd @Tech
        <br />
        Bikoholic @Bike
      </>
    ),

    content: (
      <Card sx={{ width: "100%" }}>
        <CardMedia sx={{ height: "87.5%" }} image='/imgs/Flight.jpg' title='Forever Wild' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Always Curious, Forever Wild
          </Typography>
        </CardContent>
      </Card>
    ),
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
        <Grid item xs={12} md={5} sx={{ height: "55vh" }}>
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
          {/* Mobile */}
          <Card variant='outlined' sx={{ display: { xs: "auto", sm: "none" }, mt: 4 }}>
            <Box sx={{ px: 2, py: 2 }}>
              <Typography gutterBottom sx={{ color: "text.primary", fontWeight: "medium" }}>
                {selectedFeature.title}
              </Typography>
              <Typography variant='body2' sx={{ color: "text.secondary", mb: 1.5 }}>
                {selectedFeature.description}
              </Typography>
            </Box>
          </Card>
          {/* Desktop */}
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
        <Grid
          item
          xs={12}
          md={7}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%", mt: "7.5%", height: "55vh" }}
        >
          {selectedFeature.content}
        </Grid>
      </Grid>
    </Container>
  );
}
