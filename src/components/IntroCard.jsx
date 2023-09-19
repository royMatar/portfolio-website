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
const IntroCard = () => {
  const cardGradient = "linear-gradient(to top, #1e80ff,black,black)";
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once when the component comes into view
    threshold: 0.3, // Adjust this threshold as needed (0.5 means 50% of the component is visible)
  });
  return (
    <div
      // className={
      //   inView
      //     ? "animate__animated animate__fadeIn"
      //     : "animate__animated animate__fadeOut"
      // }
      // ref={ref}
    >
      <Card
        w="100%"
        bg={cardGradient}
        color="white"
        borderRadius="5px"
        boxShadow="lg"
        p="4"
        h="auto"
      >
        <CardHeader>
          <Heading size="md">Crafting Code & Embracing Innovation</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              {/* <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading> */}
              <Text pt="2" fontSize="sm">
                I'm a former mechanical engineer who transitioned into a
                front-end developer role specializing in designing and
                developing exceptional UI/UX for diverse businesses. My
                expertise is built on a solid foundation in computer science,
                MEP, project management, automation, green energy production,
                and proficiency in various programming languages.{" "}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Building the Future, One Line of Code at a Time
              </Heading>
              <Text pt="2" fontSize="sm">
                I take pride in transforming ideas into interactive web
                applications that engage and delight users. With a keen eye for
                design and a knack for problem-solving, I strive to push the
                boundaries of what's possible.{" "}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                A Hunger for Learning & Growth
              </Heading>
              <Text pt="2" fontSize="sm">
                My hunger for learning and fascination with emerging
                technologies drive my passion for development. I embrace every
                opportunity to expand my skill set, adapt to new methodologies,
                and integrate cutting-edge frameworks into my projects.{" "}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Let's Code Something Remarkable Together
              </Heading>
              <Text pt="2" fontSize="sm">
                Dive into my portfolio to discover a range of projects where
                I've combined creativity with technical expertise. If you're as
                enthusiastic about embracing innovation and crafting
                extraordinary digital experiences, let's connect and discuss how
                we can elevate your online presence.{" "}
              </Text>{" "}
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default IntroCard;
