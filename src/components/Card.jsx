import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VStack, HStack, Heading, Text, Image } from "@chakra-ui/react";


const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      color="white"
      backgroundColor="black"
      cursor="pointer"
      borderRadius="xl"
      borderWidth={1}
      borderColor="white"
    >
      <Image borderRadius="xl" src={imageSrc} alt={title} />
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
  );
};

export default Card;
