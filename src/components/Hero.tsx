import { memo, useMemo } from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Hide,
  Image,
  ScaleFade,
  SlideFade,
  Stack,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import {
  CaretRight,
  MessengerLogo,
  PhoneCall,
  TelegramLogo,
  WhatsappLogo,
} from "phosphor-react";
import { scrollToTarget } from "utils/scrollToTarget";

export const Hero = memo(() => {
  const entryChannels = useMemo(
    () => [
      {
        Icon: WhatsappLogo,
        title: "Whatsapp",
      },
      {
        Icon: TelegramLogo,
        title: "Telegram",
      },
      {
        Icon: MessengerLogo,
        title: "Messenger",
      },
      {
        Icon: PhoneCall,
        title: "Telefone",
      },
    ],
    []
  );

  return (
    <HStack
      w="full"
      minH={{ base: "calc(100vh - 80px)" }}
      justifyContent="center"
      bgColor="gray.900"
      px={6}
      py={12}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        align="center"
        w="full"
        maxW="7xl"
        h="full"
        spacing={6}
      >
        <VStack flex={1} spacing={10}>
          <Box>
            <Text
              color="gray.200"
              fontSize="lg"
              letterSpacing="wide"
              textAlign={{ base: "center", lg: "left" }}
            >
              <b>WhatsApp Business</b> API Oficial
            </Text>
            <Heading
              fontSize={{ base: "5xl", md: "6xl" }}
              fontWeight="medium"
              lineHeight="110%"
              letterSpacing="tight"
              color="white"
              textAlign={{ base: "center", lg: "left" }}
            >
              Centralize seus{" "}
              <chakra.span bgGradient="linear(to-r, teal, white)" bgClip="text">
                atendimentos
              </chakra.span>{" "}
              em um só lugar!
            </Heading>
          </Box>

          <VStack spacing={4}>
            <Text
              color="gray.300"
              fontSize="xl"
              lineHeight="short"
              textAlign={{ base: "center", lg: "left" }}
            >
              Com o <b>Chatbot WOPEN</b>, é possivel integrar varios canais de
              atendimento em um lugar só! Tenha mais controle de seus
              atendimentos.
            </Text>

            <HStack w="full" hidden>
              {entryChannels.map(({ Icon, title }) => (
                <Center
                  key={title}
                  p={3}
                  rounded="full"
                  bgColor="whiteAlpha.50"
                >
                  <Icon size={26} weight="fill" color="white" />
                </Center>
              ))}
            </HStack>
          </VStack>
          <Stack
            w="full"
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center", lg: "left" }}
            gap={4}
          >
            <Button
              as="a"
              href="https://wa.link/4q0aam"
              target="_blank"
              h="14"
              px={8}
              colorScheme="teal"
              rounded="full"
              _hover={{ transform: "scale(1.1)", boxShadow: "lg" }}
            >
              <Text fontSize="lg" fontWeight="semibold">
                Quero contratar
              </Text>
            </Button>

            <Button
              h="14"
              px={6}
              variant="ghost"
              color="gray.200"
              colorScheme="whiteAlpha"
              rounded="full"
              onClick={() => scrollToTarget("#vantagens")}
            >
              <Text fontSize="lg" fontWeight="semibold" mr={2}>
                Saber mais
              </Text>
              <CaretRight size={18} weight="bold" color="white" />
            </Button>
          </Stack>
        </VStack>

        <Hide below="lg">
          <VStack
            h="full"
            flex={1}
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <Stack
              position="absolute"
              zIndex={2}
              top="10"
              spacing={4}
              left="50%"
            >
              <SlideFade in={true} delay={1.2} offsetX="20px">
                <HStack
                  w="auto"
                  p={4}
                  spacing={4}
                  rounded={6}
                  bgColor="white"
                  transform="translateX(-15%)"
                  filter="drop-shadow(-8px 8px 0px rgba(0, 0, 0, 0.2))"
                  transition="all 0.3s ease"
                  _hover={{ transform: "translateX(-15%) scale(1.1)" }}
                >
                  <Avatar src="https://i.pravatar.cc/300?img=12" />

                  <Stack spacing={0}>
                    <Text color="gray.600" fontSize="md" letterSpacing="wide">
                      Cliente
                    </Text>
                    <Text color="gray.500" fontSize="xs" letterSpacing="wide">
                      Olá, gostaria de fazer um orçamento.
                    </Text>
                  </Stack>
                </HStack>
              </SlideFade>

              <SlideFade in={true} delay={2.2} offsetX="-20px">
                <HStack
                  w="auto"
                  p={4}
                  spacing={4}
                  rounded={6}
                  bgColor="white"
                  transform="translateX(10%)"
                  filter="drop-shadow(8px 8px 0px rgba(0, 0, 0, 0.2))"
                  transition="all 0.3s ease"
                  _hover={{ transform: "translateX(10%) scale(1.1)" }}
                >
                  <Avatar src="https://i.pravatar.cc/300?img=26" />
                  <Stack spacing={0}>
                    <Text color="gray.600" fontSize="md" letterSpacing="wide">
                      Atendente
                    </Text>
                    <Text color="gray.500" fontSize="xs" letterSpacing="wide">
                      Claro, qual o serviço que você deseja?
                    </Text>
                  </Stack>
                </HStack>
              </SlideFade>

              <SlideFade in={true} delay={3.2} offsetX="20px">
                <HStack
                  w="auto"
                  p={4}
                  spacing={4}
                  rounded={6}
                  bgColor="white"
                  transform="translateX(-15%)"
                  filter="drop-shadow(-8px 8px 0px rgba(0, 0, 0, 0.2))"
                  transition="all 0.3s ease"
                  _hover={{ transform: "translateX(-15%) scale(1.1)" }}
                >
                  <Avatar src="https://i.pravatar.cc/300?img=12" />

                  <Stack spacing={0}>
                    <Text color="gray.600" fontSize="md" letterSpacing="wide">
                      Cliente
                    </Text>
                    <Text color="gray.500" fontSize="xs" letterSpacing="wide">
                      Gostaria de conhecer o Wopen.
                    </Text>
                  </Stack>
                </HStack>
              </SlideFade>
            </Stack>
            <ScaleFade in={true} initialScale={0.2} delay={0.2}>
              <Image
                h="70vh"
                objectFit="cover"
                rounded={8}
                borderTopRightRadius="50%"
                filter="drop-shadow(16px 16px 0px rgba(0, 0, 0, 0.1))"
                src="https://media.istockphoto.com/id/1053499632/photo/close-up-of-man-typing-on-laptop.jpg?s=612x612&w=0&k=20&c=fRKHKOz1HOJlUSJGxFuUwLFyBy9O6KRsca83kSyLzIU="
              />
            </ScaleFade>
          </VStack>
        </Hide>
      </Stack>
    </HStack>
  );
});
