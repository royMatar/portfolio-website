import React, { useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import {
  Box,
  Heading,
  Text,
  useMediaQuery,
  Image,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import { handleClick } from "./Header";
import ProgressBar from "./ProgressBar";
import IntroCard from "./IntroCard";
import BackgroundCard from "./BackgroundCard";
import SkillsCard from "./SkillsCard";
import PersonalCard from "./PersonalCard";
import { useInView } from "react-intersection-observer";
import "animate.css";

const AboutSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  }); 

  return (
    <FullScreenSection backgroundColor="#000000" py={16} spacing={6}>
      <Heading as="h1" id="about-section" color="white" className={inView ? "animate__animated animate__zoomIn" : ""}
          ref={ref}>
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
        <VStack spacing={8}>
          {isMobile ? (
            <VStack spacing={8}>
              <IntroCard />
              <BackgroundCard />
              <SkillsCard />
              <PersonalCard />
            </VStack>
          ) : (
            <VStack spacing={8}>
              <HStack spacing={8}>
                <IntroCard />
                <BackgroundCard />
              </HStack>
              <HStack spacing={8}>
                <SkillsCard />
                <PersonalCard />
              </HStack>
            </VStack>
          )}
        </VStack>
      </Box>
    </FullScreenSection>
  );
};

export default AboutSection;
