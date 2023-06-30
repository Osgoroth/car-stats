// theme.js
// from: https://chakra-ui.com/docs/styled-system/color-mode

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "thin",
        
      },
    },
    List: {
      variants: {
        dashed: {
          
        }
      }
    }
  },
});

export default theme;
