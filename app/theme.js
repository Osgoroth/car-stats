// theme.js
// from: https://chakra-ui.com/docs/styled-system/color-mode

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Agdasima' sans-serif",
    heading: "'Agdasima' sans-serif",
  },
  fontWeights: {
    normal: 500,
    bold: 700,
  },
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
        fontSize: ["1.2rem", "1.3rem", "1.4rem"],
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "400",
      },
    },
  },
});

export default theme;
