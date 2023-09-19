import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import "animate.css";
const PersonalCard = () => {
  const cardGradient = "linear-gradient(to top, #1e80ff,black, black)";
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once when the component comes into view
    threshold: 0.5, // Adjust this threshold as needed (0.5 means 50% of the component is visible)
  });
  return (
    <div
      className={
        inView
          ? "animate__animated animate__fadeIn"
          : "animate__animated animate__fadeOut"
      }
      ref={ref}
    >
      <Card
        w="100%"
        bg={cardGradient}
        color="white"
        borderRadius="5px"
        boxShadow="lg"
        p="4"
      >
        <CardHeader>
          <Heading size="md">Personal Interests</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.               

              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.                

              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.       

              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonalCard;
