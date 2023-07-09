import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Restaurant",
    description:
      "The Little Lemon restaurant website, part of the Meta Front-End Developer Professional Certificate Capstone Project, aims to create a responsive UI for the booking table component. Figma was used for design, while React, CSS, Bootstrap, and other UI libraries were employed for development. The goal is to ensure optimal user experience on various devices and screen sizes.",
      image: "profile.jpeg",
      url: "https://github.com/royMatar/little-lemon",
  },
  {
    title: "Little Lemon Restaurant",
    description:
      "The Little Lemon restaurant website, part of the Meta Front-End Developer Professional Certificate Capstone Project, aims to create a responsive UI for the booking table component. Figma was used for design, while React, CSS, Bootstrap, and other UI libraries were employed for development. The goal is to ensure optimal user experience on various devices and screen sizes.",
      image: "profile.jpeg",
      url: "https://github.com/royMatar/little-lemon",
  },
  
  // {
  //   title: "React Infinite Scroll",
  //   description:
  //     "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
  //   getImageSrc: () => require("../images/photo2.jpg"),
  // },
  // {
  //   title: "Photo Gallery",
  //   description:
  //     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
  //   getImageSrc: () => require("../images/photo3.jpg"),
  // },
  // {
  //   title: "Event planner",
  //   description:
  //     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
  //   getImageSrc: () => require("../images/photo4.jpg"),
  // },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#000000"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Projects
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.image}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
