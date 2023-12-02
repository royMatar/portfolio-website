import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import Card from "./Card";
import CardLeft from "./Card2";
import { useInView } from "react-intersection-observer";
import "animate.css";

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
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
          <CardLeft
            title={"ElectroPlating-LB"}
            description={
              "Website for a leading electroplating and surface treatment for various products located in Lebanon."
            }
            imageSrc={"electroplating-lb2.png"}
            url={"https://electroplating-lb.com/"}
          />
          <Card
            title={"SEF Liban"}
            description={
              "Sefliban.com website for an ngo in Lebanon created for volunteering and donations"
            }
            imageSrc={"SEF-image.png"}
            url={"https://sefliban.com"}
          />
          <CardLeft
            title={"Olivia Andaket-LB"}
            description={
              "Designed and developed the UI of the dynamic website in collaboration with CreaSoft."
            }
            imageSrc={"Olivia-image.png"}
            url={"https://olivia-lb.com"}
          />
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
