import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const MidHome = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: "0",
      lg: "12",
    }}
    py={{
      base: "0",
      lg: "12",
    }}
  >
    <Stack
      direction={{
        base: "column-reverse",
        lg: "row",
      }}
      spacing={{
        base: "0",
        lg: "20",
      }}
    >
      <Box
        width={{
          lg: "sm",
        }}
        transform={{
          base: "translateY(-50%)",
          lg: "none",
        }}
        bg={{
          base: useColorModeValue("red.50", "gray.700"),
          lg: "transparent",
        }}
        mx={{
          base: "6",
          md: "8",
          lg: "0",
        }}
        px={{
          base: "6",
          md: "8",
          lg: "0",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            lg: "10",
          }}
        >
          <Stack
            spacing={{
              base: "2",
              lg: "4",
            }}
          >
            <Heading size="xl" color={useColorModeValue("red.500", "red.300")}>
              Ayushman Hospital
            </Heading>
            <Heading size="md" fontWeight="normal">
            Health, Healing, and Hope.
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link
              color={useColorModeValue("red.500", "red.300")}
              fontWeight="bold"
              fontSize="lg"
            >
             Book now, get well sooner
            </Link>
            <Icon
              color={useColorModeValue("red.500", "red.300")}
              as={FaArrowRight}
            />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" gap="2" overflow="hidden">
        <Image
          src="https://img.freepik.com/free-vector/doctor-doing-checkup-examination-old-patient-hospital-man-listening-breathing-with-stethoscope-senior-standing_575670-1555.jpg?w=826&t=st=1674934069~exp=1674934669~hmac=231af4b23b59285105259ab6f83a03f3dff282269dc5deabaf740ad8e430abad"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
      </Flex>
    </Stack>
  </Box>
);

export default MidHome;
