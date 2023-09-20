import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  List,
  ListItem,
  Heading,
  Text,
  Box,
  HStack,
  VStack,
  useMediaQuery,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import ProgressBar from "./ProgressBar";

const SkillsCard = () => {
  const cardGradient = "linear-gradient(to right, black,black, black)";
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once when the component comes into view
    threshold: 0.3, // Adjust this threshold as needed (0.5 means 50% of the component is visible)
  });

  const skills = [
    { label: "HTML", value: 90 },
    { label: "CSS", value: 80 },
    { label: "JavaScript ES6", value: 85 },
    { label: "ReactJS", value: 88 },
  ];
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
          <Heading size="md">Skills</Heading>
        </CardHeader>

        <CardBody>
          <VStack divider={<StackDivider />} spacing="4">
            <Box mt="4">
              <Heading size="xs" textTransform="uppercase">
                Technical Skills
              </Heading>
              <Stack divider={<StackDivider />} spacing="4">
                {skills.map((skill, index) => (
                  <Box key={index} display="flex" alignItems="center">
                    <Heading size="xs" textTransform="uppercase" flex="0 0 80%">
                      {skill.label}
                    </Heading>
                    <ProgressBar
                      value={skill.value}
                      colorScheme="teal"
                      size="sm"
                      height="10px"
                      borderRadius="md"
                      mt="2"
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
            {/* <Box>
              <Text pt="2" fontSize="sm">
                <ul styleType="none" pl="0" mt="2">
                  <li>
                    React frameworks: React-Bootstrap, ChakraUI, Framer motion
                  </li>
                  <li>CSS frameworks: Animate.css, Bootstrap, Tailwind CSS</li>
                  <li>Version Control: Git, GitHub</li>
                  <li>Build Tools: Webpack</li>
                  <li>Responsive Design: Media queries, Flexbox, Grid</li>
                  <li>Testing: Jest</li>
                  <li>Package Manager: npm</li>
                  <li>Accessibility: WCAG guidelines, ARIA attributes</li>
                </ul>
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Tools and Platforms
              </Heading>
              <Text pt="2" fontSize="sm">
                <ul>
                  <li>Code Editors: Visual Studio Code</li>
                  <li>Content Management Systems(CMS): WordPress, Shopify</li>
                  <li>Customer Relationship Management (CRM): Microsoft Dynamics 365</li>
                  <li>UI/UX Prototyping: Figma</li>
                  <li>Project Management: Jira</li>
                  <li>Website deployment: cPanel</li>
                </ul>
              </Text>
            </Box>
            
           <Box>
              <Heading size="xs" textTransform="uppercase">
                Soft Skills
              </Heading>
              <Text pt="2" fontSize="sm">
                <ul>
                  <li>Clear and effective communication</li>
                  <li>Collaborative teamwork</li>
                  <li>Analytical thinking</li>
                  <li>Troubleshooting</li>
                  <li>Quick learner</li>
                  <li>Ability to adapt to new technologies</li>
                  <li>Prioritization of tasks</li>
                </ul>
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Languages
              </Heading>
              <Text pt="2" fontSize="sm">
                <ul>
                  <li>Arabic</li>
                  <li>French</li>
                  <li>English</li>
                </ul>{" "}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Certifications
              </Heading>
              <Text pt="2" fontSize="sm">
                <ul>
                  <li>Meta Front-End Developer Professional Certificate</li>
                  <li>BE-Mechanical Engineer</li>
                  <li>Diplôme d’Études en Langue Française (DELF-B1)</li>
                </ul>
              </Text>
            </Box> */}
          </VStack>
        </CardBody>
      </Card>
    </div>
  );
};

export default SkillsCard;
