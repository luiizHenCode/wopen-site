import { memo, useMemo } from "react";
import { Button, chakra, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { ChartLineUp, Headset, TreeStructure } from "phosphor-react";

export const FastAndPratice = memo(() => {
  const list = useMemo(
    () => [
      {
        Icon: Headset,
        title: "Atendimento",
        description:
          "Tenha melhores resultados em seus atendimentos, receba avaliações, seja pratico, atenda em multi-plataformas.",
      },
      {
        Icon: ChartLineUp,
        title: "Relatórios",
        description:
          "Tenha acesso a relatórios relacionados aos atendimentos feitos, Alem de uma visão geral de atendimentos em andamento, metricas de cada um deles e saiba onde e por que.",
      },

      {
        Icon: TreeStructure,
        title: "Fluxos chatbot",
        description:
          "Configure você mesmo seu atendente virtual, deixe seu atendimento mais objetivo com perguntas pré definidas, respostas e mensagens.",
      },
    ],
    []
  );

  return (
    <Stack
      id="pratico-e-objetivo"
      w="full"
      minH="100vh"
      bgGradient="linear(to-b, gray.800, gray.800)"
      align="center"
      justify="center"
      px={6}
      py={12}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        w="full"
        maxW="7xl"
        spacing={10}
      >
        <Stack flex={1}>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="teal.300"
            textAlign={{ base: "center", md: "left" }}
          >
            Prático e objetivo
          </Text>
          <Heading
            fontWeight="semibold"
            fontSize={{ base: "4xl", md: "5xl" }}
            color="white"
            textAlign={{ base: "center", md: "left" }}
          >
            Um
            <chakra.span
              px={2}
              bgGradient="linear(to-l, white, teal.400)"
              bgClip="text"
            >
              atendimento
            </chakra.span>
            é mais que uma conversa. Atender é
            <chakra.span
              px={2}
              bgGradient="linear(to-r, white, teal.400)"
              bgClip="text"
            >
              solucionar
            </chakra.span>
            um problema!
          </Heading>
          <Text
            py={6}
            color="gray.300"
            fontSize="xl"
            maxWidth="3xl"
            textAlign={{ base: "center", md: "left" }}
          >
            Quando você atende um cliente, você está resolvendo um problema. E
            isso é o que fazemos aqui. Nós resolvemos problemas.
          </Text>

          <Button
            as="a"
            href="https://wa.link/4q0aam"
            target="_blank"
            w="max-content"
            h="14"
            px={8}
            colorScheme="teal"
            rounded="full"
            alignSelf={{ base: "center", md: "flex-start" }}
            _hover={{ transform: "scale(1.1)", boxShadow: "lg" }}
          >
            <Text fontSize="lg" fontWeight="semibold">
              Começar agora!
            </Text>
          </Button>
        </Stack>

        <Stack flex={1} spacing={8}>
          {list.map(({ Icon, title, description }, index) => (
            <Stack
              key={index}
              p={6}
              bgColor="whiteAlpha.50"
              rounded={8}
              transition="all 0.2s"
              _hover={{
                bgColor: "whiteAlpha.100",
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
            >
              <HStack spacing={4}>
                <Icon size={24} color="white" />
                <Heading color="white" fontSize="2xl">
                  {title}
                </Heading>
              </HStack>
              <Text fontSize="lg" color="gray.300" pl={10}>
                {description}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
});
