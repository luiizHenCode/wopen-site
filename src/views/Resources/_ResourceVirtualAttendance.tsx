import { memo } from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";

import image from "assets/resources/workflow.png";
import { FloatPage } from "components/FloatPage";

export const ResourceVirtualAttendance = memo(() => {
  return (
    <Stack flex={1} py={3} spacing={4}>
      <FloatPage img={image} />

      <Heading color="gray.400" fontSize="2xl" maxWidth="3xl">
        Configure um fluxo de atendimento para o seu negócio personalizado
      </Heading>

      <Text fontSize="lg" color="gray.500">
        Não faça mais perguntas manuais! Nosso Chatbot faz as perguntas e
        entrega respostas por você!
      </Text>

      <Text fontSize="lg" color="gray.500">
        Com o Chatbot, perguntas, respostas, mensagens, informativos, imagens,
        podem ser entregues ao cliente sem a necessidade de um atendente humano.
      </Text>
    </Stack>
  );
});
