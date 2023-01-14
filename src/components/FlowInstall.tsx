import { memo, useMemo } from "react";
import { Center, Grid, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { CheckCircle, Gear, Stack as StackIcon } from "phosphor-react";

export const FlowInstall = memo(() => {
  const flowsSteps = useMemo(
    () => [
      {
        Icon: Gear,
        title: "Configuração inicial",
        description:
          "Para as configurações iniciais nós temos uma equipe especializada para te auxiliar, não somente no inicio como tambem em todo o periodo de contrato.",
      },
      {
        Icon: StackIcon,
        title: "Personalize o WOpen",
        description:
          "Escolha entre as mais de 30 funções, qual melhor atende suas necessidades, modulos adicionais, ferramentas, relatorios completos e muito mais.",
      },
      {
        Icon: CheckCircle,
        title: "Comece a usar",
        description:
          "Após a API OFICIAL do Facebook aprovar sua conta de Whatsapp, seu WOPEN estará configurado e pronto para atender seus clientes.",
      },
    ],
    []
  );

  return (
    <VStack
      id="instalacao"
      w="full"
      minH="100vh"
      py={12}
      bgColor="gray.900"
      justifyContent="center"
      position="relative"
      spacing={0}
      px={6}
    >
      <Stack w="full" maxW="7xl" alignItems="center" spacing={12}>
        <Stack alignItems="center">
          <Text fontSize="lg" fontWeight="bold" color="teal.300">
            Instalação
          </Text>
          <Heading
            fontWeight="semibold"
            fontSize="4xl"
            color="white"
            textAlign="center"
          >
            Como conectamos você ao WOpen?
          </Heading>
          <Text
            pt={6}
            textAlign="center"
            color="gray.300"
            fontSize="xl"
            maxWidth="3xl"
          >
            Nosso processo de implantação do aplicativo pode levar alguns dias
            porém fique tranquilo, te ajudaremos do começo ao fim.
          </Text>
        </Stack>

        <Grid
          w="full"
          templateColumns={"repeat(auto-fit, minmax(320px, 1fr))"}
          gap={6}
        >
          {flowsSteps.map(({ Icon, title, description }, index) => (
            <VStack
              key={index}
              role="group"
              flex={1}
              px={6}
              pt={12}
              pb={24}
              bgGradient="linear(to-b, whiteAlpha.50, gray.900)"
              rounded={8}
              spacing={6}
              transition="all 0.2s"
              _hover={{
                bgGradient: "linear(to-b, teal, gray.900)",
                transform: "scale(1.05)",
              }}
            >
              <Center
                p={6}
                bgColor="whiteAlpha.50"
                color="white"
                rounded={"full"}
                transition="all 0.2s"
                _groupHover={{
                  color: "gray.800",
                  bgColor: "whiteAlpha.400",
                }}
              >
                <Icon size={48} weight="fill" color="currentColor" />
              </Center>
              <Stack textAlign="center">
                <Heading color="white" fontSize="2xl">
                  {title}
                </Heading>
                <Text fontSize="lg" color="gray.300" textAlign="center">
                  {description}
                </Text>
              </Stack>
            </VStack>
          ))}
        </Grid>
      </Stack>
    </VStack>
  );
});
