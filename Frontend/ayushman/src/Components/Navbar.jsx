import { Box, Flex, useColorMode, Button, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === "light" ? "white" : "gray.800"}
    >
      <Box
        display={{ sm: "block", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        justifyContent="space-around"
        alignItems="center"
        flexGrow={1}
      >
        <NavLink to="/" fontWeight="medium" fontSize="xl" mr={4}>
          <Image
            src="https://play-lh.googleusercontent.com/FVJoHtenN4oee1XvShgPnOm3TYazvrcaDdnmvDy21ITxqTXP3OsdIAU0TsU6O4zr6A"
            alt="logo"
            w="80px"
          />
        </NavLink>
        <NavLink to="#" mr={6}>
          Book Appointment
        </NavLink>
        <NavLink to="#" mr={6}>
          View Appointments
        </NavLink>
        <NavLink to="#" mr={6}>
          Apply For Doctors
        </NavLink>
        <NavLink to="/login" mr={6}>
          Login
        </NavLink>
        <NavLink to="/signup" mr={6}>
          Signup
        </NavLink>
        <Box onClick={toggleColorMode}>
          <Button
            variant="ghost"
            variantColor={colorMode === "light" ? "gray" : "white"}
            fontWeight="medium"
          >
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
export default Navbar;
