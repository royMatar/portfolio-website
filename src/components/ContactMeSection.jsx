import React, { useEffect } from "react";
import {
  VStack,
  HStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ContactForm from "./ContactForm";
import { useMediaQuery } from "react-responsive";

const ContactMeSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 1100 });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#000000"
      py={16}
      spacing={8}
    >
      {isMobile ? (
        <VStack>
          <ContactForm />
          {/* <GoogleMap /> */}
        </VStack>
      ) : (
        <HStack>
          {/* <GoogleMap /> */}
          <ContactForm />
        </HStack>
      )}
    </FullScreenSection>
  );
};

export default ContactMeSection;
