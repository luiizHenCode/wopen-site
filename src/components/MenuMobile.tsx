import { memo } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { scrollToTarget } from "utils/scrollToTarget";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuMobile = memo(({ isOpen, onClose }: Props) => {
  return (
    <Drawer
      onClose={onClose}
      placement="left"
      isOpen={isOpen}
      autoFocus={false}
      returnFocusOnClose={false}
    >
      <DrawerOverlay />
      <DrawerContent bgColor="gray.800">
        <DrawerHeader
          borderBottomWidth={1}
          borderBottomColor="whiteAlpha.50"
          minH={20}
        />
        <DrawerBody px={3}>
          <Stack gap={3} spacing={0} pt={4}>
            <Heading fontSize="sm" color="gray.500" pl={6}>
              MENU
            </Heading>

            <Button
              as={Link}
              to="/"
              size="lg"
              justifyContent="flex-start"
              variant="ghost"
              colorScheme="whiteAlpha"
              onClick={onClose}
            >
              <Text>Inicio</Text>
            </Button>
            <Button
              as={Link}
              to="/recursos"
              size="lg"
              justifyContent="flex-start"
              variant="ghost"
              colorScheme="whiteAlpha"
              onClick={onClose}
            >
              <Text>Recursos</Text>
            </Button>
            <Button
              size="lg"
              justifyContent="flex-start"
              variant="ghost"
              colorScheme="whiteAlpha"
              onClick={() => scrollToTarget("#contato", onClose)}
            >
              <Text>Contato</Text>
            </Button>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
