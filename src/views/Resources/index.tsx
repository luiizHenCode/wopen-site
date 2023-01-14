import { memo, useMemo } from "react";

import { Layout } from "layout";
import { useParams } from "react-router-dom";

import { ResourcesCards } from "components/ResourcesCards";
import { ModalResourceDetail } from "./_ModalResourceDetail";
import { useDisclosure } from "@chakra-ui/react";

type Props = {
  openModal?: boolean;
};

export const Resources = memo(({ openModal }: Props) => {

  

  return (
    <Layout>
      <ResourcesCards />
      <ModalResourceDetail isOpen={openModal} />
    </Layout>
  );
});
