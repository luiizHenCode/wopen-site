import { memo } from "react";

import { Heading, Image, Stack, Text } from "@chakra-ui/react";

import image from "assets/resources/catalogo.png";
import image2 from "assets/resources/carrinho.png";
import image3 from "assets/resources/recebimento.png";
import { FloatPage } from "components/FloatPage";

export const ResourceDelivery = memo(() => {
  return (
    <Stack py={3} spacing={4}>
      <Heading color="gray.400" fontSize="2xl">
        Atender, e também vender!
      </Heading>

      <FloatPage img={image} />

      <Stack direction={{ base: "column", md: "row" }} py={3} gap={4}>
        <Stack flex={1} spacing={4}>
          <Text fontSize="lg" color="gray.500">
            Além de atendimento ao cliente, é possivel ter um e-commerce
            totalmente editavel.
          </Text>
          <Text fontSize="lg" color="gray.500">
            Adicione produtos, defina os valores e quantidades. Sua pagina de
            delivery será de acordo com seu estoque.
          </Text>

          <Text fontSize="lg" color="gray.500">
            Também é possivel importar produtos, quantidades, imagens e valores
            de um banco de dados já existente, tambem importamos do PDV.
          </Text>

          <Stack>
            <Image src={image2} rounded={8} />
            <Text align="center" color="gray.600">
              Card do atendente para fazer um novo pedido.
            </Text>
          </Stack>
        </Stack>
        <Stack flex={1}>
          <Image src={image3} />
          <Text fontSize="lg" color="gray.500">
            Além do cliente ter a facilidade de comprar sozinho, o atendente
            pode enviar os detalhes de cada produto e também realizar pedidos.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
});
