import React, { useState } from "react";
import { VStack, HStack, Heading, Text, Image, Link } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useInView } from "react-intersection-observer";
import "animate.css";

const Card = ({ title, description, imageSrc, url }) => {
  const isMobile = useMediaQuery({ maxWidth: 750 });
  const openGithubUrl = () => {
    window.open(url, "_blank");
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when the component comes into view
    threshold: 0.5, // Adjust this threshold as needed (0.5 means 50% of the component is visible)
  });
  return (
    <>
      {isMobile ? (
        <VStack
          color="white"
          backgroundColor="black"
          className={
            inView
              ? "animate__animated animate__zoomIn"
              : "animate__animated animate__zoomOut"
          }
          ref={ref}
        >
          <Image borderRadius="10%" src={imageSrc} alt={title} width={350} minHeight={350} objectFit="cover"/>
          <VStack spacing={4} p={4} alignItems="flex-start">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading as="h3" size="lg">
                {title}
              </Heading>
            </HStack>
            <Text color="#64748b" fontSize="lg">
              {description}
            </Text>
            <HStack spacing={2} alignItems="center" color="#1e80ff">
              <Link onClick={openGithubUrl}>
                View Source Code <ExternalLinkIcon mx="2px" />
              </Link>
            </HStack>
          </VStack>
        </VStack>
      ) : (
        <HStack
          color="white"
          backgroundColor="black"
          className={
            inView
              ? "animate__animated animate__zoomIn"
              : "animate__animated animate__zoomOut"
          }
          ref={ref}
        >
          <Image borderRadius="10%" src={imageSrc} alt={title} width={450} minHeight={350} objectFit="cover"/>
          <VStack spacing={4} p={4} alignItems="flex-start">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading as="h3" size="lg">
                {title}
              </Heading>
            </HStack>
            <Text color="#64748b" fontSize="lg">
              {description}
            </Text>
            <HStack spacing={2} alignItems="center" color="#1e80ff">
              <Link onClick={openGithubUrl}>
                Open website <ExternalLinkIcon mx="2px" />
              </Link>
            </HStack>
          </VStack>
        </HStack>
      )}
    </>
  );
};

export default Card;
