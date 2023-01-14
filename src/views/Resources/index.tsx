import { memo } from "react";

import { Layout } from "layout";

import { ResourcesCards } from "components/ResourcesCards";
import { ModalResourceDetail } from "./_ModalResourceDetail";

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
