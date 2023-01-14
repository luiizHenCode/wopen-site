import { memo } from "react";
import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CallToAction = memo(() => {
  return (
    <VStack
      bgColor="teal.500"
      bgGradient="linear(to-b, teal.400, teal.500)"
      w="full"
      px={6}
      minH="400px"
      py={12}
      justifyContent="center"
    >
      <Stack w="full" maxW="7xl" alignItems="center" spacing={6}>
        <Heading
          fontWeight="semibold"
          fontSize="4xl"
          color="white"
          textAlign="center"
        >
          Pronto para começar?
        </Heading>
        <Text textAlign="center" color="gray.200" fontSize="xl" maxWidth="3xl">
          Automatize seus atendimentos e melhore a interação com seus clientes.
          Chega de gastos com celulares e planos telefonicos.
        </Text>

        <Stack direction={{ base: "column", md: "row" }} pt={10} spacing={4}>
          <Button
            as="a"
            href="https://wa.link/4q0aam"
            target="_blank"
            h="14"
            px={8}
            colorScheme="yellow"
            rounded="full"
            _hover={{ transform: "scale(1.1)", boxShadow: "lg" }}
          >
            <Text fontSize="lg" fontWeight="semibold">
              Quero contratar agora!
            </Text>
          </Button>
          <Button
            as={Link}
            to="/recursos"
            h="14"
            px={6}
            variant="ghost"
            color="gray.100"
            colorScheme="whiteAlpha"
            rounded="full"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Text fontSize="lg" fontWeight="semibold" mr={2}>
              Ver mais
            </Text>
          </Button>
        </Stack>
      </Stack>
    </VStack>
  );
});
