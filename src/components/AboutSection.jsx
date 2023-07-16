import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import SlickAutoPlay from "./Slick";

const AboutSection = () => {

  return (
    <FullScreenSection backgroundColor="#000000" py={16} spacing={6}>
      <Heading as="h1" id="about-section" color="white">
        About
      </Heading>
      <Box
        rounded="md"
        w={{ base: "100%", md: "80%", lg: "60%" }}
        maxW="auto"
        color="white"
        padding="20px"
        margin="20px"
      >
        <Text fontSize={{ base: "lg", md: "xl" }}>
          {" "}
          I am a Mechanical
          Engineer with experience as a Site Engineer, specializing in MEP
          systems, automation, and telecom power infrastructure. In this role, I
          managed and supervised on-site operations, ensuring the smooth
          implementation of projects. Additionally, I possess strong mechanical
          design skills and proficiency in using multiple software applications
          to create detailed designs and engineering drawings.{" "}
        </Text>
        <br />
        <Text fontSize={{ base: "lg", md: "xl" }}>
          Alongside my engineering expertise, I have delved into coding, mobile,
          and web design, honing my skills in tools like Figma, HTML, CSS, and
          JavaScript. My focus lies in utilizing React for building dynamic web
          applications. Offering a unique combination of engineering expertise,
          site management experience, and coding skills, I am eager to
          contribute my versatile background to drive successful outcomes.
          Please download my CV to learn more about my qualifications and
          experience
        </Text>
        <br />
                {/* <SlickAutoPlay /> */}
      </Box>
    </FullScreenSection>
  );
};

export default AboutSection;
