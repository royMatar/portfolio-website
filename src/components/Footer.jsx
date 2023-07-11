import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { socials } from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Box backgroundColor="#000000">
  <footer>
    <Flex
    display="grid"
      margin="0 auto"
      px={12}
      color="white"
      justifyContent="center"
      alignItems="center"
      maxWidth="1024px"
      height={28}
    >
      <div>
      {socials.map(({ icon, url }) => (
        <a key={url} href={url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={icon} size="2xl" key={url} style={{ marginRight: "28px" }}/>
        </a>
      ))}
      </div>
      
      <div style={{ marginLeft: "8px" }}>
        &copy; {new Date().getFullYear()} - Roy Matar
      </div>
    </Flex>
  </footer>
</Box>
  );
};

export default Footer;
