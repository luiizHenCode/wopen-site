import { extendTheme } from "@chakra-ui/react";

export const THEME = extendTheme({
  fonts: {
    body: "InterVariable,-apple-system,system-ui,sans-serif",
    heading: "InterVariable,-apple-system,system-ui,sans-serif",
  },
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },

      html: {
        scrollBehavior: "smooth",
      },

      body: {
        // minHeight: "100vh",
        // overflowY: "overlay",
        background: "gray.900",
      },

      // "#root": {
      //   position: "absolute",
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   bottom: 0,
      //   overflowX: "hidden",
      // },

      option: {
        color: "darkblue.900",
      },

      "::-webkit-scrollbar": {
        width: "6px",
      },
      "::-webkit-scrollbar-track": {
        background: "rgba(0, 0, 0, 0.05)",
      },

      "::-webkit-scrollbar-thumb": {
        background: "whiteAlpha.100",
        borderRadius: "3px",
      },

      "::-webkit-scrollbar-thumb:hover": {
        background: "whiteAlpha.300",
      },

      "::-webkit-calendar-picker-indicator": {
        filter: "invert(1)",
      },
    },
  },
  colors: {},
});
