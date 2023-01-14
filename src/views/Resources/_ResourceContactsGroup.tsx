import { memo } from "react";

import { Heading, Image, Stack, Text } from "@chakra-ui/react";

import image from "assets/resources/grupos-de-contato.png";
import image2 from "assets/resources/workflow-grupo-contato.png";

import { FloatPage } from "components/FloatPage";

export const ResourceContactsGroup = memo(() => {
  return (
    <Stack flex={1} spacing={4} py={3}>
      <Stack direction={{ base: "column", md: "row" }} gap={4}>
        <Stack flex={1}>
          <Heading color="gray.400" fontSize="2xl">
            Melhore a comunicação com seus clientes através de grupos de contato
          </Heading>

          <Text fontSize="lg" color="gray.500">
            E se pudesse fazer fluxos diferentes para contatos diferentes? Com o
            grupo de contato isso é possivel!
          </Text>

          <Text fontSize="lg" color="gray.500">
            Veja abaixo, um exemplo de como pode ser feito, um fluxo com Grupo
            de Contato
          </Text>
        </Stack>
        <Stack flex={1}>
          <Image
            src={image}
            rounded={8}
            filter="drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.5))"
          />
          <Text align="center" color="gray.600">
            Exemplo de um grupo de contato
          </Text>
        </Stack>
      </Stack>

      <FloatPage img={image2} />
    </Stack>
  );
});
