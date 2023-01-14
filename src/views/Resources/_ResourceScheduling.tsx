import { memo } from "react";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";

import image from "assets/resources/agenda.png";
import image2 from "assets/resources/card-agenda.png";
import image3 from "assets/resources/cel-agenda.png";
import { FloatPage } from "components/FloatPage";

export const ResourceScheduling = memo(() => {
  return (
    <Stack py={3} spacing={4}>
      <Heading color="gray.400" fontSize="2xl">
        Agendamento com notificações automáticas
      </Heading>

      <FloatPage img={image} boxBgColor="#333333" />

      <Stack direction={{ base: "column", md: "row" }} py={3} gap={4}>
        <Stack flex={1} spacing={4}>
          <Text fontSize="lg" color="gray.500">
            Faça agendamentos, envie notificações, peça confirmações com
            horários e datas pré definidas! Tenha controle total de serviços e
            profissionais de cada agendamento.
          </Text>

          <Stack>
            <Image src={image2} rounded={8} />
            <Text align="center" color="gray.600">
              Detalhes de um agendamento
            </Text>
          </Stack>
        </Stack>
        <Stack flex={1}>
          <Image src={image3} rounded={8} />
          <Text fontSize="lg" color="gray.500">
            O cliente recebe em tempo real, confirmações, lembretes, alterações
            de agendamento e muito mais!
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
});
