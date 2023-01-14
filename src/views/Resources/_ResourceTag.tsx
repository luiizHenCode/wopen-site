import { memo } from "react";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";

import image from "assets/resources/criacao-etiquetas.png";

export const ResourceTag = memo(() => {
  return (
    <Stack direction={{ base: "column", md: "row" }} py={3} gap={4}>
      <Stack flex={1} spacing={4}>
        <Heading color="gray.400" fontSize="2xl">
          Uso de etiquetas para melhorar o atendimento ao cliente
        </Heading>

        <Text fontSize="lg" color="gray.500">
          Evite perder tempo com perguntas genericas! Por exemplo: O que deseja?
          ou então Com quem deseja falar?
        </Text>

        <Text fontSize="lg" color="gray.500">
          Com as etiquetas que você pode criar do seu jeito, da sua forma e para
          atender a sua necessidade, o atendente tem um resumo geral da
          necessidade do cliente.
        </Text>
      </Stack>
      <Stack flex={1}>
        <Image src={image} rounded={8} />
        <Text align="center" color="gray.600">
          Contexto do atendimento em uma lanchonete
        </Text>
      </Stack>
    </Stack>
  );
});
