import React from 'react'
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Text,
    Textarea,
    VStack,
    HStack,
  } from "@chakra-ui/react";

const GoogleMap = () => {
  return (
    <div>
        <Text>Location</Text>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9356.49343394888!2d35.666064051396624!3d33.99202061618585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f46dfa201d8a5%3A0x6bad6769a34d14dc!2sGhosta!5e0!3m2!1sen!2slb!4v1695300653171!5m2!1sen!2slb"
          width="400"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{borderRadius:'5%'}}
        ></iframe>
      </div>
  )
}

export default GoogleMap