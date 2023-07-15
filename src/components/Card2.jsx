import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VStack, HStack, Heading, Text, Image } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

const CardLeft = ({ title, description, imageSrc }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isMobile ? (
        <VStack
          color="white"
          backgroundColor="black"
          cursor="pointer"
          borderRadius="xl"
          borderWidth={1}
          borderColor={"white"}
        >
          <Image borderRadius="xl" src={imageSrc} alt={title} width={350} />

          <VStack spacing={4} p={4} alignItems="flex-start">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading as="h3" size="md">
                {title}
              </Heading>
            </HStack>
            <Text color="#64748b" fontSize="lg">
              {description}
            </Text>
            <HStack spacing={2} alignItems="center" color="#1e80ff">
              <span>See more</span>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </VStack>
        </VStack>
      ) : (
        <HStack
          color="white"
          backgroundColor="black"
          cursor="pointer"
          borderRadius="xl"
          borderWidth={1}
          borderColor={isHovered ? "#1e80ff" : "white"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <VStack spacing={4} p={4} alignItems="flex-start">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading as="h3" size="md">
                {title}
              </Heading>
            </HStack>
            <Text color="#64748b" fontSize="lg">
              {description}
            </Text>
            <HStack spacing={2} alignItems="center" color="#1e80ff">
              <span>See more</span>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </VStack>
          <Image borderRadius="xl" src={imageSrc} alt={title} width={450} />
        </HStack>
      )}
    </>
  );
};

export default CardLeft;
