import { memo } from "react";
import {
  Box,
  Circle,
  HStack,
  Image,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";

import wopenApp from "assets/wopen-app.png";

type Props = StackProps & {
  url?: string;
  img?: string;
  boxBgColor?: string;
};

export const FloatPage = memo(({ url, img, boxBgColor, ...rest }: Props) => {
  return (
    <VStack
      h="auto"
      rounded={8}
      overflow="hidden"
      filter={"drop-shadow(16px 16px 0 rgba(0, 0, 0, 0.08))"}
      transition="all 0.2s"
      _hover={{
        transform: "translateY(-6px)",
        filter: "drop-shadow(16px 22px 0 rgba(0, 0, 0, 0.1))",
      }}
      {...rest}
    >
      <HStack
        h={8}
        w="full"
        bgColor="gray.200"
        mb={-2}
        px={4}
        justifyContent="center"
        position="relative"
      >
        <HStack position="absolute" left={4}>
          <Circle bgColor="red.400" size="3" />
          <Circle bgColor="yellow.400" size="3" />
          <Circle bgColor="green.400" size="3" />
        </HStack>

        <Text color="gray.600" fontSize="sm">
          {url ?? "app.wopen.com.br"}
        </Text>
      </HStack>
      <Box w="full" bgColor={boxBgColor}>
        <Image w="full" src={img ?? wopenApp} />
      </Box>
    </VStack>
  );
});
