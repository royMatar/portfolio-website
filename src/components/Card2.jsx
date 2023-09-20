import React from "react";
import { VStack, HStack, Heading, Text, Image, Link } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import "animate.css";
import { useInView } from "react-intersection-observer";

const CardLeft = ({ title, description, imageSrc }) => {
  const isMobile = useMediaQuery({ maxWidth: 750 });
  const openGithubUrl = () => {
    window.open(`https://electroplating-lb.com/`, "_blank");
  };
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <>
      {isMobile ? (
        <VStack
          color="white"
          backgroundColor="black"
          borderRadius="xl"
          className={
            inView
              ? "animate__animated animate__zoomIn"
              : "animate__animated animate__zoomOut"
          }
          ref={ref}
        >
          <Image borderRadius="10%" src={imageSrc} alt={title} width={350} />
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
        </VStack>
      ) : (
        <HStack
          color="white"
          backgroundColor="black"
          borderRadius="xl"
          className={
            inView
              ? "animate__animated animate__zoomIn"
              : "animate__animated animate__zoomOut"
          }
          ref={ref}
        >
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
          <Image borderRadius="10%" src={imageSrc} alt={title} width={450} />
        </HStack>
      )}
    </>
  );
};

export default CardLeft;
