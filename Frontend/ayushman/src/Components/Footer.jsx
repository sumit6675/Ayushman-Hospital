import React from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Input,
  Stack,
  Text,
  Box,
  Image
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <Box w="100%" p="8">
      <Stack
        spacing="8"
        direction={{
          base: "column",
          md: "row",
        }}
        py={{
          base: "12",
          md: "16",
        }}
        m="auto"
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Stack
          spacing={{
            base: "4",
            md: "6",
          }}
        >
          <Image
            src="https://play-lh.googleusercontent.com/FVJoHtenN4oee1XvShgPnOm3TYazvrcaDdnmvDy21ITxqTXP3OsdIAU0TsU6O4zr6A"
            alt="logo"
            w="120px"
            ml="70px"
          />
          <Text color="muted">Quality Care for a Healthier Tomorrow</Text>
        </Stack>
        <Stack
          direction={{
            base: "column-reverse",
            md: "column",
            lg: "row",
          }}
          spacing={{
            base: "12",
            md: "8",
          }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Services
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Book Appointment</Button>
                <Button variant="link">All Doctors</Button>
                <Button variant="link">Apply for Doctors</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Legal
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Privacy</Button>
                <Button variant="link">Terms</Button>
                <Button variant="link">License</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Stay up to date
            </Text>
            <Stack
              spacing="4"
              direction={{
                base: "column",
                sm: "row",
              }}
              maxW={{
                lg: "360px",
              }}
            >
              <Input placeholder="Enter your email" type="email" required />
              <Button>
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{
          base: "column-reverse",
          md: "row",
        }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Ayushman Hospital, Inc. All rights
          reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Box>
  );
}

export default Footer;
