import { memo } from "react";
import { Stack } from "@chakra-ui/react";

import { CallToAction } from "components/CallToAction";
import { FloatButton } from "components/FloatButton";
import { NavMenu } from "components/NavMenu";
import { Footer } from "components/Footer";

type Props = {
  children: React.ReactNode;
};

export const Layout = memo(({ children }: Props) => {
  return (
    <Stack w="full" minH="full" spacing={0}>
      <NavMenu />
      {children}
      <CallToAction />
      <Footer />
      <FloatButton />
    </Stack>
  );
});
