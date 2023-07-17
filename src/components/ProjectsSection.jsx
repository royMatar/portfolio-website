import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import Card from "./Card";
import CardLeft from "./Card2";


// url: "https://github.com/royMatar/little-lemon",

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#000000"
      isDarkBackground
      p={8}
      spacing={24}
    >
      <Heading as="h1" id="projects-section">
        Projects
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gridGap={8}
      >
        <VStack spacing={32}>
        <Card
          title={"Little Lemon Restaurant"}
          description={
            "The Little Lemon restaurant website, part of the Meta Front-End Developer Professional Certificate Capstone Project, aims to create a responsive UI for the booking table component. Figma was used for design, while React, CSS, Bootstrap, and other UI libraries were employed for development. The goal is to ensure optimal user experience on various devices and screen sizes."
          }
          imageSrc={"littlelemon.png"}
        />
        <CardLeft
          title={"ElectroPlating LB"}
          description={
            "Currently in progress: Creating a dynamic website for a leading electroplating company based in Lebanon"
          }
          imageSrc={"littlelemon.png"}
        />
        </VStack>
        
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
