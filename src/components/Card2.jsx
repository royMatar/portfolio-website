import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VStack, HStack, Heading, Text, Image } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { Spinner, Box } from "@chakra-ui/react";

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
          onClick={openGithubUrl}
          color="white"
          backgroundColor="black"
          cursor="wait"
          borderRadius="xl"
          borderWidth={1}
          borderColor={isHovered ? "#1e80ff" : "black"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transition: "border-color 0.3s ease", 
          }}
        >
          <Image borderRadius="xl" src={imageSrc} alt={title} width={350}/>
          {/* <Box
            width={250}
            height={150}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box> */}
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
              <span>Open website</span>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </VStack>
        </VStack>
      ) : (
        <HStack
          onClick={openGithubUrl}
          color="white"
          backgroundColor="black"
          cursor="pointer"
          borderRadius="xl"
          borderWidth={1}
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
              <span>Go to electroplating-lb.com</span>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </VStack>
          <Image borderRadius="xl" src={imageSrc} alt={title} width={450} />
          {/* <Box
            width={450}
            height={300}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box> */}
        </HStack>
      )}
    </>
  );
};

export default CardLeft;
