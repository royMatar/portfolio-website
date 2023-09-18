import React, { useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, useMediaQuery, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import { handleClick } from "./Header";
import "animate.css";
import ProgressBar from "./ProgressBar";

const AboutSection = () => {


  return (
    <FullScreenSection backgroundColor="#000000" py={16} spacing={6}>
      <Heading as="h1" id="about-section" color="white">
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
        <ProgressBar/>
      </Box>
    </FullScreenSection>
  );
};

export default AboutSection;
