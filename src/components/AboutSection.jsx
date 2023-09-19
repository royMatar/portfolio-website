import React from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import FullScreenSection from "./FullScreenSection";
import IntroCard from "./IntroCard";
import SkillsCard from "./SkillsCard";
import BackgroundCard from "./BackgroundCard";

const AboutSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <FullScreenSection backgroundColor="#000000" py={16} spacing={6}>
      <Heading
        as="h1"
        id="about-section"
        color="white"
        className={inView ? "animate__animated animate__zoomIn" : ""}
        ref={ref}
      >
        About
      </Heading>
      <Box
        rounded="md"
        w={{ base: "100%", md: "80%", lg: "100%" }}
        maxW="auto"
        color="white"
        padding="20px"
        margin="20px"
      >
        {isMobile ? (
          <VStack spacing={8}>
            <IntroCard />
            <SkillsCard />
          </VStack>
        ) : (
          <VStack spacing={8}>
            <IntroCard />
              <SkillsCard />
          </VStack>
        )}
      </Box>
    </FullScreenSection>
  );
};

export default AboutSection;
