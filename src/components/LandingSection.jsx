import React from "react";
import { Heading, VStack, Image, Button, HStack, Link } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { handleClick } from "./Header";
import { useInView } from "react-intersection-observer";

import "animate.css/animate.min.css";

const LandingSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
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
          className={inView ? "animate__animated animate__zoomInDown" : ""}
          ref={ref}
        >
          <Image
            src="profile-roy2.jpeg"
            alt="Profile"
            className="profile-image"
          />
          <Heading as="h4" size="md" noOfLines={2}>
            Hello, I am Roy!
          </Heading>
        </VStack>
        <VStack spacing={2} className={inView ? "animate__animated animate__bounceIn" : ''} ref={ref}>
          <Heading
            as="h1"
            size="3xl"
            noOfLines={2}
            textAlign="center"
            className={inView ? "animate__animated animate__zoomInLeft" : ''} ref={ref}
          >
            Front-End Developer
          </Heading>
          <Heading
            as="h1"
            size="3xl"
            noOfLines={3}
            textAlign="center"
            className={inView ? "animate__animated animate__zoomInRight" : ''} ref={ref}          >
            Specialized in <span className="bluecolor">React</span>
          </Heading>
        </VStack>
        <HStack>
          <Button
            onClick={handleClick("contactme")}
            style={{ backgroundColor: "#1e80ff", color: "white" }}
            className=" heartbeat-button"
          >
            Contact Me
          </Button>{" "}
          <Link
            href="Roy Matar CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
            className={inView ? "animate__animated animate__flip" : ''} ref={ref}          >
            Download CV
          </Link>
        </HStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
