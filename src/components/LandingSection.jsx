import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Roy!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#000000"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src="profile.jpeg"
          size="2xl"
          name="Your Name"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={10}>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
