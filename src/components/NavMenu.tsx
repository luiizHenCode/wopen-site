import { memo } from "react";
import { Link } from "react-router-dom";
import { CaretDown, List } from "phosphor-react";
import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Heading,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Stack,
  Text,
  IconButton,
  Hide,
  Show,
  useDisclosure,
} from "@chakra-ui/react";

import { AppBrand } from "./CustomIcons";
import { resources } from "constants/resources";
import { MenuMobile } from "./MenuMobile";
import { scrollToTarget } from "utils/scrollToTarget";

export const NavMenu = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      w="full"
      h={20}
      justifyContent="center"
      borderBottomWidth={1}
      borderBottomColor="whiteAlpha.100"
      bgColor="gray.900"
      px={6}
    >
      <HStack w="full" maxW="7xl">
        <Center as={Link} to="/" position="relative" zIndex={isOpen ? 9999 : 1}>
          <AppBrand boxSize={24} />
        </Center>
        <Spacer />

        <Hide below="sm">
          <HStack>
            <Button
              as={Link}
              to="/"
              variant="ghost"
              colorScheme="black"
              color="white"
              opacity={0.7}
              _hover={{ opacity: 1 }}
            >
              <Text>Inicio</Text>
            </Button>

            <Box role="group">
              <Popover trigger="hover" placement="bottom">
                <PopoverTrigger>
                  <Button
                    as={Link}
                    to="/recursos"
                    variant="ghost"
                    colorScheme="black"
                    color="white"
                    opacity={0.7}
                    _hover={{ opacity: 1 }}
                  >
                    <Text mr={1}>Recursos</Text>
                    <Box
                      transition="all 0.2s ease-in-out"
                      _groupHover={{
                        transform: "rotate(180deg)",
                      }}
                    >
                      <CaretDown size={18} color="white" weight="bold" />
                    </Box>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  py={1}
                  w="max-content"
                  bgColor="gray.800"
                  borderColor="whiteAlpha.50"
                >
                  <PopoverBody>
                    <Grid templateColumns="repeat(2, 278px)" gap={2}>
                      {resources.map(
                        ({ Icon, description, title, to }, index) => (
                          <Stack
                            key={index}
                            as={Link}
                            to={to}
                            py={3}
                            px={4}
                            flexDirection="row"
                            rounded={6}
                            spacing={2}
                            cursor="pointer"
                            _hover={{
                              bgColor: "whiteAlpha.50",
                            }}
                          >
                            <Center w={8} h={8}>
                              <Icon size={22} color="white" weight="regular" />
                            </Center>
                            <Stack pl={2} spacing={0}>
                              <Heading size="sm" color="gray.300">
                                {title}
                              </Heading>
                              <Text color="gray.500" noOfLines={2}>
                                {description}
                              </Text>
                            </Stack>
                          </Stack>
                        )
                      )}
                    </Grid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>

            <Button
              variant="ghost"
              colorScheme="black"
              color="white"
              opacity={0.7}
              _hover={{ opacity: 1 }}
              onClick={() => scrollToTarget("#contato")}
            >
              <Text>Contato</Text>
            </Button>
          </HStack>
        </Hide>

        <Show below="sm">
          <IconButton
            aria-label="menu"
            icon={<List size={24} />}
            variant="ghost"
            colorScheme="whiteAlpha"
            onClick={onOpen}
          />
        </Show>
      </HStack>
      <MenuMobile isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
});
