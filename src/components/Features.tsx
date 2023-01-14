import {
  Box,
  Center,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo, useMemo } from "react";
import { FloatPage } from "./FloatPage";
import {
  Chats,
  Headset,
  Robot,
  RocketLaunch,
  TreeStructure,
  Wrench,
} from "phosphor-react";

export const Features = memo(() => {
  const featuresList = useMemo(
    () => [
      {
        Icon: RocketLaunch,
        title: "Tenha mais rapidez e a qualidade em seus atentimentos.",
      },
      {
        Icon: Chats,
        title: "Obtenha um controle de conversas com feedback dos clientes.",
      },
      {
        Icon: TreeStructure,
        title: "Faça fluxos de atendimento completos e totalmente modulares.",
      },
      {
        Icon: Wrench,
        title: "Mais de 30 funções de chatbot para você escolher.",
      },
      {
        Icon: Headset,
        title: "Mais de 25.000 atendimentos simultaneos por mês.",
      },
      {
        Icon: Robot,
        title: "Mais de 63% dos atendimentos realizados pelo robô.",
      },
    ],
    []
  );

  return (
    <VStack
      id="vantagens"
      w="full"
      minH="100vh"
      py={16}
      px={6}
      justifyContent="center"
      position="relative"
      spacing={0}
    >
      <Box
        top={0}
        w="full"
        h="70%"
        bgGradient="linear(to-b, teal, gray.900)"
        position="absolute"
        zIndex={-1}
        opacity={0.2}
      />
      <Stack w="full" maxW="7xl" alignItems="center" spacing={12}>
        <Stack alignItems="center">
          <Text fontSize="lg" fontWeight="bold" color="teal.300">
            Vantagens
          </Text>
          <Heading fontSize="4xl" color="white" fontWeight="semibold">
            Por que o WOpen?
          </Heading>
          <Text
            pt={6}
            textAlign="center"
            color="gray.300"
            fontSize="xl"
            maxWidth="3xl"
          >
            Com o <b>WOpen</b> você deixa seu negócio mais profissional em
            atendimentos através de conversas em múltiplos canais como WhatsApp,
            Messenger e Telegram.
          </Text>
        </Stack>

        <FloatPage />

        <Stack w="full" pt={6} spacing={4}>
          <Text textAlign="center" fontSize="lg" color="gray.300">
            Nossas principais vantagens
          </Text>

          <Grid
            w="full"
            pt={-6}
            templateColumns="repeat(auto-fit, minmax(320px, 1fr))"
            gap={6}
          >
            {featuresList.map(({ Icon, title }, index) => (
              <VStack
                key={index}
                role="group"
                spacing={6}
                px={6}
                py={10}
                rounded={8}
                transition="all 0.2s"
                bgGradient="linear(to-b, whiteAlpha.50, transparent)"
                _hover={{
                  bgGradient: "linear(to-b, whiteAlpha.100, transparent)",
                  transform: "translateY(-4px)",
                }}
              >
                <Center
                  p={3}
                  rounded={8}
                  bgColor="whiteAlpha.50"
                  color="teal"
                  transition="all 0.2s"
                  _groupHover={{
                    bgColor: "teal",
                    color: "white",
                    filter: "drop-shadow(6px 6px 0 rgba(255, 255, 255, 0.04))",
                    transform: "translateY(-6px)",
                  }}
                >
                  <Icon weight="regular" size={24} color="currentColor" />
                </Center>
                <Text textAlign="center" color="gray.300" fontSize="lg">
                  {title}
                </Text>
              </VStack>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </VStack>
  );
});
