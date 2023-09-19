import React, { useEffect } from "react";
import { useFormik } from "formik";
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
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import "../App.css";
import { useInView } from "react-intersection-observer";
import "animate.css";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://formspree.io/f/mknaapwp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          // Form submission successful
          onOpen("success", "Form submitted successfully");
          formik.resetForm();
        } else {
          // Form submission failed
          const data = await response.json();
          onOpen("error", data.error);
        }
      } catch (error) {
        // Request error
        onOpen("error", "An error occurred while submitting the form");
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#000000"
      py={16}
      spacing={8}
    >
      <VStack
        p={4}
        alignItems="center"
        spacing={4}
        maxW="1024px"
        width="650px"
        mx="auto"
        id="contactform"
      >
        <Heading as="h3" id="contactme-section" mb={12} className={inView ? "animate__animated animate__zoomIn" : ""}
          ref={ref}>
          Contact
        </Heading>
        <Box rounded="md" w="100%" maxW="500px">
          <form onSubmit={formik.handleSubmit} className={
                  inView
                    ? "animate__animated animate__zoomIn"
                    : ""
                }
                ref={ref}>
            <VStack spacing={4} alignItems="stretch">
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
                
              >
                <FormLabel htmlFor="firstName">
                  Name <span className="bluecolor">*</span>
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
                
              >
                <FormLabel htmlFor="email">
                  Email Address <span className="bluecolor">*</span>
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
                
              >
                <FormLabel htmlFor="comment">
                  Your message <span className="bluecolor">*</span>
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                isLoading={isLoading}
                
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
