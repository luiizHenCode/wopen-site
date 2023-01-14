import { memo, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

import { resources } from "constants/resources";

import { ResourceAttendancesChannels } from "./_ResourceAttendancesChannels";
import { ResourceVirtualAttendance } from "./_ResourceVirtualAttendance";
import { ResourceContactsGroup } from "./_ResourceContactsGroup";
import { ResourceScheduling } from "./_ResourceScheduling";
import { ResourceDelivery } from "./_ResourceDelivery";
import { ResourceNewChat } from "./_ResourceNewChat";
import { ResourceTag } from "./_ResourceTag";

type Props = {
  isOpen?: boolean;
};

export const ModalResourceDetail = memo(({ isOpen = false }: Props) => {
  const params = useParams<{ resource?: string }>();
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/recursos");
  };

  const renderResourceComponents = useMemo(() => {
    switch (params?.resource) {
      case "etiquetas":
        return <ResourceTag />;
      case "atendente-virtual":
        return <ResourceVirtualAttendance />;
      case "canais-de-atendimento":
        return <ResourceAttendancesChannels />;
      case "nova-conversa":
        return <ResourceNewChat />;
      case "grupos-de-contato":
        return <ResourceContactsGroup />;
      case "delivery":
        return <ResourceDelivery />;
      case "agenda":
        return <ResourceScheduling />;
      default:
        return <div>ModalResourceDetail</div>;
    }
  }, [params?.resource]);

  const renderModalHeader = useMemo(() => {
    return resources.find((resource) => resource.id === params?.resource);
  }, [params?.resource]);

  const renderResourceIcon = useMemo(() => {
    if (!renderModalHeader?.Icon) return;

    const { Icon } = renderModalHeader;

    return <Icon size={28} color="white" />;
  }, [renderModalHeader]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", lg: "4xl" }} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent bgColor="gray.800">
        <ModalHeader
          bgColor="gray.800"
          borderBottomWidth={1}
          borderBottomColor="whiteAlpha.50"
          position={{ base: "sticky", lg: "relative" }}
          top={0}
          zIndex={2}
        >
          <HStack align="start">
            <Box p={1}>{renderResourceIcon}</Box>
            <Stack spacing={0}>
              <Heading size="md" color="gray.300">
                {renderModalHeader?.title}
              </Heading>
              <Text
                fontSize="md"
                fontWeight="normal"
                color="gray.500"
                noOfLines={1}
              >
                {renderModalHeader?.description}
              </Text>
            </Stack>
          </HStack>
          <ModalCloseButton color="white" />
        </ModalHeader>

        <ModalBody>{renderResourceComponents}</ModalBody>
      </ModalContent>
    </Modal>
  );
});
