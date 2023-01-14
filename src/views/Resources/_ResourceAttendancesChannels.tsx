import { memo } from "react";
import { HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";

import image from "assets/resources/canais-de-atendimento.png";
import { CheckCircle } from "phosphor-react";

export const ResourceAttendancesChannels = memo(() => {
  const channels = [
    {
      name: "Whatsapp Oficial",
      description:
        "Tenha um número Whatsapp oficial Meta e converse com seus contatos de maneira proficional, com disponibilidade 24h e 7 dias por semana, sem ter um aparelho conectado, e desfrutando de todos os recursos oficiais Meta.",
    },
    {
      name: "Whatsapp Web",
      description:
        "Tenha um número Whatsapp comum conectado a plataforma para envios em massa e avisos para os clientes.",
    },
    {
      name: "Messenger Facebook",
      description:
        "Tenha mais controle no atendimento e gerencimaento das páginas do Facebook, podendo ter mais de uma forma de atendimento integrada, facilitando o atendimento em um único lugar.",
    },
    {
      name: "Telegram",
      description:
        "Integre o Telegram para ter mais uma opção de atendimento, com a 2° maior rede de conversação do mundo.",
    },
    {
      name: "Chat Interno",
      description:
        "Converse com os colaboradores da empresa pela própria plataforma, tendo mais gerenciamento das conversas.",
    },
    {
      name: "Softphone",
      description:
        "Tenha um telefone web em seu computador, fazendo ligações de Ramal para Ramal, e ligações externas com seus clientes.",
    },
  ];

  return (
    <Stack direction={{ base: "column", md: "row" }} py={3} spacing={4}>
      <Stack flex={1}>
        <Image src={image} rounded={8} />
        <Text align="center" color="gray.600">
          Canais de atendimento disponíveis
        </Text>
      </Stack>
      <Stack flex={1} spacing={4}>
        <Heading color="gray.400" fontSize="2xl">
          Integre os principais canais de atendimento
        </Heading>

        {channels.map((channel) => (
          <Stack
            key={channel.name}
            spacing={2}
            p={4}
            bgColor="whiteAlpha.50"
            rounded={6}
          >
            <HStack>
              <CheckCircle size={18} color="white" weight="fill" />
              <Heading color="gray.300" fontSize="xl">
                {channel.name}
              </Heading>
            </HStack>

            <Text color="gray.500" pl={6}>
              {channel.description}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
});
