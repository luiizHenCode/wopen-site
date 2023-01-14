import { ChakraProvider } from "@chakra-ui/react";

import { Home } from "./views/Home";
import { THEME } from "./styles/theme";
import { AppRoutes } from "routes/app.routes";

export const App = () => {
  return (
    <ChakraProvider
      theme={THEME}
      toastOptions={{ defaultOptions: { duration: 2000 } }}
    >
      <AppRoutes />
    </ChakraProvider>
  );
};
