import React from "react";
import { Heading, VStack, Image, Button, HStack, Link } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { handleClick } from "./Header";
import "animate.css/animate.min.css";

const greeting = "Hello, I am Roy!";
const bio1 = "Front-End Developer";
const bio2 = "Specialized in ";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#000000"
  >
    <VStack spacing={10}>
      <VStack
        spacing={2}
        alignItems="center"
        className="animate__animated animate__zoomInDown"
      >
        <Image
          src="profile-roy2.jpeg"
          alt="Profile"
          className="profile-image"
        />
        <Heading as="h4" size="md" noOfLines={2}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={2} className="animate__animated animate__bounceIn">
        <Heading as="h1" size="3xl" noOfLines={2} textAlign="center" className="animate__animated animate__zoomInLeft">
          {bio1}
        </Heading>
        <Heading as="h1" size="3xl" noOfLines={3} textAlign="center" className="animate__animated animate__zoomInRight">
          {bio2} <span className="bluecolor">React</span>
        </Heading>
      </VStack>
      <HStack>
        <Button
          onClick={handleClick("contactme")}
          style={{ backgroundColor: "#1e80ff", color: "white" }}
          className="animate__animated animate__bounceInUp"
        >
          Contact Me
        </Button>{" "}
        <Link
          href="Roy Matar CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "10px" }}
          className="animate__animated animate__flip"
        >
          Download CV
        </Link>
      </HStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
