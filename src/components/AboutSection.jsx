import React, { useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, useMediaQuery, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import { handleClick } from "./Header";

const AboutSection = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [ethereumPrice, setEthereumPrice] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        setBitcoinPrice(data.bitcoin.usd);
        setEthereumPrice(data.ethereum.usd);
      } catch (error) {
        console.error("Error fetching cryptocurrency prices:", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <FullScreenSection backgroundColor="#000000" py={16} spacing={6}>
      <Heading as="h1" id="about-section" color="white">
        About
      </Heading>
      <Box
        rounded="md"
        w={{ base: "100%", md: "80%", lg: "60%" }}
        maxW="auto"
        color="white"
        padding="20px"
        margin="20px"
      >
        <Text fontSize={{ base: "lg", md: "xl" }}>
          I'm a <span className="textblue">Mechanical Engineer</span> turned
          <span className="textblue"> Front-End Developer</span>, studied
          engineering in Beirut, Lebanon. I've also dabbled in various courses,
          and professional certificates like the{" "}
          <Link
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/6WTDQ63QYAD3"
            isExternal
            className="textblue"
            color={"#1e80ff"}
          >
            Meta Front-End Developer Professional Certificate{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
        <br />
        <Text fontSize={{ base: "lg", md: "xl" }}>
          My background includes 6+ years of experience in MEP (Mechanical,
          Electrical and Plumbing) design and on-site work. In addition i got
          some serious skills in automation and telecom power infrastructure
          specifically in the operation and maintenance department.{" "} 
          <Link
            className="textblue"
            color={"#1e80ff"}
            href="Roy Matar CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
          Download my CV
          </Link>{" "}
          for more info.
        </Text>
        <br />
        <Text fontSize={{ base: "lg", md: "xl" }}>
          When it comes to web development, i've got a toolkit full of HTML,
          CSS, JavaScript ES6, React and expertise with libraries like Bootstrap,
          ChakraUI... Beyond traditional development, I'm highly passionate
          about exploring cutting-edge technologies, such as AR/VR development, cryptocurrencies,
          blockchain, and DeFi{" "}
          <Tooltip label={`$ ${bitcoinPrice}`} fontSize='lg'>
            <Image
              src="Bitcoin.png"
              alt="Bitcoin Logo"
              display="inline-block"
              width={7}
              height={7}
              verticalAlign="middle"
              marginRight={2}
            />
          </Tooltip>
          <Tooltip label={`$ ${ethereumPrice}`} fontSize='lg'>
            <Image
              src="ethereum.svg"
              alt="Ethereum Logo"
              display="inline-block"
              width={7}
              height={7}
              verticalAlign="middle"
            />
          </Tooltip>
        </Text>
        <Text fontSize={{ base: "lg", md: "xl" }}>
          As my{" "}
          <span className="textblue">
            <Tooltip label="ISTP" fontSize='lg'>Personality type</Tooltip>
          </span>{" "}
          shows, i'm built to tackle problems and build cool stuff. You can check my{" "}
          <Link
            className="textblue"
            color={"#1e80ff"}
            onClick={handleClick("projects")}
          >
            Projects
          </Link>{" "}
          section to see my latest work.
        </Text>
        <br />
        <Text fontSize={{ base: "lg", md: "xl" }}>
          Feel free to{" "}
          <Link
            className="textblue"
            color={"#1e80ff"}
            onClick={handleClick("contactme")}
          >
            Contact me
          </Link>{" "}
          and let's work together or be part of your team!
        </Text>
        <br />




        {/* <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontStyle="italic"
          fontWeight="bold"
          textAlign="center"
          color="gray.600"
        >
          "The biggest risk is not taking any risk. In a world that's changing
          quickly, the only strategy that is guaranteed to fail is not taking
          risks." - Mark Zuckerberg .
        </Text> */}

        {/* <SlickAutoPlay /> */}
      </Box>
    </FullScreenSection>
  );
};

export default AboutSection;
