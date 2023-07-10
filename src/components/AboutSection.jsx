import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <FullScreenSection backgroundColor="#000000" py={16} spacing={8}>
      <Heading as="h1" id="about-section" color="white">
        About
      </Heading>
      <Box rounded="md" w="100%" maxW="500px"></Box>
    </FullScreenSection>
  );
};

export default AboutSection;
