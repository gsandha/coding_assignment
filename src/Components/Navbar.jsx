import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  IconButton,
  Avatar,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  FaBell,
  FaEnvelope,
  FaExclamationTriangle,
  FaCog,
  FaSearch,
  FaFileAlt,
} from "react-icons/fa";
import Apex from "./Apex.jpg";
import Profile from "./Profile.PNG";
const Navbar = () => {
  return (
    <>
      {/* First Part */}
      <Flex bg="white" p={4}>
        {/* Left Side */}
        <Flex alignItems="center">
          <Box as="a" href="/" mr={4}>
            <Image src={Apex} alt="Logo" w="300px" h="50px" />
            {/* {<img src="./apex_logo.jpg"/>} */}
          </Box>
          <Flex alignItems="center">
            <InputGroup width="250px" borderColor="black" mr={5} ml={10}>
              <InputLeftElement pointerEvents="none" children={<FaSearch />} />
              <Input
                type="text"
                placeholder="What are you looking for?"
                borderColor="black"
                _focus={{ borderColor: "black" }}
              />
            </InputGroup>
            <InputGroup width="250px" borderColor="black">
              <InputLeftElement
                pointerEvents="none"
                children={<FaFileAlt />}
                color="gray.500"
              />
              <Input
                type="text"
                placeholder="Quote number, name, etc."
                borderColor="black"
                _focus={{ borderColor: "black" }}
              />
            </InputGroup>
          </Flex>
        </Flex>

        {/* Right Side */}
        <Flex alignItems="center" ml="auto">
          <IconButton
            aria-label="Notifications"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
              </svg>
            }
            variant="ghost"
            mr={2}
            fontSize="2xl"
          />
          <IconButton
            aria-label="Messages"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
            }
            variant="ghost"
            mr={2}
            fontSize="2xl"
          />
          <IconButton
            aria-label="Alerts"
            icon={<FaExclamationTriangle />}
            variant="ghost"
            mr={2}
            fontSize="2xl"
          />
          <IconButton
            aria-label="Settings"
            icon={<FaCog />}
            variant="ghost"
            mr={4}
            fontSize="2xl"
          />
          <Avatar name="User" size="md" src={Profile} />
          <Flex flexDirection="column" ml={2}>
            <Text fontWeight="bold">Gurpreet Sandha</Text>
            <Text color="gray.500" align="left">
              admin
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Second Part */}
      <Flex bg="#1E2391" color="white" p={4}>
        <Box as="a" href="/" mr={4} width="120px">
          My Apex
        </Box>
        <Box as="a" href="/" mr={4} width="120px">
          Accounts
        </Box>
        <Box as="a" href="/" mr={4} width="120px" px={2}>
          Trading
        </Box>
        <Box
          as="a"
          href="/"
          mr={4}
          width="120px"
          bg="#2627AF"
          px={3}
          _hover={{ cursor: "pointer" }}
        >
          Move Money
        </Box>
        <Box as="a" href="/" mr={4} width="120px">
          Education
        </Box>
        <Box as="a" href="/" mr={4} width="120px">
          Tools
        </Box>
        <Box as="a" href="/">
          Research
        </Box>
      </Flex>

      {/* Third Part */}
      <Flex p={4} borderBottom="1px solid" borderColor="gray.300 " bg="white">
        <Box
          as="a"
          mr={4}
          color="#1E2391"
          px={30}
          borderRadius="md"
          fontWeight="bold"
        >
          Deposit
        </Box>
        <Box as="a" mr={4} borderBottom="2px solid transparent" px={30}>
          Withdrawals
        </Box>
        <Box as="a" mr={4} borderBottom="2px solid transparent" px={30}>
          Journal
        </Box>
        <Box as="a" mr={4} borderBottom="2px solid transparent" px={30}>
          Account Transfer
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
