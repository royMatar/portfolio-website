import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Roy!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialized in ";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#000000"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center" >
        <Avatar
          src="profile-roy2.jpeg"
          size="2xl"
          name="Your Name"
          style={{borderWidth:'2px', borderColor:'#1e80ff'}}
        />
        <Heading as="h4" size="md" noOfLines={2}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={10}>
        <Heading as="h1" size="3xl" noOfLines={2} textAlign="center">
          {bio1}
        </Heading>
        <Heading as="h1" size="3xl" noOfLines={3} textAlign="center">
          {bio2} <span className="bluecolor">React</span>
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
