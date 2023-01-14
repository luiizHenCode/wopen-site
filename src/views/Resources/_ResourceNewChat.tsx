import { memo } from "react";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";

import image from "assets/resources/nova-conversa.png";

export const ResourceNewChat = memo(() => {
  return (
    <Stack direction={{ base: "column", md: "row" }} py={3} gap={4}>
      <Stack flex={1} spacing={4}>
        <Heading color="gray.400" fontSize="2xl">
          Inicie novas conversas com seus clientes
        </Heading>

        <Text fontSize="lg" color="gray.500">
          Além de receber seus clientes, é possivel o atendente iniciar uma
          conversa ou seja, chamar o cliente atraves dos canais disponiveis.
        </Text>

        <Heading color="gray.400" fontSize="2xl">
          Conversas internas entre atendentes
        </Heading>

        <Text fontSize="lg" color="gray.500">
          Através do chat interno é possivel um usuario falar em tempo real com
          outro usuario. Além de permitir audio, fotos, arquivos e até mesmo
          ligação.
        </Text>
      </Stack>
      <Stack flex={1}>
        <Image src={image} rounded={8} />
      </Stack>
    </Stack>
  );
});
