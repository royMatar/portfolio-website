import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VStack, HStack, Heading, Text, Image, Link } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const CardLeft = ({ title, description, imageSrc }) => {
  const isMobile = useMediaQuery({ maxWidth: 750 });
  const [isHovered, setIsHovered] = useState(false);
  const openGithubUrl = () => {
    window.open(`https://electroplating-lb.com/`, "_blank");
  };

  return (
    <>
      {isMobile ? (
        <VStack
          color="white"
          backgroundColor="black"
          borderRadius="xl"
          borderColor={isHovered ? "#1e80ff" : "black"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transition: "border-color 0.3s ease",
          }}
        >
          <Image borderRadius="20%" src={imageSrc} alt={title} width={350} />
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
          borderColor={isHovered ? "#1e80ff" : "black"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transition: "border-color 0.3s ease",
          }}
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
          <Image borderRadius="20%" src={imageSrc} alt={title} width={450} />
        </HStack>
      )}
    </>
  );
};

export default CardLeft;
