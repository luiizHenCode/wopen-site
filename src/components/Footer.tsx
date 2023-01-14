import { memo } from "react";
import { InstagramLogo } from "phosphor-react";
import {
  Box,
  Circle,
  Divider,
  HStack,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FacebookBrand, WhatsappBrand, AppBrand } from "./CustomIcons";
import { Link } from "react-router-dom";

export const Footer = memo(() => {
  const siteMap = [
    {
      title: "MAPA DO SITE",
      items: [
        { label: "Inicio", link: "/" },
        { label: "Vantagens", link: "/#vantagens" },
        { label: "Prático e objetivo", link: "/#pratico-e-objetivo" },
        { label: "Instalação", link: "/#instalacao" },
      ],
    },
  ];

  const resourcesMap = [
    {
      title: "RECURSOS",
      items: [
        { label: "Etiquetas", link: "/recursos/etiquetas" },
        { label: "Atendente virtual", link: "/recursos/atendente-virtual" },
        {
          label: "Canais de atendimento",
          link: "/recursos/canais-de-atendimento",
        },
        { label: "Nova conversa", link: "/recursos/nova-conversa" },
        { label: "Grupos de contato", link: "/recursos/grupos-de-contato" },
        { label: "Delivery", link: "/recursos/delivery" },
        { label: "Agenda", link: "/recursos/agenda" },
      ],
    },
  ];

  const contactMap = [
    {
      title: "CONTATO",
      items: [
        {
          label: "Rua Maranhão, n° 753, Jacaré <br /> Cabreúva-SP",
          link: "https://goo.gl/maps/NtPwX1tp4pUy6bQz5",
        },
        {
          label: "contato@opendev.dev.br",
          link: "mailto:contato@opendev.dev.br",
        },
        {
          label: "(11) 3777-7436",
          link: "tel:+551137777436",
        },
      ],
    },
  ];

  const socialMedia = [
    {
      Icon: <WhatsappBrand boxSize={6} />,
      label: "Whatsapp",
      link: "https://wa.link/4q0aam",
    },
    {
      Icon: <FacebookBrand boxSize={5} />,
      label: "Facebook",
      link: "https://www.facebook.com/wopenapp",
    },
    {
      Icon: <InstagramLogo size={25} color="currentColor" />,
      label: "Instagram",
      link: "https://www.instagram.com/w.openapp/",
    },
  ];

  return (
    <VStack id="contato" w="full" bgColor="gray.800" spacing={0}>
      <Stack w="full" align="center" px={6}>
        <Stack w="full" maxW="7xl" spacing={0}>
          <Stack direction={{ base: "column", md: "row" }} py={8} spacing={10}>
            <Stack spacing={0}>
              <Box h={12}>
                <AppBrand mt={-12} boxSize={36} />
              </Box>
              <Text color="gray.300" fontSize="lg">
                Simplificando seu atendimento.
              </Text>
            </Stack>

            <Spacer />

            <Stack direction="row" gap={10} wrap="wrap">
              {siteMap.map((item, index) => (
                <Stack key={index} spacing={2}>
                  <Heading color="gray.500" fontSize="sm">
                    {item.title}
                  </Heading>

                  {item.items.map((item, index) => (
                    <Text
                      key={index}
                      as="a"
                      href={item.link}
                      color="gray.300"
                      fontSize="md"
                      dangerouslySetInnerHTML={{ __html: item.label }}
                      _hover={{ color: "gray.100" }}
                    />
                  ))}
                </Stack>
              ))}

              {resourcesMap.map((item, index) => (
                <Stack key={index} spacing={2}>
                  <Heading color="gray.500" fontSize="sm">
                    {item.title}
                  </Heading>

                  {item.items.map((item, index) => (
                    <Text
                      key={index}
                      as={Link}
                      to={item.link}
                      color="gray.300"
                      fontSize="md"
                      dangerouslySetInnerHTML={{ __html: item.label }}
                      _hover={{ color: "gray.100" }}
                    />
                  ))}
                </Stack>
              ))}

              {contactMap.map((item, index) => (
                <Stack key={index} spacing={2}>
                  <Heading color="gray.500" fontSize="sm">
                    {item.title}
                  </Heading>

                  {item.items.map((item, index) => (
                    <Text
                      key={index}
                      as="a"
                      href={item.link}
                      target="_blank"
                      color="gray.300"
                      fontSize="md"
                      dangerouslySetInnerHTML={{ __html: item.label }}
                      _hover={{ color: "gray.100" }}
                    />
                  ))}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider borderColor="whiteAlpha.100" />
      <Stack w="full" align="center" px={6}>
        <Stack w="full" maxW="7xl" spacing={0}>
          <Stack direction={{ base: "column", md: "row" }} py={6}>
            <Text fontSize="sm" color="gray.400">
              © {new Date().getFullYear()} <b>OpenDEV</b>. Todos os direitos
              reservados.
            </Text>
            <Spacer />

            <HStack spacing={1}>
              {socialMedia.map(({ Icon, link }, index) => (
                <Circle
                  as="a"
                  href={link}
                  target="_blank"
                  key={index}
                  p={2}
                  cursor="pointer"
                  color="whiteAlpha.500"
                  _hover={{ color: "teal" }}
                >
                  {Icon}
                </Circle>
              ))}
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </VStack>
  );
});
