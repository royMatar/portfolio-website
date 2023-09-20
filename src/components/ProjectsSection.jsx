import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import Card from "./Card";
import CardLeft from "./Card2";
import { useInView } from "react-intersection-observer";
import "animate.css";

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  return (
    <FullScreenSection
      backgroundColor="#000000"
      isDarkBackground
      p={4}
      spacing={24}
    >
      <Heading
        as="h1"
        id="projects-section"
        className={inView ? "animate__animated animate__zoomIn" : ""}
        ref={ref}
      >
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
              "The Little Lemon restaurant website, the Meta Front-End Developer Professional Certificate Capstone Project."
            }
            imageSrc={"littlelemon.png"}
          />
          <CardLeft
            title={"ElectroPlating-LB"}
            description={
              "Website for a leading electroplating and surface treatment for various products located in Lebanon."
            }
            imageSrc={"electroplating-lb2.png"}
          />
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
