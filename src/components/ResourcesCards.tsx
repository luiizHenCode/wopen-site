import { Box, Center, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { resources } from "constants/resources";

import { memo } from "react";
import { Link } from "react-router-dom";

export const ResourcesCards = memo(() => {
  return (
    <Stack
      w="full"
      align="center"
      minH="100vh"
      px={6}
      bgColor="gray.800"
      position="relative"
    >
      <Box
        top={0}
        w="full"
        h="70%"
        bgGradient="linear(to-b, teal, gray.800)"
        position="absolute"
        opacity={0.2}
      />
      <Stack w="full" maxW="7xl" py={12} spacing={12} zIndex={2}>
        <Stack alignItems="center">
          <Text fontSize="lg" fontWeight="bold" color="teal.300">
            Recursos
          </Text>
          <Heading
            fontSize="4xl"
            color="white"
            fontWeight="semibold"
            textAlign="center"
          >
            Kit de ferramentas para você
          </Heading>
          <Text
            pt={4}
            textAlign="center"
            color="gray.300"
            fontSize="xl"
            maxWidth="3xl"
          >
            O WOpen é um sistema de atendimento completo, com diversas
            ferramentas para você atender seus clientes.
          </Text>
        </Stack>
        <Grid
          w="full"
          templateColumns="repeat(auto-fit, minmax(320px, 1fr))"
          gap={6}
        >
          {resources.map(({ Icon, title, description, to }, index) => (
            <Stack
              key={index}
              as={Link}
              to={to}
              p={6}
              flexDirection="row"
              rounded={6}
              spacing={2}
              borderWidth={1}
              borderBottomWidth={2}
              borderColor="whiteAlpha.50"
              bgGradient="linear(to-b, gray.700, transparent)"
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                bgGradient: "linear(to-b, gray.600, transparent)",
                transform: "translateY(-4px)",
                borderColor: "teal",
              }}
              _active={{
                transform: "translateY(0px)",
              }}
            >
              <Center w={10} h={10}>
                <Icon size={28} color="white" weight="regular" />
              </Center>
              <Stack pl={2} spacing={1}>
                <Heading size="md" color="gray.300">
                  {title}
                </Heading>
                <Text fontSize="md" color="gray.500" noOfLines={2}>
                  {description}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
});
