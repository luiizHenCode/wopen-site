import { memo } from "react";
import { WhatsappBrand } from "./CustomIcons";
import { Circle, Tooltip } from "@chakra-ui/react";

export const FloatButton = memo(() => {
  return (
    <Tooltip hasArrow placement="top" label="Chama no ZAP!" bottom={2}>
      <Circle
        as="a"
        href="https://wa.link/4q0aam"
        target="_blank"
        size={16}
        bgColor="#25d366"
        position="fixed"
        zIndex={9}
        bottom={{ base: 4, md: 12 }}
        right={{ base: 4, md: 12 }}
        pl={1}
        cursor="pointer"
        transition="all 0.2s"
        transform="scale(0.9)"
        _hover={{ transform: "scale(1)" }}
        _active={{ transform: "scale(0.9)" }}
      >
        <WhatsappBrand color="white" boxSize={8} />
      </Circle>
    </Tooltip>
  );
});
